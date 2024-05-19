import React from 'react'
import p1 from "../assets/coffee2.png";
import "./i_log";
import { Link } from 'react-router-dom';
const Sec_1_cards = (props) => {
  const delete_function = (prod_id)=>{
      fetch(`http://localhost:4000/productds/${prod_id}` , {
        method: 'DELETE'
      }).then((res)=>{res.json()}).then((data)=>{console.log(data);})
  }
  return (
    <div className='flex-col hover:shadow-red-300 duration-200 shadow-xl transition mt-20 relative max-w-52 m-5 justify-center bg-gradient-to-b rounded-lg from-slate-100  p-5 to-slate-300  hover:to-secondary'>
        <img   className='img_card' src={`${props.mg}`} alt="" />
        <h1  data-aos="fade-up"  data-aos-delay="50" className='m-3 text-2xl mt-10 font-bold text-red-500'>{props.title}</h1>
        <p  data-aos="fade-up"  data-aos-delay="50">{props.dis}</p>
        <Link to={`/Nice_coffee/${props.k}`}  data-aos="fade-up" data-aos-delay="50"       className='glitch buy' >get cup </Link>
        <Link  data-aos="fade-up" data-aos-delay="50"                        className='glitch delete' onClick={()=>{delete_function(props.k)}} >delete</Link>
        {/* <Link to={`/edit/${props.k}`}  data-aos="fade-up" data-aos-delay="50" className='glitch edit ' >edit</Link> */}
    </div>
  )
}

export default Sec_1_cards;