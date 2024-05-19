import { BrowserRouter, HashRouter, Route, Routes, createHashRouter } from 'react-router-dom';
import './App.css';
import Navs from './component/b_nav';
import c_main from "./component/c_main";
import Home from './component/a_home';
// the aos scrolling animation section
import Aos from 'aos';
import { createContext, useEffect } from 'react';
import "aos/dist/aos.css";
import Log from './component/i_log';
import Sign from './component/i2_sign';
import Prod from './component/prod';
import Cart from './component/j_cart';
import Add from "./component/q_add";
import Nice_coffee from './component/r_nice_coffee';
import Carts from './component/j_cart';

// the usecontext 



function App() {
  useEffect(()=>{
    Aos.init({
      offset:50,
      duration :500 ,
      delay:50,
      easing: "ease-in",

    },);
  })
return (
      <div className="App">

        <HashRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Home/>}/>
            <Route path='log' element={<Log/>}/>
            <Route path='log/sign' element={<Sign/>}/>
            <Route path='/products' element={<Prod/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/products/add' element={<Add/>}/>
            {/* <Route path='Nice_coffee/:keys' element={<Nice_coffee/>}/> */}
            <Route path='Nice_coffee/:keys' element={<Carts/>}/>
            <Route path='edit/:keys' element={<Nice_coffee/>}/>


          </Routes>  
        </HashRouter>    
      </div>
);
}

export default App;
