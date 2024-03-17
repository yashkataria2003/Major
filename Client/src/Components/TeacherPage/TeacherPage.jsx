import React from 'react'
import TSideNavbar from '../SideNavbar/TSideNavbar/TSideNavbar'
import TeachersPage from '../AdminWindows/TeachersPage/TeachersPage'
import { Routes, Route } from 'react-router-dom'

const TeacherPage = () => {
    return (
        <div className='flex justify-start items-center h-[90vh] w-[100vw]'>
            <div className='relative z-10 w-[20vw] h-[90vh]'>
                <TSideNavbar />
            </div>
            <div className='w-[80vw] h-[90vh]'>
                
            </div>
        </div>
    )
}

export default TeacherPage
