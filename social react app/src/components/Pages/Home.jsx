import React from 'react'
import Navbar from '../Navbar/Navbar'
import leftSide from '../LeftSideBar/leftSide'

const Home = () => {
  return (
    <div className='w-full' >
      <div className='fixed top-0 z-10 w-full bg-white'>
      <Navbar/>
      </div>
      <div className='flex bg-gray-400'>
        <div>
        <leftSide/>
        </div>
      </div>
    </div>
  )
}

export default Home
