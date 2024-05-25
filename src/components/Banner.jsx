import React from 'react'

import bannerImage from '../assets/images/banner-image.png'


const Banner = () => {
  return (
    <header className='pt-32 bg-gray-950 min-h-screen pb-8' id='home'>
      <div className="container mx-auto relative">
        <div className="relative z-10">


          <h1 className='helvetica-text text-6xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl text-center uppercase text-slate-200 font-bold sm:font-extrabold mb-4'>limitless</h1>
          <p className='text-slate-200 text-center helvetica-text font-medium mb-8 px-4 sm:px-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro est atque esse rerum vel excepturi obcaecati deleniti eius libero optio assumenda itaque ab, dignissimos magnam, error doloribus, nemo sapiente? Placeat?</p>
          <button className='flex text-2xl mx-auto bg-orange-500 text-slate-200 px-6 py-2 rounded-full font-bold hover:scale-110 transition-all active:bg-orange-600'>Call to Action</button>
        </div>

        <img src={bannerImage} alt="" className='absolute start-0 end-0 mx-auto z-0  top-0' />
      </div>
    </header>
  )
}

export default Banner