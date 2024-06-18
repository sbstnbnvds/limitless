import React, { useEffect, useState } from 'react'

import logo from '../../../assets/images/logo.svg'
import { GraphicDesign, Modelling, WebDev, Video } from './ServiceTab'

// Graphic Design Portfolio 
import GraphicDesign1 from '../../../assets/images/Portfolio/Graphic Design/Framework_BEC.png'
import GraphicDesign2 from '../../../assets/images/Portfolio/Graphic Design/Grassroots Bitcoin- Bitcoin Park.jpeg'
import GraphicDesign3 from '../../../assets/images/Portfolio/Graphic Design/RocketCityBitcoin.png'
import GraphicDesign4 from '../../../assets/images/Portfolio/Graphic Design/The Power of Lightning Summit_1.png'

// Modelling Portfolio
import Modelling1 from '../../../assets/images/Portfolio/Modelling/Fold_Preview.mp4'
import Modelling2 from '../../../assets/images/Portfolio/Modelling/MyNode_ModelTwo_1.mp4'

// Thumbnails (Video Portfolio)
import Thumbnail1 from '../../../assets/images/Portfolio/Video/Thumbnail1.webp'
import Thumbnail2 from '../../../assets/images/Portfolio/Video/Thumbnail2.webp'
import Thumbnail3 from '../../../assets/images/Portfolio/Video/Thumbnail3.webp'

// WebDev Portfolio
import WebDev1 from '../../../assets/images/Portfolio/Web Design/webdev1.png'
import WebDev2 from '../../../assets/images/Portfolio/Web Design/webdev2.png'
import WebDev3 from '../../../assets/images/Portfolio/Web Design/webdev3.png'

const GraphicDesignPortfolio = [
  GraphicDesign1,
  GraphicDesign2,
  GraphicDesign3,
  // GraphicDesign4
]
const ModellingPortfolio = [
  Modelling1,
  Modelling2,
]
const WebDevPortfolio = [
  WebDev1,
  WebDev2,
  WebDev3,
]
const Thumbnails = [
  { thumbnail: Thumbnail1, url: 'https://www.youtube.com/watch?v=l3c8l4rgp6s&t=34s&pp=ygUSYml0Y29pbiBjb3N0YSByaWNh', },
  { thumbnail: Thumbnail2, url: 'https://www.youtube.com/watch?v=07h5tnBaptM&t=3s', },  
  { thumbnail: Thumbnail3, url: 'https://www.youtube.com/watch?v=nXg-gCyIjo8', },
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

  const prevSlide = (slideSource) => {
    let condition = sliderIndex === 0 ? true : false;
    setSliderIndex(condition ? slideSource.length - 1 : sliderIndex - 1);
  }
  const nextSlide = (slideSource) => {
    let condition = sliderIndex == slideSource.length - 1 ? true : false;
    setSliderIndex(condition ? 0 : sliderIndex + 1);
    console.log(slideSource)
  }
  const handleTab = (index) => {
    setSliderIndex(0)
    setTabIndex(index)
  }

  return (
    <section className='pt-16' id='services'>
      <div className="flex w-fit px-8 py-2.5 mx-auto menu border-2 border-lochmara-600 rounded-full mb-8 items-center">
        <img src={logo} alt="" className='me-8 w-32 hidden sm:inline' />

        <ul className='flex space-x-6 text-md'>
          {serviceTabs.map((tab, index) => <li key={index}><button className='capitalize' onClick={() => handleTab(index)}>{tab}</button></li>)}
        </ul>
      </div>
      <div className="container mx-auto relative h-[500px] min-[375px]:h-[600px] sm:h-[425px] lg:h-[550px]">
        <GraphicDesign active={tabIndex == 0 ? true : false } prevSlide={prevSlide} nextSlide={nextSlide} sliderIndex={sliderIndex} source={GraphicDesignPortfolio} />
        <WebDev active={tabIndex == 1 ? true : false } prevSlide={prevSlide} nextSlide={nextSlide} sliderIndex={sliderIndex} source={WebDevPortfolio} />
        <Modelling active={tabIndex == 2 ? true : false } prevSlide={prevSlide} nextSlide={nextSlide} sliderIndex={sliderIndex} source={ModellingPortfolio} />
        <Video active={tabIndex == 3 ? true : false } prevSlide={prevSlide} nextSlide={nextSlide} sliderIndex={sliderIndex} source={Thumbnails} />
      </div>
    </section>
  )
}

export default Services