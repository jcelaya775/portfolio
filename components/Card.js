import React from 'react'
import Image from 'next/image'
import img from '../images/hero.jpg'

export default function Item({ text }) {
  return (
    <div className='container mx-auto px-2'>
      <div className='bg-zinc-900 text-[#f8f8f8] px-10 py-12 rounded-lg'>
        <h1 className='font-semibold'>{text}</h1>

        <p className='mt-2 text-[#f0f0f0] italic'>
          "This is a short description"
        </p>

        <div className='my-10'>
          <Image src={img} />
        </div>

        <button className='btn btn-primary text-[#f8f8f8] w-[calc(100%)]'>
          Button
        </button>
      </div>
    </div>
  )
}
