import React from 'react';
import "./z_slide.css";
import s_1 from "../assets/slide/s_1.png";
import s_2 from "../assets/slide/s_2.png";
import s_3 from "../assets/slide/s_3.png";
import s_4 from "../assets/slide/s_4.png";
const Slide = () => {
  return (
    <div className='flex-col items-center justify-center h-90 bg-slate-300 p-20'>
        <h2 className='text-2xl font_curve mb-5'>Testimonials</h2>

        <div className=" justify-center " data-aos="zoom-in">
            <div className="carrousel">
                <article className="card">
                    <img src={s_1} alt="" />
                </article>
                <article className="card">
                    <img src={s_2} alt="" />
                </article>
                <article className="card">
                    <img src={s_3} alt="" />
                </article>
                <article className="card">
                    <img src={s_1} alt="" />
                </article>
                <article className="card">
                    <img src={s_2} alt="" />
                </article>
                <article className="card">
                    <img src={s_3} alt="" />
                </article>
        </div>
    </div>
    </div>
  );
}

export default Slide;