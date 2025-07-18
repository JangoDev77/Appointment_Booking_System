import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/Appcontext'

const Topdoctors = () => {
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
      <p className='w-1/3 text-sm text-center'>Simple Browse from our extensive list of Trusted Doctors</p>

      <div className='w-full grid grid-cols-auto-fill-200 gap-4 pt-5 gap-y-6 px-3 sm:px-0' >
        {doctors.slice(0, 10).map((items, index) => (
          <div onClick={()=>{navigate(`/appointment/${items._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            <img className='bg-blue-50' src={items.image} alt="" />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{items.name}</p>
              <p className='text-gray-900 text-sm'>{items.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  )
}

export default Topdoctors