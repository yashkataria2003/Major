import React, { useState } from 'react'
// import './Login.css'
import { useNavigate } from 'react-router-dom';
import eye_logo_black from '../../assets/eye_logo_black.svg'

const Login = ({ loginAs }) => {
    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [dataInput, setDataInput] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        e.preventDefault();

        setDataInput((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmitClick = () => {
        loginAs === 'Teacher' && navigate('/teacher');
        loginAs === 'Admin' && navigate('/admin');
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

    return (
        <main className='flex flex-col justify-center items-center w-[100vw] h-[90vh] gap-x-[1vw] gap-y-[2vh]'>
            <form action="" method='post' className='flex flex-col justify-start items-center py-[10vh] h-fit gap-y-[5vh] w-[30%] border-[#000080] border-2 rounded-xl '>
                <h1 className='text-[#000080] text-[2.8rem]'>
                    Login as {loginAs}
                </h1>
                <ul className='flex flex-col justify-center items-center w-[100%] h-[100%] gap-y-[3vh] pr-3'>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="email" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>E-Mail</label>
                        <input
                            type="mail"
                            name="email"
                            id="email"
                            placeholder='Enter your e-mail'
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
                    <button type='submit' className='flex justify-center items-center bg-[#000080] px-[2vw] py-[1vh] text-white rounded-md hover:border-white hover:border-[0.1vh]' onClick={handleSubmitClick}>Login</button>
                </ul>
            </form>
        </main>
    )
}

export default Login
