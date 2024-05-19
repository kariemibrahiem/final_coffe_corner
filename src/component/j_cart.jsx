import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sec_1_cards from './d_sec_1_cards';
import p1 from "../assets/coffee2.png";
import p2 from "../assets/coffee-white.png";
import p3 from "../assets/website/coffee_logo.png";import "./style.css";
import Nice_card from './s_card_nice';
const Carts = () => {
  const [DTT , setDTT] = useState([]);
  let {keys} = useParams();
  let cards = [
    {title:"espresso" , mg:p1   , pr:"10$"},
    {title:"americano" , mg:p2   , pr:"20$"},
    {title:"cappuccino" , mg:p3   , pr:"15$"},
  
    // {title:"americano" , mg:p2  , pr:"200$"},
    // {title:"cappuccino" , mg:p3 , pr:"200$"}
  ]
  useEffect(()=>{
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
        <h1 className='text-3xl justify-center text-center text-white font_curve pt-10 '> last beys </h1>
       <div className='flex w-screen'>
        {DTT.map((item , key)=>{
          return(
            item.id == keys ? <Nice_card k={item.id}  title={item.title} price={item.price} mg={p2} dis={item.dis} />  : ""
            )
            })}
       </div>
    </div>
  )
}

export default Carts;




































// import React, { useEffect, useState } from 'react'
// import Sec_1_cards from './d_sec_1_cards'
// import p1 from "../assets/coffee2.png";
// import p2 from "../assets/coffee-white.png";
// import p3 from "../assets/website/coffee_logo.png";
// import p4 from "../assets/pr_1.png";
// import p5 from "../assets/pr_2.png";
// import p6 from "../assets/pr_3.png";
// import p7 from "../assets/pr_4.png";
// import "./style.css";
// import "./z_slide.css";
// import Navs from './b_nav';
// const Cart = () => {
//     const [n , setN] = useState("");
//     const [p , setP] = useState("");
//     const [m , setM] = useState("");

      
//       let cards = [
//         {title:"espresso" , mg:p1   , pr:"10$"   , dis:true },
//         {title:"americano" , mg:p2   , pr:"20$"  , dis:false },
//         {title:"cappuccino" , mg:p3   , pr:"15$" , dis:false },
//         {title:"cappuccino" , mg:p5   , pr:"30$" , dis:false},
//       ]

//     function add(){
//       cards.push(prod_obj);
//       console.log(cards);
//       localStorage.setItem("product" , JSON.stringify(cards));
//     };
                
//   let prod_obj = {
//     title : n,
//     mg : m,
//     pr : p
//   }
 
  

//   return (
//     <div className='flex-col relative   justify-center pb-20'>
//       <Navs/>
//         <h2 className='font_curve mt-20 text-3xl font-bold mb-10'>Best Coffee For You</h2>
//         <div className='flex flex-wrap lg:gap-20 prod_const justify-center'>
//             {cards.map((item , key)=>{

//                     return(
//                         <div className={item.dis?"hidden":""} >
//                             <Sec_1_cards  pr={item.pr} title={item.title} mg={item.mg}/>
//                         </div>
//                     )
//                 })}
            
//         </div>
        
       
//     </div>
//   )
// }

// export default Cart;