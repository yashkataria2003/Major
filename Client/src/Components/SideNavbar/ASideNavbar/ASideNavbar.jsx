import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ASideNavbar.css'

const ASideNavbar = () => {
    
    return (
        <div className='flex flex-col justify-start items-center w-[20vw] h-[90vh] bg-[#000000ac] gap-y-[1vh] py-[1vh] px-[1vw] fixed z-10'>
            <Link to="teachers" className='text-center text-white text-[1rem] w-[100%] hover:bg-white hover:text-black py-[0.5vh] rounded-lg'>Teachers</Link>
            <Link to="students" className='text-center text-white text-[1rem] w-[100%] hover:bg-white hover:text-black py-[0.5vh] rounded-lg'>Students</Link>
            <Link to="notices" className='text-center text-white text-[1rem] w-[100%] hover:bg-white hover:text-black py-[0.5vh] rounded-lg' >Notice</Link>
        </div>
    )
}

export default ASideNavbar
