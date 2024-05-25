import React from 'react';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bannerImage from '../assets/images/banner-image.png';


const Banner = () => {

  gsap.registerPlugin(useGSAP)
  const container = useRef()

  useGSAP(
    () => {
      gsap.from('#home h1', {
        y: -40,
        opacity: 0,
        duration: 0.5,
      },);
      gsap.from('#home p', {
        y: -30,
        opacity: 0,
        delay: 0.2,
      });
      gsap.from('#home button', {
        opacity: 0,
        duration: 1,
        delay: 0.3,
      });
      gsap.from('#home img', {
        opacity: 0,
        duration: 2.1,
        y: 100,
        ease: 'power4.out'
      });
    },
    { scope: container }
  )


  return (
    <header className='pt-32 bg-gray-950 min-h-screen pb-8' id='home'>
      <div className="container mx-auto relative" ref={container}>
        <div className="relative z-10">


          <h1 className='font-helveticaNow text-6xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl text-center uppercase text-slate-200 font-bold sm:font-extrabold mb-4'>limitless</h1>
          <p className='text-slate-200 text-center font-helveticaNow font-medium mb-14 px-4 sm:px-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro est atque esse rerum vel excepturi obcaecati deleniti eius libero optio assumenda itaque ab, dignissimos magnam, error doloribus, nemo sapiente? Placeat?</p>
          <button className='flex font-helveticaNow text-2xl mx-auto bg-orange-500 text-slate-200 px-6 py-2 rounded-full font-bold hover:scale-110 transition-transform active:bg-orange-600'>Call to Action</button>
        </div>

        <img src={bannerImage} alt="" className='absolute start-0 end-0 mx-auto top-0' />
      </div>
    </header>
  )
}

export default Banner