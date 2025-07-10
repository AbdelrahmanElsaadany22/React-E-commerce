import React ,{useState,useEffect, useContext}from 'react'
import style from './Login.module.css'
import { Formik, useFormik } from "formik"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import * as y from 'yup'
import { UserContext } from "../../Context/UserContext"
import { Link } from 'react-router-dom';

export default function Login() {
  let {setUserLogin}=useContext(UserContext)

  const [apiError,setapiError]=useState('')
  const [isLoading,setisLoading]=useState(false)
  let navigate=useNavigate()
   function handleLogin(formValues){
    setisLoading(true)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',formValues)
    .then((response)=>{
      localStorage.setItem('userToken',response.data.token)
      setUserLogin(response.data.token)
      navigate('/')
      console.log(apiResponse)
      setisLoading(false)
    })
    .catch((apiResponse)=>{
      setisLoading(false)
        setapiError(apiResponse?.response?.data?.message)
      })
  }
 let yup = y.object().shape({
  email: y.string('Please enter the email as string')
    .email('Email is invalid')
    .required('This field is required'),

  password: y.string()
    .min(4, 'Password must be at least 4 characters')
    .max(50, 'Password must be at most 50 characters')
    .matches(
      /^[A-Z][A-Za-z0-9!@#$%^&*()_+=\-{}[\]|:;'",.<>?/`~]{3,}$/,
      'Password must start with an uppercase letter and contain at least 4 characters'
    )
    .required('This field is required'),
});
  let formik=useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:yup,
    onSubmit:handleLogin
  })
   useEffect(()=>{

   },[])
  return<>
  <div className="py-6 max-w-md mx-auto">

 {apiError? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {apiError}</div>:null}

  <h2 className="text-3xl font-bold mb-6 text-green-600">Login Now</h2>
  <form onSubmit={formik.handleSubmit}>

  <div className="relative z-0 w-full mb-5 group">
    <input
      id="email"
      name="email"
      type="email"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.email}
      placeholder=" "
      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
    />
    <label
      htmlFor="email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Enter Your Email address
    </label>
  </div>
  {formik.errors.email && formik.touched.email?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.email }
</div>:null}

  <div className="relative z-0 w-full mb-5 group">
    <input
      id="password"
      name="password"
      type="password"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.password}
      placeholder=" "
      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
    />
    <label
      htmlFor="password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Enter Your Password
    </label>
  </div>
  {formik.errors.password && formik.touched.password?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  {formik.errors.password }
</div>:null}
  <div className="flex items-center">  <button
    type="submit"
    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
     {isLoading?<i className="fas fa-spinner fa-spin"></i>:'Login'}
  </button>
  <p className="px-2">Didn't Have An Account ? <span className="font-semibold"> <Link to={'/register'}> Register Now </Link></span></p></div>

</form>

  </div>

  </>
}
