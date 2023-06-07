import { MessageContext } from '@/context-api/MessageData';
import Image from 'next/image'
import React, { useContext } from 'react'

const Person = ({data }: any) => {
  const filterfunction = useContext(MessageContext);

  return (
    <div  className='flex justify-between sm:py-3 cursor-pointer hover:bg-black my-1 px-1 rounded-md' onClick={() => filterfunction.filterData(data.id)}>
        <div className='flex gap-2 text-sm'>
            <Image src={data.image} alt='logo' width={100} height={100} className='w-12 h-12 rounded-full bg-white' />
            <div className='space-y-1 hidden md:block'>
            <h2 className='font-medium text-white'>{data.name}</h2>
            {data.message ? <p className='text-gray-500'>{data.message}</p> : <p className='text-green-600'>Typing...</p>}
            </div>
        </div>
        <div className='text-xs space-y-1 text-center hidden md:block'>
            <p className='text-gray-500'>{data.time}</p>
            <div className='bg-red-600 w-4 rounded-full text-white'>{data.number}</div>
        </div>
    </div>
  )
}

export default Person
