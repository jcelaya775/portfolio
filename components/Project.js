import React from 'react'
// import photo from '../public/images/hero.jpeg'

export default function Project({ align }) {
  return (
    <div className='container mx-auto mb-48 w-full'>
      <div className='container grid grid-cols-1 md:grid-cols-4'>
        {/* box 1 */}
        <div className='border-2 w-200 h-96 absolute md:static'>
          {/* <img src={photo} className='bg-cover' /> */}
        </div>
        {/* end box 1 */}
        {/* box 2 */}
        <div className='border-2 w-200 h-96 flex flex-col justify-center absolute md:static'>
          <h1 className='font-black font-lato text-zinc-600'>Project Name</h1>
          <div className='container rounded-md h-fit w-full bg-zinc-800 flex flex-col justify-center items-center'>
            <h3 className='font-sans text-[#d6d7da] p-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              laboriosam ratione dolores aut? Reiciendis, consectetur?
            </h3>
          </div>
        </div>
        {/* end box 2 */}
      </div>
    </div>
  )
}
