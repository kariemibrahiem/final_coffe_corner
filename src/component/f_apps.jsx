import React from 'react'
import "./style.css";
import pa1 from "../assets/apple_white.png";
import pa2 from "../assets/google.png";
const Apps = () => {
  return (
    <div className='apps pt-10 mb-7 shadow-2xl'>
        <h2 data-aos="fade-right" className=' text-4xl max-w-72 text-white ml-10 font_curve '>Coffee Cafe is available for Android and IOS</h2>
        <div className="flex gap-10 ml-28">
            <a  href=""><img  className=' max-w-10' src={pa1} alt="" /></a>
            <a  href=""><img  className=' max-w-10' src={pa2} alt="" /></a>
        </div>
    </div>
  )
}

export default Apps;