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
      <Navbar />
      {/* Hero */}
      <div className='bg-slate-100'>
        <div className='py-32 px-10 w-auto mx-auto grid grid-cols-1 gap-24 md:grid-cols-2 md:max-w-screen-md lg:max-w-screen-2xl'>
          <div className='container flex flex-col justify-center max-w-screen-xl h-full bg-slate-100'>
            <h1 className='text-6xl text-zinc-900 inline-block font-robo font-bold'>
              Welcome Back
            </h1>

            <h1 className='mt-6 mb-12 text-zinc-700 text-xl font-normal font-robo'>
              We bring your projects to life with our professional development
              skills. Whether you need a new website for your business or are
              simply looking to take things to the next level, we are here to
              help.
            </h1>

            <button
              type='button'
              className='btn w-fit gradient-blue gradient-hover ease-out duration-500'
            >
              Contact Us
            </button>
          </div>

          <div className='rounded-md'>
            <Image src={img} passHref />
          </div>
        </div>
      </div>
      {/* end Hero */}

      {/* Content */}
      <div className='container mx-auto max-w-lg my-56 px-10 grid gap-6 grid-cols-1 md:grid-cols-2 md:max-w-screen-lg lg:grid-cols-3'>
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
