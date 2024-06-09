import React from 'react'

import logo from '../../../assets/images/logo.svg'
import ServiceTab from './ServiceTab'

const Services = () => {
  const serviceTabs = [
    'design',
    'web',
    '3D',
    'video',
  ]
  return (
    <section className='pt-5' id='services'>
      <div className="flex w-fit px-8 py-2.5 mx-auto menu border-2 border-lochmara-600 rounded-full mb-16 items-center">
        <img src={logo} alt="" className='me-8 w-32 hidden sm:inline' />

        <ul className='flex space-x-6 text-md'>
          {serviceTabs.map((tab, index) => <li key={index}><button className='capitalize'>{tab}</button></li>)}
        </ul>
      </div>
      <div className="container mx-auto">
        <ServiceTab />

        
      </div>
    </section>
  )
}

export default Services