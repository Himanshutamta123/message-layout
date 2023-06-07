import React from 'react'
import Allmessage from '../messages/All-messages/Allmessage'
import Profile from '../Profile'

const index = () => {
  return (
    <div>
        <div className='w-[100%] xl:w-[25%] md:w-[40%]  md:block'><Allmessage /></div>
        
      <div className='w-[25%] bg-[#111427e7] hidden xl:block'> <Profile />
      </div>
    </div>
  )
}

export default index
