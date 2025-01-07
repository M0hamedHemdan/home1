import React from 'react'
import style from './Home.module.css'
import logo from '../../assets/avataaars.svg'

export default function Home() {
  return (
    <section className='bg-teal-500 h-screen flex justify-center items-center'>
      <div className='text-center text-white '>
        <div className='mx-auto w-64'>
        <img 
        src={logo} 
        
        alt="avataaars"  
        />
        </div>
        <h2 className='text-4xl font-bold mt-16 mb-3'>START FRAMEWORK</h2>
        <span className='
            mb-3
            before:relative before:top-[15px] before:left-14 before:block before:content-[""] before:bg-white before:w-[90px] before:h-[4px]  
            after:relative after:top-[-11px] after:left-52 after:block after:content-[""] after:bg-white after:w-[90px] after:h-[4px]
        '>
        <i className="fa-solid fa-star"></i>
        </span>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  )
}
