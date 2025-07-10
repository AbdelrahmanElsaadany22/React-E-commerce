import React ,{useState,useEffect, useContext}from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import logo from '../../assets/icon.svg'
import { UserContext } from "../../Context/UserContext"
import { CartContext } from "../../Context/CartContext"
import mainImage from '../../assets/images/main.png'
export default function Navbar() {

 const {userLogin,setUserLogin}=useContext(UserContext)
 let {cart}=useContext(CartContext)
  let navigate=useNavigate()
 function handleLogout(){
  localStorage.removeItem('userToken')
  setUserLogin(null)
  navigate('/login')
 }
  return<>
  <nav className="bg-gray-100 z-50 text-center static lg:fixed top-0 left-0 right-0 items-center">
    <div className='container justify-between mx-auto py-2 flex flex-col lg:flex-row items-center'>
      <div className='flex flex-col lg:flex-row items-center'>
        <img width ={50} height="auto"src={mainImage} alt="fresh cart logo"/>

        <ul className='flex flex-col lg:flex-row items-center'>
          {userLogin!== null?<>
          <li className="py-2"><NavLink className='mx-2  text-lg text-slate-900 font-light' to=''>Home</NavLink></li>
          <li className="py-2"><NavLink className='mx-2  text-lg text-slate-900 font-light' to='products'>Products</NavLink></li>
          <li className="py-2"><NavLink className='mx-2  text-lg text-slate-900 font-light' to='brands'>Brands</NavLink></li>
          <li className="py-2"><NavLink className='mx-2  text-lg text-slate-900 font-light' to='categories'>Categories</NavLink></li></>:null}

        </ul>
      </div>
      <div>
         <ul className='flex flex-col lg:flex-row items-center'>
          {userLogin===null ? <>
           <li className="py-2"><NavLink className='mx-2  text-lg text-slate-900 font-light' to='login'>Login</NavLink></li>
          <li className="py-2"><NavLink className='mx-2  text-lg text-slate-900 font-light' to='register'>Register</NavLink></li></> :
          <>
          <li className="py-2">
             <NavLink to={'/cart'} className='mx-2 py-4 text-lg relative text-slate-900 font-light cursor-pointer'>
              <i className="fa-solid fa-cart-shopping fa-xl"></i>
              <span className="bg-green-600 text-white p-1.5 text-sm absolute top-0 right-[-5px] rounded-2xl ">{cart?.numOfCartItems}</span>
             </NavLink>
          </li>
           <li onClick={handleLogout} className="py-2"><span className='mx-2  text-lg text-slate-900 font-light cursor-pointer'>Logout</span></li>
           </>
           }
          <li className="flex items-center">
            <i className="fab mx-2 fa-facebook"></i>
            <i className="fab mx-2 fa-twitter"></i>
            <i className="fab mx-2 fa-instagram"></i>
            <i className="fab mx-2 fa-youtube"></i>
            <i className="fab mx-2 fa-tiktok"></i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
}