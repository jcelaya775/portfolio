import React from 'react'
import { useSelector } from 'react-redux'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Project from '../components/Project'
import ImageList from '../components/ImageList'
import Footer from '../components/Footer'

export default function Home() {
  const theme = useSelector((state) => state.theme.value)

  // const color = css({
  //   backgroundColor: state.theme.primary,
  // })

  let className =
    'my-48 p-20 rounded-md container mx-auto max-w-lg  grid gap-6 gap-y-10 grid-cols-1 md:grid-cols-2 md:max-w-screen-lg lg:grid-cols-3'
  className += 'bg-[' + theme.primary + ']'
  // console.log(theme)
  // console.log(theme.secondary)

  // const color = 'bg-[' + theme.secondary + ']'
  // console.log(color)

  return (
    <div>
      <Hero />

      {/* Content */}
      <div className={className}>
        <Card text={'Greetings'} />
        <Card text={'Hello'} />
        <Card text={'World'} />
        <Card text={'Goodbye'} />
        <Card text={'Seeyah'} />
        <Card text={'Tomrrow'} />
      </div>
      {/* end Content */}

      <Project />

      <div className='container mx-auto mb-48'>
        <ImageList />
      </div>

      <Footer />
    </div>
  )
}
