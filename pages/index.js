import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Image from 'next/image'
import Footer from '../components/Footer'
import styled, { css } from 'styled-components'
import img from '../images/hero.jpg'

export default function Home() {
  const theme = useSelector((state) => state.theme.value)

  return (
    <div>
      {/* Hero */}
      <div className='bg-slate-100 relative'>
        <Navbar />
        <div className='mx-auto py-48 px-20 max-w-md grid grid-cols-1 gap-24 lg:grid-cols-2 md:max-w-screen-lg lg:max-w-screen-xl 2xl:max-w-screen-2xl'>
          <div className='container flex flex-col justify-center max-w-screen-xl h-full bg-slate-100'>
            <h1 className='text-6xl text-zinc-700 inline-block font-robo font-bold'>
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

          <div className='scale-0 lg:scale-100 rounded-md'>
            <Image src={img} alt='placeholder' />
          </div>
        </div>
      </div>
      {/* end Hero */}

      {/* Content */}
      <div className='container mx-auto max-w-lg my-56 px-10 grid gap-6 gap-y-10 grid-cols-1 md:grid-cols-2 md:max-w-screen-lg lg:grid-cols-3'>
        <Card text={'Greetings'} />
        <Card text={'Hello'} />
        <Card text={'World'} />
        <Card text={'Goodbye'} />
        <Card text={'Seeyah'} />
        <Card text={'Tomrrow'} />
      </div>
      {/* end Content */}

      <Footer />
    </div>
  )
}
