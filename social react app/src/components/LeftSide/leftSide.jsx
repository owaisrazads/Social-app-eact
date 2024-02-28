import React from 'react'
import nature from '../../assets/images/nature.jpg'
import avatar from "../../assets/images/avatar.png"
import { Avatar, Tooltip } from '@material-tailwind/react'


const LeftSide = () => {
  return (
    <div className='flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg '>
     <div className='flex flex-col items-center relative' >
      <img className='h-28 w-full rounded-r-xl' src={nature} alt="nature" />
      <div className='absolute -bottom-4'>
      <Tooltip content="profile" placement="top">
        <Avatar size='md' src={avatar} alt='avatar' ></Avatar>
      </Tooltip>
     </div>
     </div>
  <div className='flex flex-col items-center pt-6' >
    <p className='font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none' >
      User Email
    </p>
    <p>Access exclusive </p>
  </div>
    </div>
  )
}

export default LeftSide
