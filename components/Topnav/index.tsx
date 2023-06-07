import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { RiNotification2Line } from 'react-icons/ri';
import { FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';



const index = () => {
  return (
    <div className='bg-[#1b1d22] flex justify-between py-3 px-6 items-center'>
      <h1 className='text-white text-xl cursor-pointer'>OCTOM.</h1>
      <div className='sm:flex bg-black py-2 px-4 text-white rounded-lg hidden'>
        <input placeholder='Search anything...' className='text-grey-400 text-sm bg-black  '/>
        <FiSearch className='text-2xl cursor-pointer'/>
      </div>
      <div className='flex text-white gap-6 items-center'>
        <div className='relative'>
        <RiNotification2Line className='text-2xl cursor-pointer'/>
        <p className='absolute top-0 bg-purple-400 right-0 text-[8px] rounded-full px-1'>2</p>
        </div>
        <div className='flex items-center gap-2 cursor-pointer'>
            <Image src='/logo.webp' alt='logo' width={100} height={100} className='h-10 w-10 rounded-full bg-white transition ease-in-out hover:scale-125 duration-300' />
            <FiChevronDown className='text-xl'/>
        </div>
      </div>
    </div>
  )
}

export default index
