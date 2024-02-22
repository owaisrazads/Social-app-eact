import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-center border-b border-gray-500 w-full px-44 py-2'>
            {/* <Link to="/" > */}
                <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto"></div>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600'>Social Media App</span>
                
            {/* </Link> */}
        </div>
    )
}

export default Navbar
