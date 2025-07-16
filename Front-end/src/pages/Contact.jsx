import React from 'react'
import { assets } from "../assets/assets_frontend/assets"
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Contact <span className='text-grey-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm'>
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />


        {/* Right */}
        <div className='flex flex-col justify-center items-start gap-6 md:w-2/4 text-[20pxs] text-gray-600 '>
          <b className='text-gray-500 text-2xl'>Our OFFICE</b>
          <p>54709 Willms Station ,<br />Suite 350, Washington, USA</p>
          <p>Tel: (415) 555‑0132<br />Email: jangodev@gmail.com</p>
          <b className='text-gray-500 text-lg'>Careers at PRESCRIPTO</b>
          <p>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore More</button>
        </div>
      </div>
    </div>
  )
}

export default Contact