import React from 'react'

export default function Item({ text }) {
  return (
    <div className='container mx-auto px-2'>
      <div className='bg-zinc-800 text-[#f0f0f0] px-10 py-12 rounded-lg drop-shadow-2xl shadow-2 xl'>
        <h1 className='font-semibold'>{text}</h1>

        <p className='mt-2 text-[#ececec] italic'>
          &quot;This is a short description&quot;
        </p>

        <div className='my-10'>
          {/* <img src={img} alt='placeholder' /> */}
          {/* <Image src={img} alt='placeholder' /> */}
        </div>

        <button className='btn w-full btn-primary text-[#f0f0f0] hover:bg-cyan-600 gradient-hover shadow-md drop-shadow-md ease-out duration-500'>
          Button
        </button>
      </div>
    </div>
  )
}
