import React, { useState } from 'react'
import log from "../assets/coffee-white.png";
import "./style.css";
// icons
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom';
import Navs from './b_nav';
const Sign = (props) => {
    const [name , setN] = useState("no name");
    const [email , setE] = useState("no email");
    const [pass , setP] = useState("no pass");
    const [repass , setR] = useState("no repass");
    const [cridet , setC] = useState("no cridet");
    
    const  sign =() => {
        if(name.length < 6){
            alert("Name must be at least 6 characters long!");
        }else if(email.length < 6){
            alert("email must be at least 6 characters long!");
        }else if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            alert("the email must be validate ");
        }else if(pass.length < 6){
            alert("password must be at least 6 characters long!");
        }else if(pass != repass){
            alert("the password and repassword must be the same");
        }else if(cridet <= 16){
            alert("the password and cridet card number must be the same");
        }else{

        }
    }
  return (
    <div className='log '>
        <div className='gap-5 pb-10 rounded-lg  log_in flex-col justify-center align-middle'>
            <img  src={log} alt=""  className='loop max-w-72'/>
            <h2 className='text-5xl text-slate-700 font-bold'>log in</h2>
            <div className="inputs ">
                <div className="sec flex m-3" >
                        <div className='bg-white pr-3 pl-1 rounded-l-lg'><AlternateEmailIcon/></div>
                        <input onChange={(e)=>{setN(e.target.value)}} className=' rounded-r-lg border-blue-700' type="text" placeholder=" name" />
                </div>
                <div className="sec flex m-3" >
                        <div className='bg-white pr-3 pl-1 rounded-l-lg'><AlternateEmailIcon/></div>
                        <input formNoValidate onChange={(e)=>{setE(e.target.value)}} className=' rounded-r-lg border-blue-700' type="text" placeholder=" email" />
                </div>
                <div className="sec flex m-3" >
                        <div className='bg-white pr-3 pl-1 rounded-l-lg'><AlternateEmailIcon/></div>
                        <input onChange={(e)=>{setP(e.target.value)}} className=' rounded-r-lg border-blue-700' type="password" placeholder=" password" />
                </div>
                <div className="sec flex m-3" >
                        <div className='bg-white pr-3 pl-1 rounded-l-lg'><AlternateEmailIcon/></div>
                        <input onChange={(e)=>{setR(e.target.value)}} className=' rounded-r-lg border-blue-700' type="password" placeholder=" re_password" />
                </div>
                <div className="sec flex m-3" >
                        <div className='bg-white pr-3 pl-1 rounded-l-lg'><AlternateEmailIcon/></div>
                        <input onChange={(e)=>{setC(e.target.value)}} className=' rounded-r-lg border-blue-700' type="text" placeholder=" credet" />
                </div>
            </div>
            <div className="btns flex gap-5">
                {/* log_in */}
                <Link to="log" class="btn-53"><div class="original">log in</div><div class="letters">    <span>l</span><span>o</span><span>g</span><span>i</span><span>n</span></div></Link>
                <button  class="btn-53"><div class="original">sign up</div><div onClick={()=>{sign() ;console.log("");}} class="letters">    <span>s</span><span>i</span><span>g</span><span>n</span><span> </span><span>u</span><span>p</span></div></button>
                

            </div>
            
        </div>
        <div className="d hidden">
        </div>
    </div>
  )
}

export default Sign;