import React, { useState } from 'react'

import nextIcon from '../../../assets/images/Portfolio/next-icon.svg';
import prevIcon from '../../../assets/images/Portfolio/prev-icon.svg';

// Modelling Portfolio
import Modelling1 from '../../../assets/images/Portfolio/Modelling/Fold_Preview.mp4'
import Modelling2 from '../../../assets/images/Portfolio/Modelling/MyNode_ModelTwo_1.mp4'

const videos = [
  Modelling1,
  Modelling2,
]

const Modelling = () => {

  const [sliderIndex, setSliderIndex] = useState(0);

  const prevSlide = () => {
    let condition = sliderIndex === 0 ? true : false;
    setSliderIndex(condition ? videos.length - 1 : sliderIndex - 1);
  }

  const nextSlide = () => {
    let condition = sliderIndex == videos.length - 1 ? true : false;
    setSliderIndex(condition ? 0 : sliderIndex + 1);
  }

  return (
    <section id='3d-models'>
      <div className="container mx-auto flex flex-wrap py-16 justify-center sm:justify-between items-center sm:px-10 xl:px-40">
        <h2 className='capitalize mb-6 text-5xl sm:text-5xl md:text-5xl lg:text-7xl 2xl:text-8xl font-extrabold text-center sm:text-left sm:w-1/2 md:w-5/12 xl:w-5/12 '>3D modelling <br className='hidden sm:inline' />& product videos</h2>
        <div className="carousel-container w-full max-w-md xl:max-w-xl sm:max-w-none sm:w-1/2 md:w-7/12 px-12 sm:px-4 md:px-0 md:flex md:space-x-3 md:justify-center ">
          <div className="buttons justify-between items-center w-1/12 hidden md:flex">
            <button className='' onClick={prevSlide}><img src={prevIcon} alt="" className='w-10' /></button>
          </div>

          <div className="frame border-2 border-tangerine-500 py-2 px-1 aspect-4/5 relative mb-4 md:w-9/12">
            <ul className='absolute left-0 top-0 flex w-full h-full flex duration-500'>
              <li className="px-1 py-2 w-full h-full absolute duration-500">
                <video src={videos[sliderIndex]} alt="" className='object-cover w-full h-full rounded-lg' autoPlay muted loop />
              </li>
            </ul>
          </div>

          <div className="buttons justify-between items-center w-1/12 hidden md:flex">
            <button className='' onClick={nextSlide}><img src={nextIcon} alt="" className='w-10' /></button>
          </div>

          <div className="buttons flex justify-between px-8 md:hidden">
            <button><img src={prevIcon} onClick={prevSlide} alt="" className='w-10' /></button>
            <button><img src={nextIcon} alt="" className='w-10' onClick={nextSlide} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modelling