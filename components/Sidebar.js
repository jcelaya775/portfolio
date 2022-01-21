import React, { useEffect } from 'react'

const items = ['Home', 'About', 'Projects', 'Testimonials']

export default function Sidebar() {
  useEffect(() => {
    const wrapper = document.querySelector('#wrapper')

    wrapper.classList.remove('translate-x-[-100%]')
    wrapper.classList.add('translate-x-[-100%]')
    wrapper.classList.add('translate-x-0')
  })

  return (
    <div
      id='wrapper'
      className='absolute ease-in-out duration-500 z-10 py-32 h-full max-w-screen-sm w-[100%] bg-zinc-900 bg-opacity-95 backdrop-blur-lg'
    >
      <div className='flex flex-col justify-start items-start pl-[15%] text-white text-4xl font-robo'>
        {items.map((item, key) => (
          <h1
            key={key}
            className='py-2 ease-in-out hover:font-semibold duration-100 hover:decoration-slice hover:cursor-pointer'
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  )
}
