import React, { useState, useRef, useEffect } from 'react'
import Sidebar from './Sidebar'
import Link from 'next/link'
import Switch from './Switch'
import { useSelector, useDispatch } from 'react-redux'
import { MdOutlineClose } from 'react-icons/md'

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const theme = useSelector((theme) => state.theme.value)
  const dispatch = useDispatch()
  const burgerRef = useRef()

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark')
      localStorage.setItem('vidyaDarkMode', 'true')
    } else {
      window.document.documentElement.classList.remove('dark')
      localStorage.setItem('vidyaDarkMode', 'false')
    }
  }, [darkMode])

  const onClick = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const burger = burgerRef.current
    burger.addEventListener('click', burgerClick)

    return () => {
      burger.removeEventListener('click', burgerClick)
    }
  }, [])

  const burgerClick = (event) => {
    event.preventDefault()
    const burger = burgerRef.current

    setSidebar((prev) => !prev)
  }

  return (
    <div>
      <div className={`relative z-10`}>
        <Sidebar isActive={sidebar ? false : true} />
      </div>
      <div className='fixed z-20 w-full h-16 bg-zinc-800 drop-shadow-2xl flex justify-center items-center px-20'>
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
                <span className='block w-8 group-hover:w-5 h-[0.20rem] bg-[#f0f0f0] ease-out duration-500'></span>
                <span className='block w-8 h-[0.20rem] bg-[#f0f0f0] ease-out duration-500'></span>
                <span className='block w-5 group-hover:w-8 h-[0.20rem] bg-[#f0f0f0] ease-out duration-500'></span>
              </div>
            ) : (
              <div
                ref={burgerRef}
                className='p-6 ease-out hover:cursor-pointer animate-spin-slow duration-500'
              >
                <MdOutlineClose id='exit' className='text-white w-8 h-8' />
              </div>
            )}
          </div>
          {/* end Hamburger and Logo Section */}

          {/* Links */}
          <div className='container flex justify-center font-robo text-white md:visible invisible'>
            <Link href='#' passHref>
              <a className='link px-4 py-2 text-lg  duration-300 ease-in-out hover:bg-zinc-100 hover:bg-opacity-10 hover:to-transparent rounded-md'>
                Home
              </a>
            </Link>
            <Link href='#' passHref>
              <a className='link px-4 py-2 text-lg  duration-300 hover:bg-zinc-100 hover:bg-opacity-10 hover:to-transparent rounded-md'>
                Projects
              </a>
            </Link>
            <Link href='#' passHref>
              <a className='link px-4 py-2 text-lg  duration-300 hover:bg-zinc-100 hover:bg-opacity-10 hover:to-transparent rounded-md'>
                Education
              </a>
            </Link>
            <Link href='#' passHref>
              <a className='link px-4 py-2 text-lg  duration-300 hover:bg-zinc-100 hover:bg-opacity-10 hover:to-transparent rounded-md'>
                Skills
              </a>
            </Link>
            <Link href='#' passHref>
              <a className='link px-4 py-2 text-lg  duration-300 hover:bg-zinc-100 hover:bg-opacity-10 hover:to-transparent rounded-md'>
                Contact
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
