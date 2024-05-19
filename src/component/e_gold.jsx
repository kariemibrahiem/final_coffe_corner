import React from 'react'
import pg1 from "../assets/coffee-white.png"
import LockIcon from '@mui/icons-material/Lock';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import "./style.css";
import Aos from 'aos';
import "aos/dist/aos.css";
function Gold() {
  return (
    <div className=' flex lg:pl-40 lg:pr-40 gold pr-10 mb-6 shadow-2xl pt-20'>
        
        <div className="right">
            <img data-aos="flip-left" className=' max-w-80 loop' src={pg1} alt="" />
        </div>
        <div className="left  ">
            <h2 className=' font_curve text-2xl relative bottom-10 font-mono text-secondary'>premium blen <br/> coffee </h2>
            <p className=' max-w-72'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
            <div data-aos="fade-left" className="sec_div_1 relative right-20 ">
                <div className="card_sec m-5">
                    <LockIcon/>premium coffee
                </div>
                <div className="card_sec m-5">
                    <FastfoodIcon/>  hot coffee
                </div>
                <div className="card_sec m-5">
                    <DeliveryDiningIcon/>delivery
                </div>
            </div>
            <div data-aos="fade-right" className="sec_div_2">
                <div data-aos="fade-up" className="hrr bg-secondary bottom-10 relative ml-20  w-52 rotate-90 ml-5 h-2 rounded ">,</div>
                <h2 className='font_curve text-2xl relative ml-52 bottom-40 font-mono text-secondary '>Tea Lover</h2>
                <p className='relative left-48 bottom-40 max-w-40'>Much like writing code, brewing the perfect cup of tea requires patience, precision, and a dash of passion to create a comforting</p>
            </div>
        </div>
    </div>
  )
}

export default Gold