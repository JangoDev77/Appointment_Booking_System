// adminController.js (Backend)
import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from "cloudinary";
import doctorModel from '../models/doctorModel.js';
import jwt from "jsonwebtoken";

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experiance, about, fees, address } = req.body;
        const imageFile = req.file;

        if (!name || !email || !password || !speciality || !degree || !experiance || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experiance,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        };

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        return res.json({ success: true, message: "Doctor Added" });
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.json({ success: true, token });
        } else {
            return res.json({ success: false, message: "invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
};


// api for getting all the doctors for admin panel

const allDoctors = async (req,res) => {
    try {

        const doctors = await doctorModel.find({}).select('-password');
        res.json({ success: true, doctors });
        
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
        
    }
}
export { addDoctor, loginAdmin ,allDoctors};