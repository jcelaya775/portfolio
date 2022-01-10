import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import pic from '../images/hero.jpg';
import { current } from '@reduxjs/toolkit';

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
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className='w-screen h-screen bg-[#001325]'>
      <Navbar />
      {/* Hero */}
      <h1 className='text-6xl text-center font-robo font-bold pt-20 text-white'>
        Welcome Back
      </h1>
      {/* Image */}
      {/* <div className='flex justify-center items-center my-16 rounded'>
        <Image
          className='transparent rounded-md'
          width={500}
          height={300}
          src={pic}
        />
      </div> */}
      {/* end Image */}
      <div className='container mx-auto flex justify-center items-center my-20'>
        {/* <Button>Button</Button>
        <Button primary>Button</Button> */}
        <button className='btn btn-primary'>Button</button>
        <button className='text-[palevioletred] border border-[palevioletred] hover:bg-[palevioletred] hover:text-white text-white font-bold py-2 px-4 h-fit rounded-full'>
          Button
        </button>
        <button type='button' className='btn gradient gradient-hover'>
          Hover me
        </button>
      </div>
      {/* end Hero */}
    </div>
  );
}
