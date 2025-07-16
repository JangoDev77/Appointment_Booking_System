import express from 'express'
import cors from "cors"
import 'dotenv/config'
import ConnectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'

//App config
const app = express()
const port = process.env.port || 400
ConnectDB()
connectCloudinary()

//Middlewears
app.use(express.json())
app.use(cors())

//Api endpoints

app.use('/api/admin',adminRouter)

app.get('/',(req,res)=>{
 res.send("api is working")
})

app.listen(port,()=>{
    console.log("server started");
    
})