import React, { createContext, useContext, useEffect, useState } from 'react'
import log from "../assets/coffee-white.png";
import "./style.css";
// icons
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom';
import "./b_nav.jsx";
import Navs from './b_nav';
import Sign from './i2_sign.jsx';

const Log = () => {
  const [isLog, setIsLog] = useState(true);
  return (
        
    <div className='log '>
      {/* <Navs/> */}
        <div className='gap-5 pb-10 mt-10 rounded-lg  log_in flex-col justify-center align-middle'>
            <img src={log} alt=""  className='loop max-w-72'/>
            <h2 className='text-5xl text-slate-700 font-bold'>log in</h2>
            <div className="inputs ">
                <div className="sec flex m-3" >
                        <div className='bg-white pr-3 pl-1 rounded-l-lg'><AlternateEmailIcon/></div>
                        <input className=' rounded-r-lg border-blue-700' type="text" placeholder="email" />
                </div>
                <div className="sec flex m-3" >
                        <div className='bg-white pr-3 pl-1 rounded-l-lg'><AlternateEmailIcon/></div>
                        <input className=' rounded-r-lg border-blue-700' type="password" placeholder="password" />
                </div>
                
            </div>
            <div className="btns flex gap-5">
                {/* log_in */}
                <button class="btn-53"><div class="original">log in</div><div onClick={()=>{setIsLog(false)}} class="letters">    <span>l</span><span>o</span><span>g</span><span>i</span><span>n</span></div></button>
                <Link to="sign" class="btn-53"><div class="original">sign up</div><div onClick={()=>{setIsLog(false)}} class="letters">    <span>s</span><span>i</span><span>g</span><span>n</span><span> </span><span>u</span><span>p</span></div></Link>

            </div>
            
            
        </div>
        <div className="d hidden">
            <Navs llg={{isLog}}/>
            {/* <Sign slg={isLog}/> */}
        </div>
    </div>
  
  );
}

export default Log