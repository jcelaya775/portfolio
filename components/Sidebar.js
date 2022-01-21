import React, { useEffect } from 'react'

const items = ['Home', 'About', 'Projects', 'Testimonials']

export default function Sidebar({ isActive }) {
  return (
    <div
      id='wrapper'
      className={`absolute ${
        isActive ? 'translate-x-[-100%]' : 'translate-x-0'
      } ease-out duration-300 py-32 min-h-screen top-0 left-0 max-w-screen-sm w-[100%] bg-zinc-800`}
    >
      <div className='flex flex-col justify-start items-start pl-[15%] text-white text-4xl font-robo'>
        {items.map((item, key) => (
          <h1
            key={key}
            className='p-2 hover:font-semibold hover:decoration-slice hover:cursor-pointer'
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  )
}
