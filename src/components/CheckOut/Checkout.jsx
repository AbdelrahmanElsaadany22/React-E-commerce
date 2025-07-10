import React ,{useState,useEffect, useContext}from 'react'
import { Formik, useFormik } from "formik"
import { Link } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";
export default function Checkout(){
      let { checkOut } = useContext(CartContext);
      let formik=useFormik({
    initialValues:{
      details:'',
      phone:'',
      city:''
    },
    onSubmit:()=>handleCheckout('6861361407d9989f30df0fa7','http://localhost:5173')
  })

  const [apiError,setapiError]=useState('')
  const [isLoading,setisLoading]=useState(false)

  async function handleCheckout(cartId,url){
    let {data} = await checkOut(cartId, url, formik.values);
    console.log(data)
    if(data.status==='success'){
     window.location.href = data.session.url;
    }
  }
  return<>
  <div className="py-6 max-w-md mx-auto">
  <h2 className="text-3xl font-bold mb-6 text-green-600">Checkout Now</h2>
  <form onSubmit={formik.handleSubmit}>

  <div className="relative z-0 w-full mb-5 group">
    <input
      id="details"
      name="details"
      type="text"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.details}
      placeholder=" "
      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
    />
    <label
      htmlFor="details"
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Enter Your details:
    </label>
  </div>





  <div className="relative z-0 w-full mb-5 group">
    <input
      id="phone"
      name="phone"
      type="tel"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.phone}
      placeholder=" "
      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
    />
    <label
      htmlFor="phone"
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Enter Your phone:
    </label>
  </div>



  <div className="relative z-0 w-full mb-5 group">
    <input
      id="city"
      name="city"
      type="text"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.city}
      placeholder=" "
      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
    />
    <label
      htmlFor="city"
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Enter Your city:
    </label>
  </div>



  <div className="flex items-center">  <button
    type="submit"
    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
     {isLoading?<i className="fas fa-spinner fa-spin"></i>:'Pay Now'}
  </button>
</div>

</form>

  </div>

  </>
}