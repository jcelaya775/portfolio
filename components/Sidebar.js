import React from 'react'

const items = ['Home', 'About', 'Projects', 'Testimonials']

export default function Sidebar() {
  return (
    <div className='absolute py-32 h-screen max-w-[25rem] w-[40%] bg-black'>
      <div className='h-full w-full flex flex-col justify-start items-start pl-[15%] text-white text-4xl font-robo'>
        {items.map((item) => (
          <h1>{item}</h1>
        ))}
      </div>
    </div>
  )
}
