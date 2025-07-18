import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>

            <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* Left Section */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, voluptatibus voluptatem! Aliquid ipsa suscipit in cupiditate? Ex delectus sequi pariatur iure, molestias unde voluptas a vero dicta. Voluptas recusandae iure quae dignissimos voluptatibus?</p>
                </div>

                {/* Center Section */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <p className='text-xl font-medium mb-5' >Get in Touch</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-123-345-8976</li>
                        <li>JangoDev@gmail.com</li>
                    </ul>
                </div>
            </div>
           
            {/*  CopyRight Text */}
            <div>
                  <hr/>
                  <p className='py-5 text-sm text-center'>CopyRight 2024 &copy; Prescripto All Right Reserved</p>
            </div>

        </div>
    )
}

export default Footer