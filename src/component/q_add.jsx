import React, { useState } from 'react'
import Navs from './b_nav';

const Add = () => {
    const [T , setT] = useState("not");
    const [ID , setId] = useState(0);
    const [P , setP] = useState(0);
    const [D , setD] = useState("not");


    
        const submitForm = (events) => {
          setId(ID + 1);
          events.preventDefault();
          fetch("http://localhost:4000/productds"  ,{
      method : "POST" , 
      body : JSON.stringify({
        title : T ,
        id : ID ,
        price : P,
        dis : D
      })
        }).then((res)=>{res.json()}).then((data) => {
          console.log(data);
        })
      // console.log(T);
      // console.log(D);
        document.getElementById("y").value = "";
    }
  return (
    <div className='add  h-screen'>

              <Navs/>
            
        <form onSubmit={submitForm} action="" className='add gap-10 h-screen'>
            <input id='y' onChange={(e)=>setT(e.target.value)} className='  w-screen m-2 focus:scale-95' type="text" placeholder='product title' />
            <input id='y' onChange={(e)=>setD(e.target.value)} className='  w-screen m-2 focus:scale-95' type="text" placeholder='product describe' />
            <input id='y' onChange={(e)=>setP(e.target.value)} className='  w-screen m-2 focus:scale-95' type="text" placeholder='product price' />
            <button type='submit' className=' bg-secondary pt-1  pb-1 pl-10 pr-10 rounded-md text-white font-bold hover:bg-red-800 ' >ADD product</button>
        </form>
    </div>
  )
}

export default Add

















{/* <div className="add  h-screen">
<input onChange={(e)=>{setP(e.target.value)}} type="text" placeholder='name' />
<input onChange={(e)=>{setP(e.target.value)}} type="text" placeholder='price' />
<input onChange={(e)=>{setP(e.target.value)}} type="text" placeholder='image' />
<button 
className=' bg-secondary pt-1  pb-1 pl-10 pr-10 rounded-md text-white font-bold hover:bg-red-800 ' 
onClick={()=>{}}>ADD</button>
</div> */}




// function add(){
//     cards.push(prod_obj);
//     console.log(cards);
//     localStorage.setItem("product" , JSON.stringify(cards));
//   };\