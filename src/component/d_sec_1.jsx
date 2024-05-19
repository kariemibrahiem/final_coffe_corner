import {React , useEffect , useState} from 'react'
import Sec_1_cards from './d_sec_1_cards'
import p1 from "../assets/coffee2.png";
import p2 from "../assets/coffee-white.png";
import p3 from "../assets/website/coffee_logo.png";
const Sec_1 = () => {
  // const cards = [{title:"espresso" , mg:p1},{title:"americano" , mg:p2},{title:"cappuccino" , mg:p3}]
  let cards = [
    {title:"espresso" , mg:p1   , pr:"10$"},
    {title:"americano" , mg:p2   , pr:"20$"},
    {title:"cappuccino" , mg:p3   , pr:"15$"},
  
    // {title:"americano" , mg:p2  , pr:"200$"},
    // {title:"cappuccino" , mg:p3 , pr:"200$"}
  ]
  const [DT , setDT] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/productds")?
    fetch("http://localhost:4000/productds")
    .then((res)=> res.json())
    .then((data)=> {console.log(data);
      setDT(data);
    } ):
    setDT(cards)
  } , ) 
  // {
  //   let n = document.getElementById("i");
  // }
  return (
    <div className='flex-col relative mt-20  justify-center pt-10 pb-20'>
        <h2 className='font_curve text-3xl font-bold mb-10'>Best Coffee For You</h2>
        <div className='flex lg:gap-20 cards_contt justify-center'>
        {DT.map((item , key)=>{
              return(
                      <Sec_1_cards k={item.id}  title={item.title} price={item.price} mg={p2} dis={item.dis} />
                    )
                  })}
        </div>
    </div>
  )
}

export default Sec_1