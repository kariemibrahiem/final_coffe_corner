import React from 'react'

const Footer = () => {
  return (
    <div className='foot pt-5 text-white'>
        <h2 className='text-4xl mb-5 flex ml-20  font_curve items-start font-bold'>Coffee Cafe</h2>
        <p className='  ml-20 font-bold text-lg'>Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape</p>
        {/* the buttons */}
        <div className="btn_contt ml-20 mt-5">

        <button class="btn_c" type="button">
            <strong>visite youtube</strong>
            <div id="container-stars">
                <div id="stars"></div>
            </div>

            <div id="glow">
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </button>
        </div>

        {/* the vutton end */}
        <div className="grid grid-cols-3">
            <div className=' rr'>
                <h1>Footer Links</h1>
                <a href="">home</a>
                <a href="">about</a>
                <a href="">contact</a>
                <a href="">blog</a>
            </div>
            <div className=' rr'>
                <h1>quick links</h1>
                <a href="">home</a>
                <a href="">about</a>
                <a href="">contact</a>
                <a href="">blog</a>
            </div>
            <div className=' rr'>
                <h1>address</h1>
                <a href="">home</a>
                <a href="">about</a>
                <a href="">contact</a>
                <a href="">blog</a>
            </div>
        </div>
    </div>
  )
}

export default Footer