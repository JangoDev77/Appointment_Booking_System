import express from 'express' 
import { addDoctor,allDoctors,loginAdmin} from '../Controllers/adminController.js'
import upload from '../middlewear/multer.js'
import authAdmin from '../middlewear/authAdmin.js'
import { changeAvailablity } from '../Controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors',authAdmin,allDoctors)
adminRouter.post('/change-availablity',authAdmin,changeAvailablity)

export default adminRouter