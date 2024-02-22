import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavLinks = () => {
  return (
    <div className='flex justify-center items-center cursor-pointer '>
      <div className='hover:translate-y-1 duration-500 ease-in-out hover:text-blue-500'>
      <i class="fa-regular fa-comment ml-4 text-xl"></i>
      </div>
      <div  className='hover:translate-y-1 duration-500 ease-in-out hover:text-blue-500'>
     <i class="fa-solid fa-house ml-4 text-xl"></i>
      </div>
      <div  className='hover:translate-y-1 duration-500 ease-in-out hover:text-blue-500'>
      <i class="fa-solid fa-cubes text-xl ml-4"></i>
      </div> <div  className='hover:translate-y-1 duration-500 ease-in-out hover:text-blue-500'>
      <i class="fa-solid fa-trophy ml-4 text-xl"></i>
      </div>
    </div>
  )
}

export default NavLinks
 