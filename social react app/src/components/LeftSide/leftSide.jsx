import React from 'react'
import nature from '../../assets/images/nature.jpg'
import avatar from "../../assets/images/avatar.png"
import job from "../../assets/images/jobs.jpg"
import location from "../../assets/images/location.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.svg.webp"
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
        <p className='font-roboto font-medium text-xs text-gray-700 no-underline tracking-normal leading-none'>Access exclusive tools & insights</p>
        <p className='font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none py-2'>Try premium for free</p>
      </div>
      <div className='flex pl-2 items-center'>
        <div className='flex items-center pb-4'></div>
        <img className='h-10' src={location} alt="location" ></img>
        <p className='font-roboto font-bold text-lg no-underline tracking-normal leading-none' >
          Pakistan
        </p>
      </div>
      <div className='flex  items-center'>
        <div className='flex items-center pb-4'></div>
        <img className='h-10' src={job} alt="job" ></img>
        <p className='font-roboto font-bold text-lg no-underline tracking-normal leading-none' >
          React Developer
        </p>
      </div>
      <div className='flex justify-center items-center pt-4' >
         <p className='font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none' >Events</p>
         <p className='font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none mx-2' >Groups</p>
         <p className='font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none' >Follow</p>
         <p className='font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none mx-2' >More</p>
      </div>
      <div className='ml-2'>
        <p className='font-roboto font-bold text-lg no-underline tracking-normal leading-none py-2'>
          Social Profile
        </p>
        <div className='flex items-center'>
        <img className='h-10 mb-3 mr-2' src={facebook} alt="facebook" />
        <p className='font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r  to-red-600 from-blue-400 no-underline tracking-normal '>
        Social Network
        </p>
        </div>
        <div className='flex items-center'>
        <img className='h-10 mb-3 mr-2' src={twitter} alt="twitter" />
        <p className='font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r  to-red-600 from-blue-400 no-underline tracking-normal'>
        Social Network
        </p>
        </div>
      </div>
    </div>
  )
}

export default LeftSide
