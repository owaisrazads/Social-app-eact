import React from 'react'
import NavLinks from './NavLinks'
import UserLinks from './UserLinks'


const Navbar = () => {
    return (

        <div className='justify-between'>
            <div className='flex justify-between border-b border-gray-500 w-full px-44 py-2'>
                <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto"></div>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600'>Social Media App</span>

                <div className="flex justify-center item-center mx-auto">
                    <NavLinks/>
                </div>
                <div>
                   <UserLinks/>
                </div>

            </div>
        </div>

    )
}

export default Navbar
