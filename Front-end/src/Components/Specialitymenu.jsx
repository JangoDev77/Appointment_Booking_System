import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
const Specialitymenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
          <h1 className='text-3xl font-medium '>Find by Speciality</h1>
           <p className='sm:w-1/3 text-center text-sm'>Simple Browse through ourlist of trusted doctors,Schedule your appointment hassle free</p>
        <div className='flex flex-col sm:flex-row sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
           {
           specialityData.map((item, index) => (
            <div key={index}>
              <a onClick={()=>scrollTo(0,0)}href={`/doctors/${item.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
                 <img  className='w-16 sm:w-24 mb-2'src={item.image} alt="" />
                <p>{item.speciality}</p>
              </a>
            </div>
          ))
           }
        </div>
    </div>
  )
}

export default Specialitymenu