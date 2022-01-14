import React from 'react';
import Image from 'next/image';
import pic from '../images/hero.jpg';

export default function Item() {
  return (
    <div className='container mx-auto p-3 py-6 text-center w-64 bg-white rounded-md flex flex-col justify-between items-center'>
      <h1>Hello World</h1>
      <p className='py-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        itaque.
      </p>
      <img src='../images/hero.jpg' width={200} height={100} />
      <button className='btn btn-primary'>Button</button>
    </div>
  );
}
