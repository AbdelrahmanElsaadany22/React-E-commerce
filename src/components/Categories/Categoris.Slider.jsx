import React ,{useState,useEffect}from 'react'
import style from './Categories.module.css'
import Slider from "react-slick";
import axios from "axios";
import useCategories from "../../Hooks/useCategories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function CategoriesSlider() {
var settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 8,
  slidesToScroll: 3,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1280, 
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
 const { data } = useCategories();
 const categories = data?.data?.data || [];
  return<>
  <div className="py-5 mx-5">
    <h2 className="py-4 text-xl text-gray-600 font-medium">Shop Popular Categories</h2>
  <Slider {...settings}>
  {categories.map((category) => <div>
      <div key={category._id}>
        <img className="category-img" src={category.image} alt={category.name} />
        <h3 className="font-light text-gray-800 mt-2">{category.name}</h3>
      </div>
  </div>)}
</Slider>
  </div>

  </>
}
