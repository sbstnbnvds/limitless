import React, { useState } from 'react'

import nextIcon from '../../../assets/images/Portfolio/next-icon.svg';
import prevIcon from '../../../assets/images/Portfolio/prev-icon.svg';

// Graphic Design Portfolio 
import GraphicDesign1 from '../../../assets/images/Portfolio/Graphic Design/Framework_BEC.png'
import GraphicDesign2 from '../../../assets/images/Portfolio/Graphic Design/Grassroots Bitcoin- Bitcoin Park.jpeg'
import GraphicDesign3 from '../../../assets/images/Portfolio/Graphic Design/RocketCityBitcoin.png'
import GraphicDesign4 from '../../../assets/images/Portfolio/Graphic Design/The Power of Lightning Summit_1.png'


const pictures = [
  GraphicDesign1,
  GraphicDesign2,
  GraphicDesign3,
  GraphicDesign4
]



const GraphicDesign = () => {

  const [sliderIndex, setSliderIndex] = useState(0);

  const prevSlide = () => {
    let condition = sliderIndex === 0 ? true : false;
    setSliderIndex(condition ? pictures.length - 1 : sliderIndex - 1);
  }

  const nextSlide = () => {
    let condition = sliderIndex == pictures.length - 1 ? true : false;
    setSliderIndex(condition ? 0 : sliderIndex + 1);
  }

  return (
    <section id='graphic-design'>
      <div className="container mx-auto flex flex-wrap py-16 justify-center sm:justify-between items-center sm:px-10 xl:px-40">
        <h2 className='capitalize mb-6 text-5xl sm:text-5xl md:text-5xl lg:text-7xl 2xl:text-8xl font-extrabold text-center sm:text-left sm:w-1/2 md:w-5/12 xl:w-auto'>graphic <br className='hidden xl:inline' /> design</h2>
        <div className="carousel-container w-full max-w-md xl:max-w-xl sm:max-w-none sm:w-1/2 md:w-7/12 px-12 sm:px-4 md:px-0 md:flex md:space-x-3 md:justify-center ">
          <div className="buttons justify-between items-center w-1/12 hidden md:flex">
            <button className='' onClick={prevSlide}><img src={prevIcon} alt="" className='w-10' /></button>
          </div>

          <div className="frame border-2 border-tangerine-500 py-2 px-1 aspect-4/5 relative mb-4 md:w-9/12">
            <ul className='absolute left-0 top-0 flex w-full h-full flex duration-500'>
              <li className="px-1 py-2 w-full h-full absolute duration-500">
                <img src={pictures[sliderIndex]} alt="" className='object-cover w-full h-full rounded-lg duration-500' />
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

export default GraphicDesign