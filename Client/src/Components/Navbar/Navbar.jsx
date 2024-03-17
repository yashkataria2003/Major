import React, { useState } from 'react'
import iitm_logo_white from '../../assets/iitm_logo_white.png'
import '../Navbar/Navbar.css'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('')
  const [loginAsText, setLoginAsText] = useState(null)

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setLoginAsText(selectedValue);
    if (selectedValue === "admin") {
      navigate('/admin/login')
    }
    else if (selectedValue === "teacher") {
      navigate('/teacher/login')
    }
    else if (selectedValue === "student") {
      navigate('/student')
    }
  }

  return (
    <header className='flex justify-between items-center h-[10vh] w-[100vw] bg-[#000080] px-[3vw] fixed z-10'>
      <img src={iitm_logo_white} alt="logo" className='h-[20vh] hover:cursor-pointer' onClick={() => navigate('/')} />
      <h2 className='text-white text-[2rem] IITMERPSystem'>IITM ERP System</h2>
      {
        !loginAsText ? (
        <select className='flex justify-center items-center px-[1vw] py-[0.7vh] rounded-lg hover:cursor-pointer' value={selectedOption} onChange={handleSelectChange}>
          <option value="" disabled>Login As ...</option>
          <option value="admin" key="admin" id="admin" className='flex justify-center items-center text-center'>Admin</option>
          <option value="teacher" key="teacher" id="teacher" className='flex justify-center items-center text-center'>Teacher</option>
          <option value="student" key="student" id="student" className='flex justify-center items-center text-center'>Student</option>
        </select>
        ) : (<p className='text-white text-[1.8rem] loginAsText'>{loginAsText}</p>)
      }
    </header>
  )
}

export default Navbar
