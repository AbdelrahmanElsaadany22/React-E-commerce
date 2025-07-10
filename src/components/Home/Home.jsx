import React ,{useState,useEffect}from 'react'
import style from './Home.module.css'
import RecentProducts from "../HomeComponents/RecentProducts"
import CategoriesSlider from "../Categories/Categoris.Slider"
import MainSlider from "./MainSlider"
export default function Home() {
   const [counter,setCounter]= useState(0)
   useEffect(()=>{

   },[])
  return<>
  <MainSlider></MainSlider>
  <CategoriesSlider></CategoriesSlider>
  <RecentProducts></RecentProducts>
  </>
}
