import studentModel from '../models/studentSchema.js'

// Add Student
export const addStudent = async(req, res)=> {
    try {
        // if (!req.file) {
        //     return res.status(400).json({ success: false, message: 'Student image not uploaded' });
        // }

        const { name, fatherName, dob, course, startingYear, endingYear, enrollment, address, phone} = await req.body;

        const image = await req.file.filename; // Get the filename from req.file
        
        const student = await studentModel.create({
            image,
            name,
            fatherName,
            dob,
            course,
            startingYear,
            endingYear,
            enrollment,
            address,
            phone,
        })

        await res.status(200).json({success:true, data: student, message:"Student's data Saved"})
    } 
    
    catch (error) {
        console.log(error);
        await res.status(500).json({ success: false, message: 'Unable to create a student, please try again', error: error.message });
    }
}

// Remove Student
export const removeStudent = async(req, res) => {
    try {
        const _id = await req.params._id;
        // console.log(_id)
        await studentModel.findByIdAndDelete(_id)

        await res.status(200).json({success:"true", messege:"Student's data deleted Successfully"})
    } 
    
    catch (error) {
        console.log(error);
        await res.status(500).json({success: false, message:"Student's data Deletion Failed"});
    }
}

// Update Student
export const updateStudent = async(req, res) => {
    const { image, name, fatherName, dob, course, startingYear, endingYear, enrollment, address, phone} = await req.body;
    const _id = await req.params._id;

    try {
        const updatedStudent = await studentModel.findByIdAndUpdate(_id, {
            image,
            name,
            fatherName,
            dob,
            course,
            startingYear,
            endingYear,
            enrollment,
            address,
            phone
        }, { new: true })

        res.status(200).json({ success: true, data: updatedStudent, message: "Student's data Updated Successfully" });
    } 
    
    catch (error) {
        console.log(error);
        await res.status(500).json({success: false, message:"Student's data Updation Failed"});
    }
}

// Show All Students
export const showStudent = async(req, res) => {
    try {
        const students = await studentModel.find({});
        res.status(200).json({success: true, data: students, message: "All student's data fetched successfully"})
    } 
    
    catch (error) {
        console.log(error);
        await res.status(500).json({success: false, message:'Fetching students failed, please try'});
    }
}