import React from 'react'

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
    </div>
  )
}

export default UserLinks
