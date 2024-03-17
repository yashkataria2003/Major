import teacherModel from "../models/teacherSchema.js";

// Add Teacher
export const addTeacher = async(req, res) => {
    try {
        
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }
        
        const { name, department, designation, experience, email, password } = await req.body;
        const image = req.file.filename; // Get the filename from req.file
        
        const teacher = await teacherModel.create({
            image,
            name,
            department, 
            designation, 
            experience,
            email, 
            password,
        })

        await res.status(200).json({success:true, data: teacher, message:"Teacher's data Saved"})
    } 
    
    catch (error) {
        console.log(error);
        await res.status(500).json({ success: false, message: 'Unable to create a teacher, please try again', error: error.message });
    }
}

// Remove Teacher
export const removeTeacher = async(req, res) => {
    try {
        const _id = await req.params._id;
        // console.log(_id)
        await teacherModel.findByIdAndDelete(_id)

        await res.status(200).json({success:"true", messege:"Teacher's data deleted Successfully"})
    } 
    
    catch (error) {
        console.log(error);
        await res.status(500).json({success: false, message:"Teacher's data Deletion Failed"});
    }
}

// Update Teacher
export const updateTeacher = async(req, res) => {
    const { image, name, department, designation, experience, email, password } = await req.body;
    const _id = await req.params._id;

    try {
        const updatedTeacher = await teacherModel.findByIdAndUpdate(_id, {
            image,
            name,
            department, 
            designation, 
            experience,
            email, 
            password
        }, { new: true })

        res.status(200).json({ success: true, data: updatedTeacher, message: "Teacher's data Updated Successfully" });
    } 
    
    catch (error) {
        console.log(error);
        await res.status(500).json({success: false, message:"Teacher's data Updation Failed"});
    }
}

// Show All Teachers
export const showTeachers = async(req, res) => {
    try {
        const teachers = await teacherModel.find({});
        res.status(200).json({success: true, data: teachers, message: "All Teacher's data fetched successfully"})
    } 
    
    catch (error) {
        console.log(error);
        await res.status(500).json({success: false, message:'Fetching teachers failed, please try'});
    }
}
