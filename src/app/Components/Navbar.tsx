import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    
        <nav className='fixed p-3 w-full backdrop-blur-lg z-[100] flex items-center  border-neutral-500 justify-between bg-black/30'>
            <h1 className='text-2xl font-bold px-4'>Cohorse</h1>
            <ul className='flex space-x-4 justify-between px-6 gap-4 p-4'>
            <li>
                <a href='#' className='text-gray-800 font-sans font-medium'>Home</a>
            </li>
            <li>
                <a href='#' className='text-gray-800 font-sans font-medium'>Courses</a>
            </li>
            <li>
                <a href='#' className='text-gray-800 font-sans font-medium'>About</a>
            </li>
            </ul>
        </nav>
       

   
  )
}

export default Navbar