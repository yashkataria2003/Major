import React from 'react'
import { Link } from 'react-router-dom'

const TSideNavbar = () => {
  return (
    <div className='flex flex-col justify-start items-center w-[20vw] h-[90vh] bg-[#000000ac] gap-y-[1vh] py-[1vh] px-[1vw] fixed z-10 overflow-y-auto'>
        <Link to="notice" className='text-center text-white text-[1rem] w-[100%] hover:bg-white hover:text-black py-[0.5vh] rounded-lg'>Notice</Link>
        <Link to="assignment" className='text-center text-white text-[1rem] w-[100%] hover:bg-white hover:text-black py-[0.5vh] rounded-lg'>Assignment</Link>
        <Link to="ppt" className='text-center text-white text-[1rem] w-[100%] hover:bg-white hover:text-black py-[0.5vh] rounded-lg'>Presentation</Link>
        <Link to="result" className='text-center text-white text-[1rem] w-[100%] hover:bg-white hover:text-black py-[0.5vh] rounded-lg'>Result</Link>
        <Link to="attendance" className='text-center text-white text-[1rem] w-[100%] hover:bg-white hover:text-black py-[0.5vh] rounded-lg'>Attendance</Link>
    </div>
  )
}

export default TSideNavbar
