import React from 'react'


export default function About() {
  return (
    <section className=' bg-teal-500 h-screen flex justify-center items-center'>
          <div className='text-center text-white '>
            <h2 className='text-5xl font-bold mt-16 mb-5'>ABOUT COMPONENT</h2>
            <div className='
              w-[300px]
              mx-auto
              mb-3
              before:relative before:top-[15px] before:left-[12%] before:block before:content-[""] before:bg-white before:w-[90px] before:h-[4px]  
              after:relative after:top-[-12px] after:left-[59%] after:block after:content-[""] after:bg-white after:w-[90px] after:h-[4px]
            '>
            <i className="fa-solid fa-star"></i>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-[75%] mx-auto text-left mt-5'>
              <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
              <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
          </div>
        </section>
  )
}
