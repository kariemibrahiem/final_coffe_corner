import React, {  useContext, useState } from 'react';
import logo from "../assets/website/coffee_logo.png";
import { Link } from "react-router-dom";
import "./style.css"
import cof from "../assets/coffee-white.png";
const Navs = (props) => {
    return (
            
                <div  className='bg-gradient-to-r from-secondary to-secondary/70'>
                <div className=" text-white py-2 flex justify-between">
                    <div className="flex justify-between container">
                        <div data-aos="fade-down" data-aos-delay="100" className=" logo-text flex justify-center " style={{alignContent:"center"}}>
                            <img src={logo} className='w-16 h-16' alt="logo" />
                            <Link to="/home" className=' font_curve text-3xl pt-3 mr-5 text-center font-cursive flex justify-center flex-wrap'>
                                coffee code
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" className=" flex gap-5 justify-between">
                                <Link className='links hover:text-black rounded-sm hover:bg-slate-400 hover:p-1 transition-all delay-75 hover:border-r-8' to="home"> home </Link>
                                <Link className='links hover:text-black rounded-sm hover:bg-slate-400 hover:p-1 transition-all delay-75 hover:border-r-8' to="products"> products </Link>
                                <Link className='links hover:text-black rounded-sm hover:bg-slate-400 hover:p-1 transition-all delay-75 hover:border-r-8' to="cart"> cart </Link>
                                <Link  to="products" class="links button"><Link  to="products" class="button-wrapper"><Link  to="products" class="text">cup coffee</Link><span class="icon"><img src={cof} className='svg' alt="" /></span></Link></Link>
                                {/* the button_2 */}
                                    {/* <div>
                                        <Link to="log" class="animated-button ">
                                            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                            <span  class="text">log in</span>
                                            <span class="circle"></span>
                                            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                        </Link>
                                    </div> */}
                                <div>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>
            

       
  )
}

export default Navs