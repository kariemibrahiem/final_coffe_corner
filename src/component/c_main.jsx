import React from 'react'
import "./style.css";
import dark from "../assets/coffee2.png";
// the slick section
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const C_main = () => {
  return (
    <div className='flex main bg-primary  lg:justify-between lg:pl-40 lg:pr-40' >
            <div data-aos="fade-right" data-aos-delay="300" className="right   py-20 pb-10 px-10 max-w-96">
                <h2 className='text-6xl font-bold mt-6'>
                        We serve the richest <span className='font_curve'>Coffee</span> in the city
                </h2>
                <button className='btn rounded-lg mt-6'><span classname="text">coffee and code </span><span><Link  to="products">best brogrammer!</Link></span></button>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className="left mt-12">
              <button className='main_btn_1 mt-5 bg-gradient-to-r to-secondary from-secondary/60 p-2 rounded-md'>hey coder</button>
              <img className='w-80 loop' src={dark} alt="" />
              <button className='main_btn_2 bg-gradient-to-r to-secondary from-secondary/60 p-2 rounded-md'>your coffee</button>
            </div>
    </div>
  )
}

export default C_main;