import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import PostImage from './PostImage'
import Image from 'next/Image'
import pic from '../public/images/inspo.jpg'

export default function Hero() {
  return (
    <div>
      <div className={`relative bg-slate-100`}>
        <Navbar />
        <div className='mx-auto py-48 px-20 max-w-md grid grid-cols-1 gap-24 lg:grid-cols-2 md:max-w-screen-lg lg:max-w-screen-xl 2xl:max-w-screen-2xl'>
          <div className='container flex flex-col justify-center max-w-screen-xl h-full'>
            <h1 className='text-6xl text-zinc-00 inline-block font-robo font-bold'>
              Hi, I&apos;m Jorge
            </h1>

            <h1 className='mt-6 mb-12 text-zinc-500 text-xl leading-8 font-normal font-robo'>
              I am a university student studying computer science and
              mathematics. I love learning and improving my skills in
              programming and development. While I have a well-established set
              of skills, from databases to frontend web development, I am always
              excited to tackle new challenges and provide the highest level of
              work that I can.
            </h1>

            <button
              type='button'
              className='btn w-fit btn-primary text-[#f0f0f0] hover:bg-cyan-600 gradient-hover shadow-md drop-shadow-md ease-out duration-500'
            >
              Contact Me
            </button>
          </div>

          {/* TODO: if window width >= md -> render image  */}
          <div className='image py-10 scale-0 md:scale-100 h-full w-full'>
            <Image src={pic} />
          </div>
          {/* <PostImage source='inspo.jpg' /> */}
        </div>
      </div>
    </div>
  )
}
