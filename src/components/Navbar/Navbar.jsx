import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  const[ coant , setCoant]=useState("hidden")

      function hamada(){
        if (coant == "hidden" ) {
          setCoant("block")

        }
        else{
          setCoant("hidden")
          
        }
        
      }


  return (
    <>
      

<nav className="bg-slate-700 border-gray-200 py-4 fixed top-0 left-0 right-0  z-50">
  <div className="lg:container mx-4 flex flex-wrap items-center justify-between lg:mx-auto py-4 px-0 ">
    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-3xl font-bold whitespace-nowrap text-white">START FRAMEWORK  </span>
    </Link>
    <button onClick={()=>hamada()} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={` w-full md:block md:w-auto ${coant}`}>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl: space-x-reverse md:mt-0 md:border-0 ">
        <li>
          <NavLink to="About" className="block py-2 px-1 font-bold text-white  " aria-current="page">ABOUT</NavLink>
        </li>
        
        <li>
          <NavLink to="Portfolio" className="block py-2 px-1 font-bold text-white   " aria-current="page">PORTFOLIO</NavLink>
        </li>

        <li>
          <NavLink to="Contact" className="block py-2 px-1 font-bold text-white   " aria-current="page">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
