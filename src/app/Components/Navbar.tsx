import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    
        <nav className='fixed p-3 w-full backdrop-blur-lg z-[100] flex items-center  border-neutral-500 justify-between'>
            <h1 className='text-2xl font-bold px-12
             text-black/100'>Cohorse</h1>
            <ul className='flex space-x-6 justify-between px-24 gap-4 p-4 text-md'>
            <li>
                <a href='#' className='text-gray-800 font-sans font-medium'>Home</a>
            </li>
            <li>
                <a href='#' className='text-gray-800 font-sans font-medium'>Courses</a>
            </li>
            <li>
                <a href='#footer' className='text-gray-800 font-sans font-medium'>About</a>
            </li>
            
            </ul>


        </nav>
       

   
  )
}

export default Navbar