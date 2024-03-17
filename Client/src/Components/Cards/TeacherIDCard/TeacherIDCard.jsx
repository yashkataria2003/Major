import React from 'react'
import iitm_logo_white from '../../../assets/iitm_logo_white.png';

const TeacherIDCard = ({data}) => {
  const { _id, image, name, department, designation, experience, email } = data;

    return (
        <div className='flex flex-col justify-center items-center h-[12.5rem] w-[25rem] rounded-xl p-1'>
            <div className='flex flex-col justify-center items-center h-[26%] w-[100%] bg-[#900808] rounded-t-xl py-1'>
                <div className='flex justify-center items-center w-[100%] h-[40%]'>
                    <p className='text-white text-[0.75rem]'>INSTITUTE OF INNOVATION IN TECHNOLOGY AND MANAGEMENT</p>
                </div>
                <div className='flex justify-center items-center w-[100%] h-[60%] gap-x-[1vw]'>
                    <img src={iitm_logo_white} alt="iitm white" className='h-[10vh]' />
                    <p className='text-white text-[0.7rem]'>Affilated to the GGS Indraprastha University, New Delhi</p>
                </div>
            </div>
            <div className='flex justify-center items-center h-[75%] w-[100%] bg-[#9d1212] rounded-b-xl border-t-[0.1vh] border-t-white'>
                <div className='flex justify-center items-center w-[25%] h-[100%]'>
                    <p>Image</p>
                </div>
                <ul className='flex flex-col justify-start items-center w-[75%] h-[100%] py-[1vh]'>
                    <li className='flex justify-start items-center w-[100%] text-nowrap'>
                        <p className='w-[32%] text-white text-[0.9rem]'>Name</p>
                        <p className='w-[65%] text-white text-[0.9rem]'>: {name}</p>
                    </li>
                    <li className='flex justify-start items-center w-[100%] text-nowrap'>
                        <p className='w-[32%] text-white text-[0.9rem]'>Department</p>
                        <p className='w-[65%] text-white text-[0.9rem]'>: {department}</p>
                    </li>
                    <li className='flex justify-start items-center w-[100%] text-nowrap'>
                        <p className='w-[32%] text-white text-[0.9rem]'>Designation</p>
                        <p className='w-[65%] text-white text-[0.9rem]'>: {designation}</p>
                    </li>
                    <li className='flex justify-start items-center w-[100%] text-nowrap'>
                        <p className='w-[32%] text-white text-[0.9rem]'>Experience</p>
                        <p className='w-[65%] text-white text-[0.9rem]'>: {experience}</p>
                    </li>
                    <li className='flex justify-start items-center w-[100%] text-nowrap'>
                        <p className='w-[32%] text-white text-[0.9rem]'>E-Mail</p>
                        <p className='w-[65%] text-white text-[0.9rem]'>: {email}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TeacherIDCard
