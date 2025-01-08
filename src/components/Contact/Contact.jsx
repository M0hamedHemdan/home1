import React from 'react'


export default function Contact() {

  



  return (
    <section>
      <div className=' text-left mt-36  justify-center items-center mb-16'>
            <h2 className='text-4xl font-bold text-center mb-5'>PORTFOLIO COMPONENT</h2>
            <p className='mb-4 text-center
              w-[300px]
              mx-auto
              before:relative before:top-[15px] before:left-[12%] before:block before:content-[""] before:bg-black before:w-[90px] before:h-[4px]  
              after:relative after:top-[-12px] after:left-[59%] after:block after:content-[""] after:bg-black after:w-[90px] after:h-[4px]
            '>
              <i className="fa-solid fa-star"  ></i>
            </p>
            </div>

            <form className="max-w-md mx-5 sm:mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_email" id="floating_email" className="block p-4 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-1xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number" name="floating_email" id="floating_email" className="block p-4 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-1xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block p-4 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder=" " required />
                    <label htmlFor="floating_email" className=" peer-focus:font-medium absolute text-1xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="floating_email" id="floating_email" className="block p-4 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-1xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
                </div>

                <button type="submit" className="text-white bg-teal-500 font-medium rounded-lg text-1xl w-full sm:w-auto px-5 py-2 text-center mb-12 mt-3">send Message</button>
            </form>
            </section>
             



      
    
  )
}
