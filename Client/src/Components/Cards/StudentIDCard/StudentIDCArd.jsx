import React from 'react'
import iitm_logo_white from '../../../assets/iitm_logo_white.png'
import edit_button from '../../../assets/edit_button.svg'

const StudentIDCArd = ({data}) => {
    const { _id, image, name, fatherName, dob, course, startingYear, endingYear, enrollment, address, phone } = data;

    const hanldeEditClick = () => {
        
    }

    return (
        <div className='flex flex-col justify-center items-center h-[14rem] w-[25rem] rounded-xl p-1'>
            <div className='flex flex-col justify-center items-center h-[26%] w-[100%] bg-[#e46f4c] rounded-t-xl py-1'>
                <div className='flex justify-center items-center w-[100%] h-[40%]'>
                    <p className='text-white text-[0.75rem]'>INSTITUTE OF INNOVATION IN TECHNOLOGY AND MANAGEMENT</p>
                </div>
                <div className='flex justify-center items-center w-[100%] h-[60%] gap-x-[1vw]'>
                    <img src={iitm_logo_white} alt="iitm white" className='h-[10vh]' />
                    <p className='text-white text-[0.7rem]'>Affilated to the GGS Indraprastha University, New Delhi</p>
                </div>
            </div>
            <div className='flex justify-center items-center h-[75%] w-[100%]  rounded-b-xl border-t-[0.4vh] bg-[#5aa093] border-t-[#153077]'>
                <div className='flex justify-center items-center h-[100%] w-[90%]'>
                    <div className='flex justify-center items-center w-[35%] h-[100%]'>
                        <p>Image</p>
                    </div>
                    <ul className='flex flex-col justify-start items-center w-[65%] h-[100%] py-[1vh]'>
                        <li className='flex justify-start items-center w-[100%] text-nowrap'>
                            <p className='w-[50%] text-black text-[0.9rem]'>Name</p>
                            <p className='w-[50%] text-black text-[0.9rem]'>: {name}</p>
                        </li>
                        <li className='flex justify-start items-center w-[100%] text-nowrap'>
                            <p className='w-[50%] text-black text-[0.9rem]'>Father's Name</p>
                            <p className='w-[50%] text-black text-[0.9rem]'>: {fatherName}</p>
                        </li>
                        <li className='flex justify-start items-center w-[100%] text-nowrap'>
                            <p className='w-[50%] text-black text-[0.9rem]'>DOB</p>
                            <p className='w-[50%] text-black text-[0.9rem]'>: {dob.split('T')[0]}</p>
                        </li>
                        <div className='flex justify-between items-center w-[100%]'>
                            <li className='flex justify-start items-center w-[100%] text-nowrap'>
                                <p className='w-[40%] text-black text-[0.9rem]'>Course</p>
                                <p className='w-[60%] text-black text-[0.9rem]'>: {course}</p>
                            </li>
                            <li className='flex justify-start items-center w-[100%] text-nowrap'>
                                <p className='w-[40%] text-black text-[0.9rem]'>Batch</p>
                                <p className='w-[60%] text-black text-[0.9rem]'>: {`${startingYear}-${endingYear - 2000}`}</p>
                            </li>
                        </div>
                        <li className='flex justify-start items-center w-[100%] text-nowrap'>
                            <p className='w-[50%] text-black text-[0.9rem]'>Enrollment</p>
                            <p className='w-[50%] text-black text-[0.9rem]'>: {enrollment}</p>
                        </li>
                        <li className='flex justify-start items-center w-[100%] text-nowrap'>
                            <p className='w-[50%] text-black text-[0.9rem]'>Address</p>
                            <p className='w-[50%] text-black text-[0.9rem]'>: {address}</p>
                        </li>
                        <li className='flex justify-start items-center w-[100%] text-nowrap'>
                            <p className='w-[50%] text-black text-[0.9rem]'>Phone</p>
                            <p className='w-[50%] text-black text-[0.9rem]'>: {phone}</p>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col justify-end items-center h-[100%] w-[10%] py-4'>
                    <img src={edit_button} alt="edit" className='h-[1rem] hover:scale-105 hover:cursor-pointer' onClick={hanldeEditClick} />
                </div>
            </div>
        </div>
    )
}

export default StudentIDCArd
