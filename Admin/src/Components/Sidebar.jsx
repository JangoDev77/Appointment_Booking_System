import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

  const {atoken} = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white '>
      {
        atoken && <ul className='text-[#515151] mt-5'>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#f2f3ff] border-r-4 border-[#5f6fff]':''}`} to={"/admin-dashboard"}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink to={"/all-appointments"} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#f2f3ff] border-r-4 border-[#5f6fff]':''}`}>
            <img src={assets.appointment_icon} alt="" />
            <p>Appointment</p>
          </NavLink>

          <NavLink to={"/add-doctors"} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#f2f3ff] border-r-4 border-[#5f6fff]':''}`}>
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink to={"/doctors-list"} className={({isActive})=> `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#f2f3ff] border-r-4 border-[#5f6fff]':''}`}>
            <img src={assets.people_icon} alt="" />
            <p>Doctors List</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar