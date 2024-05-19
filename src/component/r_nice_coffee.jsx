import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sec_1_cards from './d_sec_1_cards';
import p2 from "../assets/coffee-white.png";
import p1 from "../assets/coffee2.png";
import p3 from "../assets/website/coffee_logo.png";
const Nice_coffee = () => {
  const [DTT , setDTT] = useState([]);
  let {keys} = useParams();

  useEffect(()=>{
    let cards = [
      {title:"espresso" , mg:p1   , pr:"10$"},
      {title:"americano" , mg:p2   , pr:"20$"},
      {title:"cappuccino" , mg:p3   , pr:"15$"},
    
      {title:"americano" , mg:p2  , pr:"200$"},
      {title:"cappuccino" , mg:p3 , pr:"200$"}
    ]
    fetch("http://localhost:4000/productds")?
    fetch("http://localhost:4000/productds")
    .then((res)=> res.json())
    .then((data)=> {console.log(data);
      setDTT(data);
    } ):
    setDTT(cards)
  } , )
  return (
    <div className='nice h-screen min-w-screen text-center flex-col justify-center align-middle'>
        <h1 className='text-3xl justify-center text-center text-white font_curve pt-10 '> Nice Coffee {keys}</h1>
       <div className='flex w-screen'>
       {DTT.map((item , key)=>{
        //  return(
        //    item.id == keys ? <Sec_1_cards k={item.id}  title={item.title} price={item.price} mg={p2} dis={item.dis} />  : ""
        //   )
          })}
       </div>
    </div>
  )
}

export default Nice_coffee;