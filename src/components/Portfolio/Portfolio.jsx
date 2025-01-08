import React, { useState } from 'react'
import logo1 from '../../assets/poert1.png'
import logo2 from '../../assets/port2.png'
import logo3 from '../../assets/port3.png'


export default function Portfolio() {
  const[ coant , setcoant]=useState("hidden")
  function hamada(    ){

    if (useState == "flex") {
      setcoant("hidden")
      coant
      
    }
    else{
      setcoant("flex")
      coant
    }
  
  }
  function medo(){
    setcoant("hidden")
  }


  return (
    <>
      <section className=' text-left mt-36  justify-center items-center mb-16'>
            <h2 className='text-4xl font-bold text-center mb-5'>PORTFOLIO COMPONENT</h2>
            <p className='mb-4 text-center
              w-[300px]
              mx-auto
              before:relative before:top-[15px] before:left-[12%] before:block before:content-[""] before:bg-black before:w-[90px] before:h-[4px]  
              after:relative after:top-[-12px] after:left-[59%] after:block after:content-[""] after:bg-black after:w-[90px] after:h-[4px]
            '>
              <i className="fa-solid fa-star"  ></i>
            </p>
              <div onClick={()=>hamada( )} className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-[90%] mx-auto'>
                <div className='relative'>
                  <img src={logo1} className='rounded-2xl' alt="" />
                  <span className='absolute top-0 left-0 right-0 bottom-0 items-center flex justify-center text-9xl text-white bg-teal-500 rounded-2xl opacity-0 transition hover:opacity-85  hover:duration-700 '>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
                <div className='relative'>
                  <img src={logo2} className='rounded-2xl' alt="" />
                  <span className='absolute top-0 left-0 right-0 bottom-0 items-center flex justify-center text-9xl text-white bg-teal-500 rounded-2xl opacity-0 transition hover:opacity-85  hover:duration-700 '>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
                <div className='relative'>
                  <img src={logo3} className='rounded-2xl' alt="" />
                  <span className='absolute top-0 left-0 right-0 bottom-0 items-center flex justify-center text-9xl text-white bg-teal-500 rounded-2xl opacity-0 transition hover:opacity-85  hover:duration-700 '>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
                <div className='relative'>
                  <img src={logo1} className='rounded-2xl' alt="" />
                  <span className='absolute top-0 left-0 right-0 bottom-0 items-center flex justify-center text-9xl text-white bg-teal-500 rounded-2xl opacity-0 transition hover:opacity-85  hover:duration-700 '>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
                <div className='relative'>
                  <img src={logo2} className='rounded-2xl' alt="" />
                  <span className='absolute top-0 left-0 right-0 bottom-0 items-center flex justify-center text-9xl text-white bg-teal-500 rounded-2xl opacity-0 transition hover:opacity-85  hover:duration-700 '>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
                <div className='relative'>
                  <img src={logo3} className='rounded-2xl' alt="" />
                  <span className='absolute z-0 top-0 left-0 right-0 bottom-0 items-center flex justify-center text-9xl text-white bg-teal-500 rounded-2xl opacity-0 transition hover:opacity-85  hover:duration-700 '>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
              </div>  
              
              <div onClick={()=>medo()} className={` bg-opacity-75  justify-center items-center bg-slate-300  fixed top-0 left-0 bottom-0 right-0 ${coant} `}>
                <div className={`w-[80%] rounded-xl overflow-hidden`}>
                  <img src={logo1} alt="" />
                </div>
              </div>
      </section>      
    </>
  )
}
