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

    toggle.addEventListener('click', onClick)

    return () => {
      toggle.removeEventListener('click', onClick)
    }
  }, [])

  const onClick = (event) => {
    event.preventDefault()
    console.log('clicked')
    console.log(toggleRef.current.classList)

    if (!toggleRef.current.classList.contains('dark')) {
      console.log('dark mode activated!')
      toggleRef.current.classList.add('dark')
      toggleRef.current.classList.remove('bg-green-600')
      toggleRef.current.classList.add('bg-red-600')
      toggleRef.current.classList.add('ml-6')
    } else {
      console.log('dark mode deactivated!')
      toggleRef.current.classList.remove('dark')
      toggleRef.current.classList.remove('bg-red-600')
      toggleRef.current.classList.add('bg-green-600')
      toggleRef.current.classList.remove('ml-6')
    }
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
          <div className='space-y-2 rounded-md'>
            <span className='block w-5 h-[0.20rem] bg-white'></span>
            <span className='block w-8 h-[0.20rem] bg-white'></span>
            <span className='block w-8 h-[0.20rem] bg-white'></span>
          </div>
        </div>
        {/* end Hamburger and Logo Section */}
        {/* Links */}
        <div className='container flex justify-center font-prompt text-white sm:visible invisible'>
          <Link href='#' passHref>
            <a className='link px-4 py-2 text-lg hover:translate-y-[-3px] duration-300 ease-in-out hover:bg-slate-600 hover:bg-opacity-25 hover:to-transparent rounded-md'>
              Home
            </a>
          </Link>
          <Link href='#' passHref>
            <a className='link px-4 py-2 text-lg hover:translate-y-[-3px] duration-300 hover:bg-slate-600 hover:bg-opacity-25 hover:to-transparent rounded-md'>
              About
            </a>
          </Link>
          <Link href='#' passHref>
            <a className='link px-4 py-2 text-lg hover:translate-y-[-3px] duration-300 hover:bg-slate-600 hover:bg-opacity-25 hover:to-transparent rounded-md'>
              Projects
            </a>
          </Link>
          <Link href='#' passHref>
            <a className='link px-4 py-2 text-lg hover:translate-y-[-3px] duration-300 hover:bg-slate-600 hover:bg-opacity-25 hover:to-transparent rounded-md'>
              Testimonials
            </a>
          </Link>
        </div>
        {/* end Links */}
        {/* Theme Toggle */}
        {/* bg-slate-200 hover:opacity:20 */}
        <div className='w-[4rem] h-10 bg-[#03024b] dark:bg-black rounded-full flex items-center justify-start pl-[0.21rem]'>
          <div
            ref={toggleRef}
            className='w-7 h-7 rounded-full bg-green-600 flex justify-center items-center ease-in-out duration-200'
          >
            {/* text-[#03024b] */}
            {/* <WiDaySunny className='w-5 h-5 text- text-[#fff] text-transparent' /> */}
            <div className='w-5 h-5 text- text-[#fff] text-transparent'></div>
          </div>
        </div>
        {/* end Theme toggle */}
      </div>
      {/* end Navbar items */}
    </div>
  )
}
