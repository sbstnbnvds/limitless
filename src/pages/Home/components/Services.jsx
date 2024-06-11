import React, { useEffect, useState } from 'react'

import logo from '../../../assets/images/logo.svg'
import { GraphicDesign, Modelling, WebDev, Video } from './ServiceTab'



const pictures = [
  'https://picsum.photos/400/600',
  'https://picsum.photos/600/600',
  'https://picsum.photos/800/600',
]

const Services = () => {
  const serviceTabs = [
    'design',
    'web',
    '3D',
    'video',
  ]

  const [sliderIndex, setSliderIndex] = useState(0)
  const [tabIndex, setTabIndex] = useState(0)

  const prevSlide = () => {
    let condition = sliderIndex === 0 ? true : false;
    setSliderIndex(condition ? pictures.length - 1 : sliderIndex - 1);
  }

  const nextSlide = () => {
    let condition = sliderIndex == pictures.length - 1 ? true : false;
    setSliderIndex(condition ? 0 : sliderIndex + 1);
  }

  const handleTab = ( index ) => {
    setTabIndex(index )
  }

  return (
    <section className='pt-16' id='services'>
      <div className="flex w-fit px-8 py-2.5 mx-auto menu border-2 border-lochmara-600 rounded-full mb-8 items-center">
        <img src={logo} alt="" className='me-8 w-32 hidden sm:inline' />

        <ul className='flex space-x-6 text-md'>
          {serviceTabs.map((tab, index) => <li key={index}><button className='capitalize' onClick={() => handleTab(index)}>{tab}</button></li>)}
        </ul>
      </div>
      <div className="container mx-auto relative h-[500px]">
        <GraphicDesign active={tabIndex == 0 ? true : false } prevSlide={prevSlide} nextSlide={nextSlide} sliderIndex={sliderIndex} source={pictures[sliderIndex]} />
        <WebDev active={tabIndex == 1 ? true : false } prevSlide={prevSlide} nextSlide={nextSlide} sliderIndex={sliderIndex} source={pictures[sliderIndex]} />
        <Modelling active={tabIndex == 2 ? true : false } prevSlide={prevSlide} nextSlide={nextSlide} sliderIndex={sliderIndex} source={pictures[sliderIndex]} />
        <Video active={tabIndex == 3 ? true : false } prevSlide={prevSlide} nextSlide={nextSlide} sliderIndex={sliderIndex} source={pictures[sliderIndex]} />
      </div>
    </section>
  )
}

export default Services