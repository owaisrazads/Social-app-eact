import React from 'react'
import Navbar from '../Navbar/Navbar'
import LeftSide from '../LeftSide/leftSide'

const Home = () => {
  return (
    <div className='w-full' >
      <div className='fixed top-0 z-10 w-full bg-white'>
      <Navbar/>
      </div>
      <div className='flex bg-gray-400'>
        <div className='flex-auto w-[20%] fixed top-12'>
        <LeftSide/>
        </div>
      </div>
    </div>
  )
}

export default Home
