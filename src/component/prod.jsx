import React, { useEffect, useState } from 'react'
import Sec_1_cards from './d_sec_1_cards'
import p1 from "../assets/coffee2.png";
import p2 from "../assets/coffee-white.png";
import p3 from "../assets/website/coffee_logo.png";
import p4 from "../assets/pr_1.png";
import p5 from "../assets/pr_2.png";
import p6 from "../assets/pr_3.png";
import p7 from "../assets/pr_4.png";
import "./style.css";
import "./z_slide.css";
import Navs from './b_nav';
import { Link } from 'react-router-dom';
const Prod = () => {
    
    const [DT , setDT] = useState([])
    useEffect(()=>{
      fetch("http://localhost:4000/productds")?
      fetch("http://localhost:4000/productds")
      .then((res)=> res.json())
      .then((data)=> {
        setDT(data);
      } ):
      setDT(cards)
    } , );

  

      
      let cards = [
        {title:"espresso" , mg:p1   , pr:"10$"},
        {title:"americano" , mg:p2   , pr:"20$"},
        {title:"cappuccino" , mg:p3   , pr:"15$"},
        {title:"cappuccino" , mg:p5   , pr:"30$"},
      
        // {title:"americano" , mg:p2  , pr:"200$"},
        // {title:"cappuccino" , mg:p3 , pr:"200$"}
      ]

    
                
  
 
  

  return (
    <div className='flex-col relative   justify-center pb-20'>
      <Navs/>
        <h2 className='font_curve mt-10 text-3xl font-bold '>Best Coffee For You</h2>
        <button className='btn rounded-lg mt-10 min-w-48 pt-10'><span className="text">add </span><span><Link  to="add" className=''>shet !</Link></span></button>
        <div className='flex flex-wrap lg:gap-20 prod_const justify-center'>
            {DT.map((item , key)=>{
                    return(
                        <Sec_1_cards k={item.id}  title={item.title} price={item.price} mg={p2} dis={item.dis} /> 
                    )
                  })}
        </div>
        
       
    </div>
  )
}

export default Prod;