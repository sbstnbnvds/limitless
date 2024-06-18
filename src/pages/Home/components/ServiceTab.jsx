import React from 'react'

import nextIcon from '../../../assets/images/Portfolio/next-icon.svg';
import prevIcon from '../../../assets/images/Portfolio/prev-icon.svg';


const GraphicDesign = ({ prevSlide, nextSlide, source, sliderIndex, active }) => {
  return (
    <div className={'flex flex-wrap justify-center sm:justify-between items-center sm:px-10 xl:px-40 w-full absolute ' + (active ? '' : 'invisible')}>
      <h2 className='capitalize mb-6 text-5xl sm:text-5xl md:text-5xl lg:text-7xl 2xl:text-8xl font-extrabold text-center sm:text-left sm:w-1/2 md:w-5/12 xl:w-auto'>graphic <br className='hidden xl:inline' /> design</h2>
      <div className="carousel-container w-full max-w-md xl:max-w-xl sm:max-w-none sm:w-1/2 md:w-7/12 px-12 sm:px-4 md:px-0 md:flex md:space-x-3 md:justify-center ">
        <div className="buttons justify-between items-center w-1/12 hidden md:flex">
          <button className='' onClick={() => prevSlide(source)}><img src={prevIcon} alt="" className='w-10' /></button>
        </div>

        <div className="frame border-2 border-tangerine-500 py-2 px-1 aspect-4/5 relative mb-4 md:w-9/12">
          <ul className='absolute left-0 top-0 flex w-full h-full flex'>
            <li className="px-1 py-2 w-full h-full absolute">
              <img src={source[sliderIndex]} alt="" className='object-cover w-full h-full rounded-lg' />
            </li>
          </ul>
        </div>

        <div className="buttons justify-between items-center w-1/12 hidden md:flex">
          <button className='' onClick={() => nextSlide(source)}><img src={nextIcon} alt="" className='w-10' /></button>
        </div>

        <div className="buttons flex justify-between px-8 md:hidden">
          <button><img src={prevIcon} onClick={() => prevSlide(source)} alt="" className='w-10' /></button>
          <button><img src={nextIcon} alt="" className='w-10' onClick={() => nextSlide(source)} /></button>
        </div>
      </div>
    </ div>
  )
}
const Modelling = ({ prevSlide, nextSlide, source, sliderIndex, active }) => {
  return (
    <div className={'flex flex-wrap justify-center sm:justify-between items-center sm:px-10 xl:px-40 w-full absolute ' + (active ? '' : 'invisible')}>

      {/* Cambiar copy */}
      <h2 className='capitalize mb-6 text-5xl sm:text-5xl md:text-5xl lg:text-7xl 2xl:text-8xl font-extrabold text-center sm:text-left sm:w-1/2 md:w-5/12 xl:w-5/12 '>3D Product Videos</h2>
      <div className="carousel-container w-full max-w-md xl:max-w-xl sm:max-w-none sm:w-1/2 md:w-7/12 px-12 sm:px-4 md:px-0 md:flex md:space-x-3 md:justify-center ">
        <div className="buttons justify-between items-center w-1/12 hidden md:flex">
          <button className='' onClick={() => prevSlide(source)}><img src={prevIcon} alt="" className='w-10' /></button>
        </div>

        <div className="frame border-2 border-tangerine-500 py-2 px-1 aspect-4/5 relative mb-4 md:w-9/12">
          <ul className='absolute left-0 top-0 flex w-full h-full flex'>
            <li className="px-1 py-2 w-full h-full absolute">
              <video src={source[sliderIndex]} alt="" className='object-cover w-full h-full rounded-lg' autoPlay muted loop/>
            </li>
          </ul>
        </div>

        <div className="buttons justify-between items-center w-1/12 hidden md:flex">
          <button className='' onClick={() => nextSlide(source)}><img src={nextIcon} alt="" className='w-10' /></button>
        </div>

        <div className="buttons flex justify-between px-8 md:hidden">
          <button><img src={prevIcon} onClick={() => prevSlide(source)} alt="" className='w-10' /></button>
          <button><img src={nextIcon} alt="" className='w-10' onClick={() => nextSlide(source)} /></button>
        </div>
      </div>
    </ div>
  )
}
const WebDev = ({ prevSlide, nextSlide, source, sliderIndex, active }) => {
  return (
    <div className={'flex flex-wrap justify-center items-center sm:px-10 xl:px-40 w-full absolute ' + (active ? '' : 'invisible')}>
      <h2 className='capitalize mb-6 text-5xl sm:text-5xl md:text-5xl lg:text-7xl 2xl:text-8xl font-extrabold text-center sm:text-left text-lochmara-600'>web design</h2>
      <div className="carousel-container w-full max-w-screen-lg sm:max-w-none md:w-full px-6 sm:px-4 md:px-0 md:flex md:space-x-3 md:justify-center ">
        <div className="buttons justify-center items-center w-1/12 hidden md:flex">
          <button className='' onClick={() => prevSlide(source)}><img src={prevIcon} alt="" className='w-10' /></button>
        </div>

        <div className="frame border-2 border-tangerine-500 py-2 px-1 aspect-video relative mb-4 md:w-10/12 max-w-3xl">
          <ul className='absolute left-0 top-0 flex w-full h-full flex'>
            <li className="px-1 py-2 w-full h-full absolute">
              <img src={source[sliderIndex]} alt="" className='object-cover w-full h-full rounded-lg' />
            </li>
          </ul>
        </div>

        <div className="buttons justify-center items-center w-1/12 hidden md:flex">
          <button className='' onClick={() => nextSlide(source)}><img src={nextIcon} alt="" className='w-10' /></button>
        </div>

        <div className="buttons flex justify-between px-8 md:hidden">
          <button><img src={prevIcon} onClick={() => prevSlide(source)} alt="" className='w-10' /></button>
          <button><img src={nextIcon} alt="" className='w-10' onClick={() => nextSlide(source)} /></button>
        </div>
      </div>
    </ div>
  )
}
const Video = ({ prevSlide, nextSlide, source, sliderIndex, active }) => { 
  return (
    <div className={'flex flex-wrap justify-center items-center sm:px-10 xl:px-40 w-full absolute ' + (active ? '' : 'invisible')}>
      <h2 className='capitalize mb-6 text-5xl sm:text-5xl md:text-5xl lg:text-7xl 2xl:text-8xl font-extrabold text-center sm:text-left text-lochmara-600'>video production</h2>
      <div className="carousel-container w-full max-w-screen-lg sm:max-w-none md:w-full px-6 sm:px-4 md:px-0 md:flex md:space-x-3 md:justify-center ">
        <div className="buttons justify-center items-center w-1/12 hidden md:flex">
          <button className='' onClick={() => prevSlide(source)}><img src={prevIcon} alt="" className='w-10' /></button>
        </div>

        <div className="frame border-2 border-tangerine-500 py-2 px-1 aspect-video relative mb-4 md:w-10/12 max-w-3xl">
          <ul className='absolute left-0 top-0 flex w-full h-full flex'>
            <li className="px-1 py-2 w-full h-full absolute">

              <img src={source[sliderIndex].thumbnail} alt="" className='object-cover w-full h-full rounded-lg' />
              <a className='absolute block h-full w-full top-0 left-0 flex justify-center items-center cursor-pointer' href={source[sliderIndex].url} target='__blank' onClick={() => console.log('click')}>
                <div className='hidden w-10 bg-black h-10'>

                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="buttons justify-center items-center w-1/12 hidden md:flex">
          <button className='' onClick={() => nextSlide(source)}><img src={nextIcon} alt="" className='w-10' /></button>
        </div>

        <div className="buttons flex justify-between px-8 md:hidden">
          <button><img src={prevIcon} onClick={() => prevSlide(source)} alt="" className='w-10' /></button>
          <button><img src={nextIcon} alt="" className='w-10' onClick={() => nextSlide(source)} /></button>
        </div>
      </div>
    </ div>
  )
}



export { GraphicDesign, Modelling, WebDev, Video }