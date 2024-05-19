import React, { createContext, useState } from 'react'
import Navs from './b_nav';
import c_main from"./c_main";
import C_main from './c_main';
import Sec_1 from './d_sec_1';
import Gold from './e_gold';
import Apps from './f_apps';
import Slide from "./g_slide";
import Footer from './h_footer';


const Home = () => {
  return (
      <div>
        <Navs />
        <C_main/>
        <Sec_1/>
        <Gold/>
        <Apps/>
        <Slide/>
        <Footer/>
      </div>
  )
}

export default Home;