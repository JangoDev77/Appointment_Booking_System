import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [atoken, setatoken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):"")
    const Backendurl =import.meta.env.VITE_BACKEND_URL
    const [doctors,setdoctors]=useState([])
    const getAllDoctors =async (params) => {
        try {

            const {data} = await axios.post(`${Backendurl}/api/admin/all-doctors`,{},{
                headers: { Authorization: `Bearer ${atoken}` },
                params: params
            })

            if(data.success){
                setdoctors(data.doctors)
                console.log(data.doctors)
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }

    }

    const changeAvailablity = async (docId) => {
        try {
            
            const {data} =await axios.post(`${Backendurl}/api/admin/change-availablity`,{docId},{
                headers: { Authorization: `Bearer ${atoken}` }
            })

            if(data.success){
                toast.success(data.message)
                getAllDoctors()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const value = {
        atoken, setatoken,
        Backendurl,doctors,
        getAllDoctors,changeAvailablity
    }

    
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider