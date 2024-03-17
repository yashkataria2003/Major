import React, { useEffect, useState } from 'react'
import temp from '../../assets/temp.mp4'
import Thumbnail_8 from '../../assets/Thumbnail_8.png'
import ReactPlayer from 'react-player'
import Library from '../../assets/Library.jpg'
import Card_L from '../Cards/Card_L/Card_L.jsx'
import Card_R from '../Cards/Card_R/Card_R.jsx'
import './Home.css'
// import College from '../../assets/College.jpg'

const Home = () => {
    const activeStudents = 3000;
    const alumini = 7000;
    const yearOfHistory = 20;
    const libraryBooks = 45000;

    const [activeStudentsCount, setActiveStudentsCount] = useState(0);
    const [aluminiCount, setAluminiCount] = useState(0);
    const [yearOfHistoryCount, setYearOfHistoryCount] = useState(0);
    const [libraryBooksCount, setLibraryBooksCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeStudentsCount != activeStudents) {
                setActiveStudentsCount(activeStudentsCount + 1);
            }
        }, 1);

        return () => clearInterval(interval);
    }, [activeStudentsCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (aluminiCount != alumini) {
                setAluminiCount(aluminiCount + 1);
            }
        }, 1);

        return () => clearInterval(interval);
    }, [aluminiCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (yearOfHistoryCount != yearOfHistory) {
                setYearOfHistoryCount(yearOfHistoryCount + 1);
            }
        }, 90);

        return () => clearInterval(interval);
    }, [yearOfHistoryCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (libraryBooksCount != libraryBooks) {
                setLibraryBooksCount(libraryBooksCount + 1);
            }
        }, 1);

        return () => clearInterval(interval);
    }, [libraryBooksCount]);

    return (
        <main className='flex flex-col justify-start items-center w-[100vw] h-[90vh] overflow-x-hidden'>
            <div className='flex flex-col justify-center items-center px-[7vw] py-[1vh]'>
                <h1 className='text-[2.4rem] text-[#000080] headingIITM font-bold'>INSTITUTE OF INNOVATION IN TECHNOLOGY & MANAGEMENT</h1>
                <h2 className='text-[1.5rem] text-[#192041] subHeadingIITM font-bold'>AFFILIATED TO GGSIPU, NAAC Grade ‘A’, ISO 14001:2015, 17020:2012, 21001:2018 & 50001:2018 Certified,</h2>
                <h2 className='text-[1.5rem] text-[#192041] subHeadingIITM font-bold'>A Grade by GNCTD, A Grade by SFRC</h2>
            </div>
            <div className='flex flex-col justify-center items-center px-[7vw] bg-[#909798ba] py-[1vh]'>
                <h3 className='text-center text-[1.2rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga reprehenderit ut illum voluptatum dolorem voluptatibus aliquam sapiente? Enim tempore voluptatem delectus earum dolores, ipsam non deleniti? Ipsam aliquam minus error.</h3>
            </div>
            <div className='flex flex-col justify-center items-center px-[7vw] py-[1vh] w-[100vw] relative'>
                <img src={Thumbnail_8} alt="background" className='w-[100%] opacity-50' />
                <div className='absolute flex flex-col justify-center items-center px-[2vw] w-[100%]'>
                    <h2 className='text-[3.2rem] text-[#000080] text-center stroke-white stroke-2'>Nurturing Excellence</h2>
                    <h2 className='text-[1.5rem] text-[#fff] text-center'>AFFILIATED TO GGSIPU, NAAC Grade ‘A’, ISO 14001:2015, 17020:2012, 21001:2018 & 50001:2018 Certified, A Grade by GNCTD, A Grade by SFRC</h2>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-[#ffffff] w-[100%]'>
                <Card_L image={Library} title="Library" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum itaque officia, mollitia, nam recusandae iste explicabo provident earum omnis voluptatem obcaecati voluptates veniam, nihil facere! Nemo assumenda facilis quia." />
                <Card_R image={Library} title="Library" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum itaque officia, mollitia, nam recusandae iste explicabo provident earum omnis voluptatem obcaecati voluptates veniam, nihil facere! Nemo assumenda facilis quia." />
                <Card_L image={Library} title="Library" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum itaque officia, mollitia, nam recusandae iste explicabo provident earum omnis voluptatem obcaecati voluptates veniam, nihil facere! Nemo assumenda facilis quia." />
            </div>
            <div className='flex justify-center items-center bg-orange-300 w-[100vw] h-[70vh]'>
                <h2>Notice</h2>
            </div>
            <div className='w-[100vw] flex flex-col justify-start items-center bg-College py-[8vh] gap-y-[15vh] bg-blend-color-burn'>
                <h2 className='text-white text-[2em]'>IITM By The Numbers</h2>
                <div className='flex justify-between items-center px-[8vw] w-[100%]'>
                    <div className='flex flex-col justify-center items-center h-[5vh] w-auto text-white'>
                        <p className='text-[1.7rem]'>{activeStudentsCount}+</p>
                        <h2 className=' text-[1.5rem] font-bold'>Active Stundents</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center h-[5vh] w-auto text-white'>
                        <p className='text-[1.7rem]'>{aluminiCount}+</p>
                        <h2 className=' text-[1.5rem] font-bold'>Alumini</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center h-[5vh] w-auto text-white'>
                        <p className='text-[1.7rem]'>{yearOfHistoryCount}+</p>
                        <h2 className=' text-[1.5rem] font-bold'>Year of History</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center h-[5vh] w-auto text-white'>
                        <p className='text-[1.7rem]'>{libraryBooksCount}+</p>
                        <h2 className=' text-[1.5rem] font-bold'>Library Books</h2>
                    </div>
                </div>
                <p className='text-white text-center w-[50vw] text-[1.3rem]'>Your time at IITM is a great opportunity to meet people, try new things, and develop your interests.</p>
            </div>
        </main>
    )
}

export default Home
