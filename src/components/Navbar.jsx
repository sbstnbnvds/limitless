import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'



const Navbar = () => {
  const [nav, setNav] = useState(false)

  const navItemsHome = [
    {
      name: 'home',
      hashLink: '#home',
    },
    {
      name: 'services',
      hashLink: '#services',
    },
    {
      name: 'contact us',
      hashLink: '#contact-us',
    },
    {
      name: 'portfolio',
      link: 'portfolio',
    },
  ]
  const navItemsPortfolio = [
    {
      name: 'home',
      link: '',
    },
    {
      name: 'design',
      hashLink: 'portfolio#graphic-design',
    },
    {
      name: 'web',
      hashLink: 'portfolio#web-design',
    },
    {
      name: '3D',
      hashLink: 'portfolio#3d-models',
    },
    {
      name: 'video',
      hashLink: 'portfolio#video',
    },
    {
      name: 'contact us',
      hashLink: '#contact-us',
    },
  ]

  const [navItems, setNavItems] = useState(navItemsHome)


  let location = useLocation()

  useEffect(() => {
    console.log(location.pathname)
    if (location.pathname === '/') {
      setNavItems(navItemsHome)
    } else if (location.pathname === '/portfolio') {
      setNavItems(navItemsPortfolio)
    }


  }, [location])

  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <nav className='fixed top-0 sm:mt-4 flex justify-center w-full z-50 text-tangerine-500'>
      <div className="sm:border-2 border-lochmara-600 sm:rounded-full bg-blue-charcoal-950 flex justify-between py-5 px-8 sm:px-8 sm:py-2.5 w-full sm:w-auto">
        <img src={logo} alt="" className='me-8 w-32' />

        <ul className='hidden sm:flex space-x-6 md:space-x-16 text-md'>
          {navItems.map((item, index) => <li key={index}>{
            item.hashLink ?
              <HashLink to={`/${item.hashLink}`} className='capitalize' onClick={() => setNav(!nav)}>{item.name}</HashLink> :
              <Link to={`/${item.link}`} className='capitalize' onClick={() => setNav(!nav)}>{item.name}</Link>
          }</li>)}
        </ul>

        <div onClick={handleNav} className='block sm:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>


        <ul className={'flex flex-col py-8 sm:hidden space-y-10 text-md fixed top-0 w-7/12 duration-500 ease-in-out ' + (nav ? 'sm:hidden left-0 h-full border-r-gray-900 bg-zumthor-100' : 'bottom-0 left-[-100%] h-full')}>
          {navItems.map((item, index) => <li key={index}>{
            item.hashLink ?
              <HashLink to={`/${item.hashLink}`} className='capitalize ml-5' onClick={() => setNav(!nav)}>{item.name}</HashLink> :
              <Link to={`/${item.link}`} className='capitalize ml-5' onClick={() => setNav(!nav)}>{item.name}</Link>
          }</li>)}
        </ul>

      </div>

    </nav>
  )
}

export default Navbar