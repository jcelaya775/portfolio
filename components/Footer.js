import React from 'react'

// TODO:
// + add social media links (blog, youtube, github, linkedin)
// + contact info & resume
// scroll back up button

export default function Footer() {
  return (
    <div className='bg-zinc-800 text-[#f0f0f0] h-80'>
      <div className='container mx-auto py-24 text-center grid grid-cols-3'>
        <ul>
          <li>
            <h3 className='hover:font-semibold hover:cursor-pointer'>Home</h3>
            <h3 className='hover:font-semibold hover:cursor-pointer'>
              Projects
            </h3>
            <h3 className='hover:font-semibold hover:cursor-pointer'>Skills</h3>
            <h3 className='hover:font-semibold hover:cursor-pointer'>About</h3>
          </li>
        </ul>
        <ul>
          <li>
            <h3 className='hover:font-semibold hover:cursor-pointer'>Home</h3>
            <h3 className='hover:font-semibold hover:cursor-pointer'>
              Projects
            </h3>
            <h3 className='hover:font-semibold hover:cursor-pointer'>Skills</h3>
            <h3 className='hover:font-semibold hover:cursor-pointer'>About</h3>
          </li>
        </ul>
        <ul>
          <li>
            <h3 className='hover:font-semibold hover:cursor-pointer'>Home</h3>
            <h3 className='hover:font-semibold hover:cursor-pointer'>
              Projects
            </h3>
            <h3 className='hover:font-semibold hover:cursor-pointer'>Skills</h3>
            <h3 className='hover:font-semibold hover:cursor-pointer'>About</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}
