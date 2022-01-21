import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Button from '@mui/material/Button'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import img from '../images/hero.jpg'
import { current } from '@reduxjs/toolkit'
import Accordion from '../components/Accordion'

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;

//   ${(props) =>
//     props.primary &&
//     css`=
//       background: palevioletred;
//       color: white;
//     `}
// `

export default function Home() {
  const theme = useSelector((state) => state.theme.value)

  return (
    <div>
      {/* // bg-[#001325] */}
      <Navbar />
      {/* Hero */}
      <div className='bg-slate-100'>
        <div className='py-32 px-10 w-auto mx-auto grid grid-cols-1 gap-24 md:grid-cols-2 md:max-w-screen-md lg:max-w-screen-2xl'>
          <div className='container flex flex-col justify-center max-w-screen-xl h-full bg-slate-100'>
            <h1 className='text-6xl text-zinc-900 inline-block font-robo font-bold'>
              Welcome Back
            </h1>

            <h1 className='mt-6 mb-12 text-zinc-700 text-xl font-normal font-robo'>
              We bring your projects to life with our professional development
              skills. Whether you need a new website for your business or are
              simply looking to take things to the next level, we are here to
              help.
            </h1>

            {/* Buttons */}
            <button
              type='button'
              className='btn w-fit gradient-blue gradient-hover ease-out duration-500'
            >
              Contact Us
            </button>
            {/* end Buttons */}
          </div>

          {/* Image */}
          <div className='rounded-md'>
            <Image src={img} passHref />
          </div>
          {/* end Image */}
          {/* end Hero */}
        </div>
      </div>

      {/* Content */}
      <div className='container mx-auto max-w-lg mt-56 px-10 grid gap-6 grid-cols-1 md:grid-cols-2 md:max-w-screen-lg lg:grid-cols-3'>
        <Card text={'Greetings'} />
        <Card text={'Hello'} />
        <Card text={'World'} />
        <Card text={'Goodbye'} />
      </div>
    </div>
  )
}
