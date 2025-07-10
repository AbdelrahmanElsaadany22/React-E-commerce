import React ,{useState,useEffect}from 'react'
import mainSlider from '../../assets/images/main.jpg'
import secondslider from '../../assets/images/slider2.jpg'
import thirdslider from '../../assets/images/slider3.jpg'
import img2 from '../../assets/images/r-b.png'
import img1 from '../../assets/images/r-t.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MainSlider() {
    var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
  };

  return<>
  <div className="row">
    <div className="w-3/4">
    <Slider {...settings}>
<img src={mainSlider}className="w-full h-[400px]"/>
<img src={secondslider}className="w-full h-[400px]"/>
<img src={thirdslider}className="w-full h-[400px]"/>
    </Slider>

    </div>

    <div className="w-1/4">
      <img src={img1}className="w-full h-[200px]"/>
      <img src={img2}className="w-full h-[200px]"/>


    </div>
  </div>
  </>
}
