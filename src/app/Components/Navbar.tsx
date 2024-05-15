import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="fixed p-3 w-full backdrop-blur-lg z-[100] flex items-center border-neutral-500 justify-between">
      <h1 className="text-2xl font-bold px-12 text-black/100">Cohorse</h1>
      <ul className="flex space-x-6 justify-between px-24 gap-4 p-4 text-md md:space-x-4 lg:space-x-8 font-sans font-medium ">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/courses">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
