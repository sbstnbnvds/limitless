import React from 'react';

import Banner from './components/Banner';

import GraphicDesign from './components/GraphicDesign';
import WebDesign from './components/WebDesign';
import Modelling from './components/Modelling';
import Video from './components/Video';


const Portfolio = () => {
  return (
    <>
      <Banner />
      <GraphicDesign />
      <WebDesign />
      <Modelling />
      <Video />
    </>
  )
}

export default Portfolio