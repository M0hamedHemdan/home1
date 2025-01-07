import React from 'react'
// import style from './footar.module.css'

export default function Footar() {
  return (
    <footer>
      <div className='bg-gray-700'>
<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-16">
    <div className='text-white text-center py-5 md:py-0'>
        <h2 className='text-2xl font-semibold my-2'>LOCATION</h2>
        <span className='my-2 block'>2215 John Daniel Drive</span>
        <p>Clark, MO 65243</p>
    </div>
    <div className='text-white text-center py-5 md:py-0'>
        <h2 className='text-2xl font-semibold my-2'>AROUND THE WEB</h2>
        <div className='grid grid-cols-2 grid-cols-4 gap-4 w-64 mx-auto'>
          <div className='border-2 border-slate-200 w-10 h-10 rounded-full justify-center items-center flex'>
            <span className=''>
              <i className="fa-brands fa-facebook"></i>
            </span>
          </div>
          <div className='border-2 border-slate-200 w-10 h-10 rounded-full justify-center items-center flex'>
            <span>
            <i className="fa-brands fa-twitter"></i>
            </span>
          </div>
          <div className='border-2 border-slate-200 w-10 h-10 rounded-full justify-center items-center flex'>
            <span>
            <i className="fa-brands fa-linkedin"></i>
            </span>
          </div>
          <div className='border-2 border-slate-200 w-10 h-10 rounded-full justify-center items-center flex'>
            <span>
            <i className="fa-solid fa-globe"></i>
            </span>
          </div>
        </div>
    </div>
    <div className='text-white text-center py-5 md:py-0'>
        <h2 className='text-2xl font-semibold my-2'>ABOUT FREELANCER</h2>
        <span className='my-2 block w-60 mx-auto md:w-auto'>Freelance is a free to use, licensed Bootstrap theme created by Route</span>
        
    </div>
    
</div>
      </div>
      <div className="bg-slate-800 border-gray-200 py-6 text-center md:py-5">
      <p className='text-white'>Copyright &copy; Your Website 2021</p>
      </div>
    </footer>
  )
}
