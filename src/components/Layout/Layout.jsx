import React ,{useState,useEffect}from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar.module';
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop.jsx";

export default function Layout() {
   const [counter,setCounter]= useState(0)
   useEffect(()=>{

   },[])
  return<>
    <ScrollToTop />
  <Navbar></Navbar>
  <div className="container mx-auto my-6 py-10">
    <Outlet></Outlet>
  </div>
    <Footer></Footer>
  </>
}
