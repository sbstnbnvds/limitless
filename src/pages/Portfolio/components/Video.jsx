import React, { useState } from 'react'

import nextIcon from '../../../assets/images/Portfolio/next-icon.svg';
import prevIcon from '../../../assets/images/Portfolio/prev-icon.svg';

// Thumbnails (Video Portfolio)
import Thumbnail1 from '../../../assets/images/Portfolio/Video/Thumbnail1.webp'
import Thumbnail2 from '../../../assets/images/Portfolio/Video/Thumbnail2.webp'
import Thumbnail3 from '../../../assets/images/Portfolio/Video/Thumbnail3.webp'

const Thumbnails = [
  { thumbnail: Thumbnail1, url: 'https://www.youtube.com/watch?v=l3c8l4rgp6s&t=34s&pp=ygUSYml0Y29pbiBjb3N0YSByaWNh', },
  { thumbnail: Thumbnail2, url: 'https://www.youtube.com/watch?v=07h5tnBaptM&t=3s', },
  { thumbnail: Thumbnail3, url: 'https://www.youtube.com/watch?v=nXg-gCyIjo8', },
]

const Video = () => {

  const [sliderIndex, setSliderIndex] = useState(0);

  const prevSlide = () => {
    let condition = sliderIndex === 0 ? true : false;
    setSliderIndex(condition ? Thumbnails.length - 1 : sliderIndex - 1);
  }

  const nextSlide = () => {
    let condition = sliderIndex == Thumbnails.length - 1 ? true : false;
    setSliderIndex(condition ? 0 : sliderIndex + 1);
  }


  return (
    <section id='video'>
      <div className="container mx-auto flex flex-wrap py-16 justify-center items-center sm:px-10 xl:px-40">
        <h2 className='capitalize mb-6 text-5xl sm:text-5xl md:text-5xl lg:text-7xl 2xl:text-8xl font-extrabold text-center sm:text-left text-lochmara-600'>video production</h2>
        <div className="carousel-container w-full max-w-screen-lg sm:max-w-none md:w-full px-6 sm:px-4 md:px-0 md:flex md:space-x-3 md:justify-center ">
          <div className="buttons justify-center items-center w-1/12 hidden md:flex">
            <button className='' onClick={prevSlide}><img src={prevIcon} alt="" className='w-10' /></button>
          </div>

          <div className="frame border-2 border-tangerine-500 py-2 px-1 aspect-video relative mb-4 md:w-10/12">
            <ul className='absolute left-0 top-0 flex w-full h-full flex duration-500'>
              <li className="px-1 py-2 w-full h-full absolute duration-500">

                <img src={Thumbnails[sliderIndex].thumbnail} alt="" className='object-cover w-full h-full rounded-lg' />
                <a className='absolute block h-full w-full top-0 left-0 flex justify-center items-center cursor-pointer' href={Thumbnails[sliderIndex].url} target='__blank' onClick={() => console.log('click')}>
                  <div className='hidden w-10 bg-black h-10'>

                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="buttons justify-center items-center w-1/12 hidden md:flex">
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

export default Video