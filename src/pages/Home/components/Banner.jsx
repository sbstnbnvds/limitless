import React from 'react';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bannerImage from '../../../assets/images/banner-image.png';


const Banner = () => {

  const container = useRef()
  const tl = useRef()

  useGSAP(
    () => {
      tl.current = gsap.timeline({defaults: {ease: 'power2.out'}})
        .from('img', {
          opacity: 0,
          duration: 1.5,
          y: 100,
        })
        .from("h1", {
          y: -60,
          opacity: 0,
          duration: 0.5,
        }, '<')
        .from('p', {
          y: -30,
          duration: 0.8,
          opacity: 0,
        }, '<+=0.2')
        .from('button', {
          opacity: 0,
          duration: 1,
          delay: 0.3,
        }, '<+=0.1')
    },
    { scope: container }
  )

  return (
    <header className='min-h-screen flex py-20 justify-center flex-col flex-wrap' id='home'>
      <div className="container mx-auto relative h-fit" ref={container}>
        <div className="relative z-10">


          <h1 className='text-6xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-12xl 2xl:text-12xl text-center uppercase font-bold sm:font-extrabold mb-4 text-wrap'>limitless</h1>
          <p className='text-center font-medium mb-14 px-4 sm:px-20 md:px-24 lg:px-40 xl:px-60 2xl:px-80 text-xl'>Elevate your brand and captivate your audience. We craft stunning graphic design and user-friendly websites that convert.</p>
          <button className='flex text-xl mx-auto bg-tangerine-500 px-8 py-2 rounded-full font-bold hover:scale-110 transition-transform active:bg-tangerine-600'>Call to Action</button>
        </div>

        <img src={bannerImage} alt="" className='absolute start-0 end-0 mx-auto top-0 w-80 sm:w-7/12' />
      </div>
    </header>
  )
}

export default Banner