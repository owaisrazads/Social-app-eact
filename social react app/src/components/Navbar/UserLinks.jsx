import React from 'react'
import {  Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.png"

const UserLinks = () => {
  return (
    <div className='flex justify-center items-center cursor-pointer' >
      <div  className='hover:translate-y-1 duration-500 ease-in-out hover:text-blue-500'>
      <i class="fa-solid fa-circle-user text-xl mr-3"></i>
      </div>
      <div  className='hover:translate-y-1 duration-500 ease-in-out hover:text-blue-500'>
      <i class="fa-solid fa-screwdriver-wrench text-xl m-3"></i>
      </div>
      <div  className='hover:translate-y-1 duration-500 ease-in-out hover:text-blue-500'>
      <i class="fa-regular fa-bell text-xl ml-3"></i>
      </div>
      <div className='mx-4 flex items-center'>
        <Tooltip content="Sign Out" placement= "bottom" >
        <Avatar src= {avatar} size='sm' alt='avatar' variant='rounded' ></Avatar>
        </Tooltip>
        <p className='ml-4 font-roboto text-sm text-black font-medium no-underline'>User</p>
      </div>
    </div>
  )
}

export default UserLinks
