import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Authentication/Login'
import AdminPage from './Components/AdminPage/AdminPage'
import TeacherPage from './Components/TeacherPage/TeacherPage'

const App = () => {
  return (
    <div className=''>
      <div className='h-[10vh] relative z-10'>
          <Navbar />
      </div>
      <div className='h-[90vh]'>
        <Routes>
          <Route path='/' element={<Home />}/>

          <Route path='/admin/login' element={<Login loginAs='Admin'/>}/>
          <Route path='/teacher/login' element={<Login loginAs='Teacher'/>}/>

          <Route path='/admin/*' element={<AdminPage/>}/>
          <Route path='/teacher/*' element={<TeacherPage/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

