import React, { useState, useRef, useEffect } from 'react'
import Sidebar from './Sidebar'
import Link from 'next/link'
import Switch from './Switch'
import { useSelector, useDispatch } from 'react-redux'
import { WiDaySunny } from 'react-icons/wi'
import { MdNightlightRound } from 'react-icons/md'
import { FaBeer } from 'react-icons/fa'
import { CgLogOff } from 'react-icons/cg'
import { MdOutlineClose } from 'react-icons/md'

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const dispatch = useDispatch()
  const burgerRef = useRef()

  useEffect(() => {
    const burger = burgerRef.current

    burger.addEventListener('mouseenter', mouseEnter)
    burger.addEventListener('click', burgerClick)
    burger.addEventListener('mouseleave', mouseLeave)

    return () => {
      burger.removeEventListener('mouseenter', mouseEnter)
      burger.removeEventListener('click', burgerClick)
      burger.removeEventListener('mouseleave', mouseLeave)
    }
  }, [])

  const mouseEnter = (event) => {
    event.preventDefault()

    console.log(sidebar)

    // if (!sidebar) {
    //   const [b1, b2, b3] = document.querySelectorAll('.block')

    //   b1.classList.remove('w-5')
    //   b1.classList.add('w-8')
    //   b3.classList.remove('w-8')
    //   b3.classList.add('w-5')
    // }
  }

  const mouseLeave = (event) => {
    event.preventDefault()

    console.log(sidebar)

    // if (!sidebar) {
    //   console.log('mouse leave on burger')
    //   // if sidebar not enabled -> animate burger
    //   const [b1, b2, b3] = document.querySelectorAll('.block')

    //   b1.classList.remove('w-8')
    //   b1.classList.add('w-5')
    //   b3.classList.remove('w-5')
    //   b3.classList.add('w-8')
    // }
  }

  const burgerClick = (event) => {
    event.preventDefault()
    const burger = burgerRef.current

    setSidebar((prev) => !prev)
  }

  return (
    <div>
      <div className='ease-in duration-500'>{sidebar && <Sidebar />}</div>
      <div className='relative z-20 w-full h-16 bg-blue-500 drop-shadow-2xl flex justify-center items-center px-10'>
        {/* Navbar items */}
        <div className='container flex justify-center items-center lg:max-w-screen-2xl sm:max-w-screen-md max-w-xs'>
          {/* Hamburger and Logo Container */}
          <div className='h-full flex justify-left items-center'>
            {/* Logo */}
            {/* <CgLogOff className='w-10 h-10 text-white' /> */}
            {/* Hamburger */}
            {!sidebar ? (
              <div
                ref={burgerRef}
                className='space-y-2 rounded-md p-6 hover:cursor-pointer group'
              >
                <span className='block w-5 group-hover:w-8 h-[0.20rem] bg-white ease-out duration-500'></span>
                <span className='block w-8 h-[0.20rem] bg-white ease-out duration-500'></span>
                <span className='block w-8 group-hover:w-5 h-[0.20rem] bg-white ease-out duration-500'></span>
              </div>
            ) : (
              <div
                ref={burgerRef}
                className='p-6 ease-out hover:cursor-pointer hover:animate-spin-slow delay-1000 duration-800'
              >
                <MdOutlineClose id='exit' className='text-white w-10 h-10' />
              </div>
            )}
          </div>
          {/* end Hamburger and Logo Section */}

          {/* Links */}
          <div className='container flex justify-center font-prompt text-white md:visible invisible'>
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

          <Switch />
        </div>
        {/* end Navbar items */}
      </div>
    </div>
  )
}
