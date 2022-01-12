import { useRef, useEffect } from 'react'
import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { WiDaySunny } from 'react-icons/wi'
import { MdNightlightRound } from 'react-icons/md'
import { FaBeer } from 'react-icons/fa'
import { CgLogOff } from 'react-icons/cg'

export default function Navbar() {
  const dispatch = useDispatch()
  const toggleRef = useRef()

  useEffect(() => {
    const toggle = toggleRef.current

    toggle.addEventListener('keyup', onKeyUp)

    return () => {
      toggle.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  const onKeyUp = (event) => {
    event.preventDefault()
    console.log('clicked')

    if (event.classList.contains('dark')) event.classList.add('dark')
    else event.classList.remove('dark')
  }

  return (
    <div className='w-full h-16 gradient-blue drop-shadow-2xl flex justify-center items-center px-10'>
      {/* Navbar items */}
      <div className='container flex justify-center items-center max-w-s'>
        {/* Hamburger and Logo Container */}
        <div className='h-full flex justify-left items-center'>
          {/* Logo */}
          {/* <CgLogOff className='w-10 h-10 text-white' /> */}
          {/* Hamburger */}
          <div className='space-y-2 hover:'>
            <span className='block w-5 h-[0.20rem] bg-white'></span>
            <span className='block w-8 h-[0.20rem] bg-white'></span>
            <span className='block w-8 h-[0.20rem] bg-white'></span>
          </div>
        </div>
        {/* end Hamburger and Logo Section */}
        {/* Links */}
        <div className='container flex justify-center font-prompt text-white sm:visible invisible'>
          <Link href='#' id='links' className='mx-4 text-lg hover:bg-black'>
            Home
          </Link>
          <Link href='#' id='links' className='mx-4 text-lg'>
            About
          </Link>
          <Link href='#' id='links' className='mx-4 text-lg'>
            Projects
          </Link>
          <Link href='#' id='links' className='mx-4 text-lg'>
            Testimonials
          </Link>
        </div>
        {/* end Links */}
        {/* Theme Toggle */}
        <div className='w-[4rem] h-10 bg-slate-100 dark:bg-black rounded-full flex items-center justify-start pl-[0.20rem]'>
          <div
            ref={toggleRef}
            className='w-7 h-7 rounded-full bg-green-600 flex justify-center items-center '
          >
            {/* text-[#03024b] */}
            <WiDaySunny className='w-5 h-5 text- text-[#fff] text-transparent' />
          </div>
        </div>
        {/* end Theme toggle */}
      </div>
      {/* end Navbar items */}
    </div>
  )
}
