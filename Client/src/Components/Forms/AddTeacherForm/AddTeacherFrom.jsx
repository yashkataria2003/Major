import React, { useEffect, useState } from 'react'
import eye_logo_black from '../../../assets/eye_logo_black.svg'

const AddTeacherFrom = ({ collectingData }) => {
    /*State for input template*/
    const [teacherData, setTeacherData] = useState({
        image: null,
        name: '',
        department: '',
        designation: '',
        experience: null,
        email: '',
        password: '',
    })

    /*State for password visibility*/
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setTeacherData((prevState) => ({
                ...prevState,
                image: e.target.files[0] // Update image with the selected file
            }));
        } else {
            setTeacherData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }));
        }
    }

    // Show password and eye icon opacity 
    const handleShowPasswordClick = () => {
        // console.log('handleEyeClick is on');
        var x = document.getElementById("password");
        x.type === "password" ? x.type = "text" : x.type = "password"
        handleEyeClick()
    }
    const handleEyeClick = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    // Add teachers data into database
    const handleClickAddTeacher = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('image', teacherData.image);
            formData.append('name', teacherData.name);
            formData.append('department', teacherData.department);
            formData.append('designation', teacherData.designation);
            formData.append('experience', teacherData.experience);
            formData.append('email', teacherData.email);
            formData.append('password', teacherData.password);

            const response = await fetch('http://localhost:4000/api/v1/teachers', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log("Data:", data);
            collectingData();
        } catch (error) {
            console.error("Error:", error);
        }
    };




    return (
        <div className='flex flex-col justify-center items-center w-[40vw] h-[90vh] gap-y-2'>
            <h2 className='text-[#000080] text-[1.5rem]'>Add Teacher Details</h2>
            <form
                action=""
                method='post'
                className='flex flex-col justify-center items-center py-[5vh] h-fit gap-y-[5vh] w-[80%] border-[#000080] border-2 rounded-xl'
                encType="multipart/form-data"
            >
                <ul className='flex flex-col justify-center items-center w-[100%] h-[100%] gap-y-[3vh] pr-3'>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="image" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>Image</label>
                        <input
                            type="file"
                            accept='image/*'
                            name="image"
                            key="image"
                            id="image"
                            placeholder='Image'
                            className='flex justify-start items-center px-[1vw] w-[75%] rounded-md text-black'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="name" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>Name</label>
                        <input
                            type="text"
                            name="name"
                            key="name"
                            id="name"
                            placeholder='Name'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="department" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>Department</label>
                        <input
                            type="text"
                            name="department"
                            key="department"
                            id="department"
                            placeholder='Department'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="designation" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>Designation</label>
                        <input
                            type="text"
                            name="designation"
                            key="designation"
                            id="designation"
                            placeholder='Designation'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="experience" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>Experience</label>
                        <input
                            type="number"
                            name="experience"
                            key="experience"
                            id="experience"
                            placeholder='Experience'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="email" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>E-Mail</label>
                        <input
                            type='email'
                            name="email"
                            key="email"
                            id="email"
                            placeholder='E-Mail'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="password" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Enter your password'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                        <div className={`flex justify-center items-center rounded-full ${isPasswordVisible ? 'opacity-100' : 'opacity-50'} absolute`} onClick={handleShowPasswordClick}>
                            <img src={eye_logo_black} alt="Show Password" className='h-[4.5vh] hover:cursor-pointer' />
                        </div>
                    </li>
                </ul>
                <button type='submit' className='flex justify-center items-center bg-[#000080] px-[2vw] py-[1vh] text-white rounded-md hover:border-white hover:border-[0.1vh]' onClick={handleClickAddTeacher}>Add</button>
            </form>
        </div>
    )
}

export default AddTeacherFrom
