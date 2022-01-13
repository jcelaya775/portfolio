import React, { useEffect } from 'react'

const items = ['Home', 'About', 'Projects', 'Testimonials']

export default function Sidebar() {
  useEffect(() => {
    const wrapper = document.querySelector('#wrapper')

    wrapper.classList.add('translate-x-[-100%]')
    wrapper.classList.remove('translate-x-[-100%]')
    wrapper.classList.add('translate-x-0')
  })

  return (
    <div
      id='wrapper'
      className='absolute ease-in-out duration-700 z-1 py-32 h-screen max-w-[25rem] w-[40%] bg-black '
    >
      <div className='h-full w-full flex flex-col justify-start items-start pl-[15%] text-white text-4xl font-robo'>
        {items.map((item, key) => (
          <h1
            key={key}
            className='hover:font-bold hover:decoration-slice hover:cursor-pointer'
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  )
}
