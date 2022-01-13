import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Button from '@mui/material/Button'
import Image from 'next/image'
import styled, { css } from 'styled-components'
import pic from '../images/hero.jpg'
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
    // bg-[#001325]
    <div className='w-screen h-screen bg-zinc-900'>
      <Navbar />
      {/* Hero */}
      <h1 className='text-6xl text-center font-robo font-bold pt-20 text-white'>
        Welcome Back
      </h1>
      <div className='container max-w-xl mx-auto'>
        <h1 className='my-20 text-center text-white text-xl font-normal font-prompt'>
          We bring your projects to life with our professional development
          skills. Whether you need a new website for your business or are simply
          looking to take things to the next level, we are here to help.
        </h1>
      </div>

      {/* Buttons */}
      <div className='container mx-auto flex justify-center items-center my-20'>
        <button
          type='button'
          className='btn gradient-blue gradient-hover ease-out duration-500'
        >
          Contact Us
        </button>
        {/* <Button variant='contained' sx={{ background: 'blue' }}>
          Contact Us
        </Button> */}
      </div>
      {/* end Hero */}
    </div>
  )
}
