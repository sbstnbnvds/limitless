import React from 'react'

import logo from '../assets/images/logo.svg'

import twitterIcon from '../assets/images/twitter-icon.svg';
import youtubeIcon from '../assets/images/youtube-icon.svg';
import whatsappIcon from '../assets/images/whatsapp-icon.svg';
import instagramIcon from '../assets/images/instagram-icon.svg';

const Icon = ({ src }) => {
  return (<img src={src} alt="" className='' />)
}
const Footer = () => {
  return (
    <footer className='container mx-auto px-4 sm:px-8 md:px-20 py-8 space-y-6'>
      <div className='flex flex-col items-center sm:flex-row justify-between gap-y-4'>

        <div className='flex flex-col items-center sm:items-start w-full sm:w-4/12 lg:w-3/12'>
          <img src={logo} alt="" className='mb-3 sm:mb-4 w-8/12 sm:w-full' />
          <div className='flex media-wrapper justify-between w-7/12 sm:w-11/12 lg:w-10/12'>
            <Icon src={twitterIcon} />
            <Icon src={youtubeIcon} />
            <Icon src={whatsappIcon} />
            <Icon src={instagramIcon} />
          </div>
        </div>
        <ul className='flex space-x-10 sm:space-x-0 sm:space-y-3 sm:flex-col sm:mr-16 lg:mr-40 xl:mr-48 text-lg'>
          <li><a href="">Home</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className='flex justify-end'>
        <p className=''>&copy; 2024 Limitless Media. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer