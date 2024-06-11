import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const LabelInput = ({ label, placeHolder, email }) => {


  return (
    <div className='flex flex-col label-input'>
      <label htmlFor='' className='capitalize mb-2'>{label}</label>
      <input type={email ? "email" : "text"} className='bg-transparent resize-none border-b-2 border-lochmara-600 focus:outline-none' placeholder={placeHolder ? placeHolder : ''} rows={1} required />
    </div>

  )
}

const ContactUs = () => {


  const container = useRef()
  const tl = useRef()

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(
    () => {

      tl.current = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%'
        }
      })
        .from('h2', {
          opacity: 0,
          y: -10,
        })
        .from('p', {
          opacity: 0,
          y: -10,
        }, '>-0.3')
        .from('form .label-input', {
          opacity: 0,
          stagger: 0.15,
        }, '<-=0.15')
        .from('button', {
          opacity: 0,
        }, '>-0.25')

    },
    { scope: container }
  )

  return (
    <section id='contact-us' ref={container}>
      <div className="container mx-auto px-4 md:px-20 pt-16 pb-10">

        <h2 className='text-center text-tangerine-500 text-4xl sm:text-6xl font-extrabold mb-3'>Send us a message!</h2>
        <p className='text-center xl:px-72 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae dolorem rerum rem iste numquam</p>

        <form className='grid gap-x-8 gap-y-6 grid-cols-1 md:grid-cols-2'>
          <LabelInput label='your name' />
          <LabelInput label='email adress' email={true} />
          <LabelInput label='your message' placeHolder={'Feel free to leave a message!'} />
          <div className='flex align-center'>
            <button className='bg-tangerine-500 my-auto py-2 px-8 text-lg font-extrabold rounded-full hover:scale-105 transition-transform active:bg-tangerine-600'>Contact Us</button>
          </div>

        </form>


      </div>

    </section>
  )
}

export default ContactUs