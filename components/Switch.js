import React from 'react'

export default function Switch() {
  return (
    <div>
      <div className='relative inline-block w-10 mr-2 align-middle select-none ease-in-out duration-200'>
        <input
          type='checkbox'
          name='toggle'
          id='toggle'
          className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ease-in-out duration-200'
        />
        <label
          htmlFor='toggle'
          className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ease-in-out duration-200'
        ></label>
      </div>
    </div>
  )
}
