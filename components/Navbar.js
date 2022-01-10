import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { WiDaySunny } from 'react-icons/wi'
import { MdNightlightRound } from 'react-icons/md'
import { FaBeer } from 'react-icons/fa'
import { CgLogOff } from 'react-icons/cg'

export default function Navbar() {
  const dispatch = useDispatch()
  const colors = useSelector((state) => state.theme.value)

  return (
    <div className='w-full h-16 bg-[palevioletred] drop-shadow-2xl flex justify-center items-center px-10'>
      {/* Navbar items */}
      <div className='container flex justify-center items-center max-w-s'>
        {/* Hamburger and Logo Container */}
        <div className='h-full flex justify-left items-center'>
          {/* Logo */}
          {/* <CgLogOff className='w-10 h-10 text-white' /> */}
          {/* Hamburger */}
          <div className='space-y-2'>
            <span className='block w-5 h-0.5 bg-white'></span>
            <span className='block w-8 h-0.5 bg-white'></span>
            <span className='block w-8 h-0.5 bg-white'></span>
          </div>
        </div>
        {/* end Hamburger and Logo Section */}
        {/* Links */}
        <div className='container flex justify-center text-white sm:visible invisible'>
          <h1 className='mx-4 text-lg'>Home</h1>
          <h1 className='mx-4 text-lg'>About</h1>
          <h1 className='mx-4 text-lg'>Projects</h1>
          <h1 className='mx-4 text-lg'>Testimonials</h1>
        </div>
        {/* end Links */}
        {/* Theme Toggle */}
        <div className='w-[4.5rem] h-10 border-[3px] rounded-full flex items-center justify-start pl-0.5'>
          <div className='w-7 h-7 rounded-full bg-[#eee] flex justify-center items-center'>
            <WiDaySunny className='w-5 h-5 text-[#03024b]' />
          </div>
        </div>
      </div>
      {/* end Navbar items */}
    </div>
  )
}
