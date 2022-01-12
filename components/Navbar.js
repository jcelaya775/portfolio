import { useState, useRef, useEffect } from 'react'
import Sidebar from './Sidebar'
import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { WiDaySunny } from 'react-icons/wi'
import { MdNightlightRound } from 'react-icons/md'
import { FaBeer } from 'react-icons/fa'
import { CgLogOff } from 'react-icons/cg'

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const dispatch = useDispatch()
  const toggleContainerRef = useRef()
  const toggleRef = useRef()
  const burgerRef = useRef()

  useEffect(() => {
    const toggle = toggleContainerRef.current
    const burger = burgerRef.current

    toggle.addEventListener('click', onClick)
    burger.addEventListener('mouseenter', mouseEnter)
    burger.addEventListener('click', mouseClick)
    burger.addEventListener('mouseleave', mouseLeave)

    return () => {
      toggle.removeEventListener('click', onClick)
      burger.removeEventListener('mouseenter', mouseEnter)
      burger.removeEventListener('click', mouseClick)
      burger.removeEventListener('mouseleave', mouseLeave)
    }
  }, [])

  const onClick = (event) => {
    event.preventDefault()

    if (!toggleRef.current.classList.contains('dark')) {
      console.log('dark mode activated!')
      toggleRef.current.classList.add('dark')
      toggleRef.current.classList.remove('bg-green-600')
      toggleRef.current.classList.add('bg-red-600')
      toggleRef.current.classList.add('ml-[1.4rem]')
    } else {
      console.log('dark mode deactivated!')
      toggleRef.current.classList.remove('dark')
      toggleRef.current.classList.remove('bg-red-600')
      toggleRef.current.classList.add('bg-green-600')
      toggleRef.current.classList.remove('ml-[1.4rem]')
    }
  }

  const mouseEnter = (event) => {
    event.preventDefault()
    const [b1, b2, b3] = document.querySelectorAll('.block')

    b1.classList.remove('w-5')
    b1.classList.add('w-8')
    b3.classList.remove('w-8')
    b3.classList.add('w-5')
  }

  const mouseClick = (event) => {
    // event.preventDefault()
    console.log(sidebar)

    setSidebar(prev => !prev)
  }

  const mouseLeave = (event) => {
    event.preventDefault()
    const [b1, b2, b3] = document.querySelectorAll('.block')

    b1.classList.remove('w-8')
    b1.classList.add('w-5')
    b3.classList.remove('w-5')
    b3.classList.add('w-8')
  }

  return (
    <div>
      {sidebar ? <Sidebar /> : ''}
      <div className='w-full h-16 gradient-blue drop-shadow-2xl flex justify-center items-center px-10'>
        {/* Navbar items */}
        <div className='container flex justify-center items-center lg:max-w-screen-2xl sm:max-w-screen-md max-w-xs'>
          {/* Hamburger and Logo Container */}
          <div className='h-full flex justify-left items-center'>
            {/* Logo */}
            {/* <CgLogOff className='w-10 h-10 text-white' /> */}
            {/* Hamburger */}
            <div ref={burgerRef} className='space-y-2 rounded-md p-6'>
              <span className='block w-5 h-[0.20rem] bg-white ease-out duration-500'></span>
              <span className='block w-8 h-[0.20rem] bg-white ease-out duration-500'></span>
              <span className='block w-8 h-[0.20rem] bg-white ease-out duration-500'></span>
            </div>
          </div>
          {/* end Hamburger and Logo Section */}
          {/* Links */}
          <div className='container flex justify-center font-prompt text-white sm:visible invisible'>
            <Link href='#' passHref>
              <a className='link px-4 py-2 text-lg  duration-500 ease-in-out hover:bg-slate-600 hover:bg-opacity-50 hover:to-transparent rounded-md'>
                Home
              </a>
            </Link>
            <Link href='#' passHref>
              <a className='link px-4 py-2 text-lg  duration-500 hover:bg-slate-600 hover:bg-opacity-50 hover:to-transparent rounded-md'>
                About
              </a>
            </Link>
            <Link href='#' passHref>
              <a className='link px-4 py-2 text-lg  duration-500 hover:bg-slate-600 hover:bg-opacity-50 hover:to-transparent rounded-md'>
                Projects
              </a>
            </Link>
            <Link href='#' passHref>
              <a className='link px-4 py-2 text-lg  duration-500 hover:bg-slate-600 hover:bg-opacity-50 hover:to-transparent rounded-md'>
                Testimonials
              </a>
            </Link>
          </div>
          {/* end Links */}
          {/* Theme Toggle */}
          {/* bg-slate-200 hover:opacity:20 */}
          <div
            ref={toggleContainerRef}
            className='w-[4rem] h-10 mx-2 bg-[#03024b] dark:bg-black rounded-full flex items-center pl-[0.21rem]'
          >
            <div
              ref={toggleRef}
              className='w-7 h-7 rounded-full bg-green-600 flex justify-center items-center ease-in-out duration-300'
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
    </div>
  )
}
