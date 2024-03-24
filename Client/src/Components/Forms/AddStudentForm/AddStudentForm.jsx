import React, { useState } from 'react'

const AddStudentForm = ({ collectingData }) => {
    /*State for input template*/
    const [studentData, setStudentData] = useState({
        image: null,
        name: '',
        fatherName: '',
        dob: '',
        course: '',
        startingYear: null,
        endingYear: null,
        enrollment: null,
        address: '',
        phone: null,
    })

    const handleChange = (e) => {
        e.preventDefault();

        setStudentData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleClickAddStudent = async (event) => {
        // Prevent the default form submission
        await event.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/v1/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...studentData })
            });
            const data = await response.json();
            setStudentData({ ...studentData });
            // console.log("Data : ", data);
            await collectingData();
        }

        catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='flex flex-col justify-center items-center w-[50vw] h-[90vh] gap-y-2'>
            <h2 className='text-[#000080] text-[1.5rem]'>Add Student Details</h2>
            <form
                action=""
                method='post'
                className='flex justify-center items-center py-[8vh] h-fit gap-y-[5vh] w-[90%] border-[#000080] border-2 rounded-xl px-[1vw]'
            >
                <ul className='flex flex-col justify-start items-center w-[100%] h-[100%] gap-y-[3vh] pr-3'>
                    <li className='flex justify-start items-center w-[100%] gap-x-[1vw]'>
                        <label htmlFor="image" className='text-[#000080] text-[1rem]'>Image</label>
                        <input
                            type="file"
                            accept='image/*'
                            name="image"
                            key="image"
                            id="image"
                            placeholder='Image'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md text-black'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-start items-center w-[100%] gap-x-[1vw]'>
                        <label htmlFor="name" className='text-[#000080] text-[1rem]'>Name</label>
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
                    <li className='flex justify-start items-center w-[100%] gap-x-[1vw]'>
                        <label htmlFor="fatherName" className='text-[#000080] text-[1rem] text-nowrap'>Father Name</label>
                        <input
                            type="text"
                            name="fatherName"
                            key="fatherName"
                            id="fatherName"
                            placeholder='Father Name'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-start items-center w-[100%] gap-x-[1vw]'>
                        <label htmlFor="dob" className='text-[#000080] text-[1rem]'>DOB</label>
                        <input
                            type="date"
                            name="dob"
                            key="dob"
                            id="dob"
                            placeholder='Date of Birth'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-start items-center w-[100%] gap-x-[1vw]'>
                        <label htmlFor="course" className='text-[#000080] text-[1rem]'>Course</label>
                        <input
                            type="text"
                            name="course"
                            key="course"
                            id="course"
                            placeholder='Course'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-start items-center w-[100%] gap-x-[1vw]'>
                        <label htmlFor="startingYear" className='text-[#000080] text-[1rem] text-nowrap'>Starting Year</label>
                        <input
                            type='number'
                            name="startingYear"
                            key="startingYear"
                            id="startingYear"
                            placeholder='Starting Year'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-start items-center w-[100%] gap-x-[1vw]'>
                        <label htmlFor="endingYear" className='text-[#000080] text-[1rem] text-nowrap'>Ending Year</label>
                        <input
                            type="number"
                            name="endingYear"
                            key="endingYear"
                            id="endingYear"
                            placeholder='Ending Year'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                </ul>
                <ul className='flex flex-col justify-start items-center w-[100%] h-[100%] gap-y-[3vh] pr-3'>
                    <li className='flex justify-start items-center w-[100%] gap-x-[1vw]'>
                        <label htmlFor="enrollment" className='text-[#000080] text-[1rem] text-nowrap'>Enroll. Number</label>
                        <input
                            type="number"
                            name="enrollment"
                            key="enrollment"
                            id="enrollment"
                            placeholder='Enrollment Number'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-start items-center w-[100%] gap-x-[1vw]'>
                        <label htmlFor="address" className='text-[#000080] text-[1rem]'>Address</label>
                        <input
                            type="text"
                            name="address"
                            key="address"
                            id="address"
                            placeholder='Address'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-start items-center w-[100%] gap-x-[1vw]'>
                        <label htmlFor="phone" className='text-[#000080] text-[1rem] text-nowrap'>Phone No.</label>
                        <input
                            type="number"
                            name="phone"
                            key="phone"
                            id="phone"
                            placeholder='Phone Number'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <button type='submit' className='flex justify-center items-center bg-[#000080] px-[2vw] py-[1vh] text-white rounded-md hover:border-white hover:border-[0.1vh]' onClick={handleClickAddStudent}>Add</button>
                </ul>
            </form>
        </div>
    )
}

export default AddStudentForm
