import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footar from '../Footar/Footar'
import { Outlet } from 'react-router-dom'



export default function Layout() {
  return (
    <>
      <Navbar/>

      <div >
      <Outlet/>
      </div>

      <Footar/>      
    </>
  )
}
