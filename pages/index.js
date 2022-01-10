import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import styled, { css } from 'styled-components'

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;

//   ${(props) =>
//     props.primary &&
//     css`=
//       background: palevioletred;
//       color: white;
//     `}
// `

export default function Home() {
  const colors = useSelector((state) => state.theme.value)

  return (
    <div className='w-screen h-screen bg-[#001325]'>
      <Navbar />
      {/* Hero */}
      <h1 className='text-6xl text-center font-robo font-bold py-40 text-white'>
        Welcome Back
      </h1>
      {/* <Image width={500} height={500} src='/images/hero.jpg' /> */}
      <div className='container mx-auto flex justify-center items-center my-20'>
        {/* <Button>Button</Button>
        <Button primary>Button</Button> */}
        <button className='btn btn-primary'>Button</button>
        <button className='text-[palevioletred] border border-[palevioletred] hover:bg-[palevioletred] hover:text-white text-white font-bold py-2 px-4 h-fit rounded-full'>
          Button
        </button>
      </div>
      {/* end Hero */}
    </div>
  )
}
