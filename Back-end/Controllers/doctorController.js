import doctorModel from "../models/doctorModel.js";

const changeAvailablity = async (req,res) => {

    try {
 
        const {docId}   = req.body;
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId,{available: !docData.isAvailable });
        res.json({sucess:true, message: "Doctor's availability changed "});
        
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: "Internal server error" });
        
    }
    
}

export {changeAvailablity}