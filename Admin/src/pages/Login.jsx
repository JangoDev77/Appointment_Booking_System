import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const Login = () => {

    const [state,setstate] = useState('Admin')

    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const {setatoken,Backendurl} = useContext(AdminContext)

    const onSubmithandler = async (event) => {
      event.preventDefault();
    
      try {
        if (state === "Admin") {
          const { data } = await axios.post(Backendurl + '/api/admin/login', { email, password });
          console.log("API Response:", data);
    
          if (data.success) {
            localStorage.setItem('aToken', data.token);
            setatoken(data.token);
            console.log("Token stored in context:", data.token);
          } else {
            toast.error(data.message);
          }
        } else {
          // ...
        }
      } catch (error) {
        console.error("Login Error:", error);
      }
    };

  return (
    <form onSubmit={onSubmithandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg'>
            <p className='text-2xl font-semibold m-auto'><span className='text-[#5f6fff]'>{state}</span> login</p>

            <div className='w-full'>
                <p>Email</p>
                <input onChange={(e)=>setemail(e.target.value)} value={email} className='border border-[#dadada] rounded w-full p-2 mt-1' type="email" required />
            </div>

            <div className='w-full'>
                <p>Password</p>
                <input onChange={(e)=>setpassword(e.target.value)} value={password} className='border border-[#dadada] rounded w-full p-2 mt-1' type="password" required />
            </div>

            <button className='text-white w-full bg-[#5f6fff] py-2 rounded-md text-base'>Login</button>
            
            {
                state === 'Admin'?
                <p>Doctor Login ? <span className='text-[#5f6fff] underline cursor-pointer' onClick={()=>setstate('Doctor')}>Here</span></p>
                :
                <p>Admin Login ? <span className='text-[#5f6fff] underline cursor-pointer' onClick={()=>setstate('Admin')}>Here</span> </p>
            }

        </div>
    </form>
  )
}

export default Login