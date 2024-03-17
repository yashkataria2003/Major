import React, { useState } from 'react'

const AddNoticeForm = () => {
    /*State for input template*/
    const [noticeData, setNoticeData] = useState({
        title: '',
        description: '',
        pdf: null,
    })

    const handleChange = (e) => {
        e.preventDefault();

        setNoticeData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    // Add notices data into database
    const handleClickAddNotice = () => {
        console.log("Add Notice Clicked");
    }

    return (
        <div className='flex flex-col justify-center items-center w-[40vw] h-[90vh] gap-y-2'>
            <form
                action=""
                method='post'
                className='flex flex-col justify-between items-center py-[5vh] h-fit gap-y-[8vh] w-[80%] border-[#000080] border-2 rounded-xl'
            >
                <h2 className='text-[#000080] text-[1.5rem]'>Add Notice Details</h2>
                <ul className='flex flex-col justify-center items-center w-[100%] h-[100%] gap-y-[3vh] pr-3'>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="title" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>Title</label>
                        <input
                            type="text"
                            name="title"
                            key="title"
                            id="title"
                            placeholder='Title'
                            className='flex justify-start items-center px-[1vw] h-[5vh] w-[75%] rounded-md bg-[#e8f0fe]'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="description" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>Description</label>
                        <textarea
                            type="text"
                            name="description"
                            key="description"
                            id="description"
                            placeholder='Description'
                            className='flex justify-start items-center px-[1vw] py-[1vh] h-[10vh] w-[75%] rounded-md bg-[#e8f0fe] resize-none'
                            onChange={handleChange}
                        />
                    </li>
                    <li className='flex justify-end items-center w-[85%] gap-x-[1vw]'>
                        <label htmlFor="pdf" className='text-[#000080] text-[1.2rem] hover:cursor-pointer'>Attachment</label>
                        <input
                            type="file"
                            accept='application/pdf'
                            name="pdf"
                            key="pdf"
                            id="pdf"
                            placeholder='PDF'
                            className='flex justify-start items-center px-[1vw] w-[75%] rounded-md text-black'
                            onChange={handleChange}
                        />
                    </li>
                </ul>
                <button type='submit' className='flex justify-center items-center bg-[#000080] px-[2vw] py-[1vh] text-white rounded-md hover:border-white hover:border-[0.1vh]' onClick={handleClickAddNotice}>Add</button>
            </form>
        </div>
    )
}

export default AddNoticeForm
