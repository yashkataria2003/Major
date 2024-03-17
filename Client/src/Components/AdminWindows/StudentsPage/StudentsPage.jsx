import React, { useEffect, useState } from 'react'
import AddStudentForm from '../../Forms/AddStudentForm/AddStudentForm'
import StudentIDCArd from '../../Cards/StudentIDCard/StudentIDCArd'
import SearchBar from '../../SearchBar/SearchBar'

const StudentCards = ({data, title}) => {
    if (data?.length > 0) {
        // console.log(data)
        return data.map((element) => <StudentIDCArd key={element._id} data={element} />)
    }
    else {
        return (
            <h2 className="font-bold text-[#000080e5] text-xl uppercase">
                {title}
            </h2>
        )
    }
}

const StudentsPage = () => {
     /*State for checking whether data is renderd or not*/
     const [dataRenderd, setDataRenderd] = useState(false);

     /*State for fethed Data*/
     const [fetchedData, setFetchedData] = useState([]);
 
     /*State for loading*/
     const [loading, setLoading] = useState(false);
 
     /*States for Searching*/
     const [searchText, setSearchText] = useState('');
     const [searchedResults, setSearchedResults] = useState(null);
     const [searchTimeout, setSearchTimeout] = useState(null);

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout)
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = fetchedData.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()))
                setSearchedResults(searchResult)
            }, 500))
    }

    useEffect(() => {
        if (dataRenderd === false) {
            collectingData();
            setDataRenderd(true);
        }
    }, [dataRenderd])

    // Fetching All Data 
    const collectingData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:4000/api/v1/students', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const collectedData = await response.json();
            // console.log("CollectedData : ", collectedData.data);
            setFetchedData(collectedData.data)
            setDataRenderd(true);
            // console.log("Fetched Data: ", fetchedData)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false);
        }
    }


    return (
        <div className='flex justify-start items-center w-[80vw] h-[90vh]'>
            <AddStudentForm collectingData={collectingData}/>
            <div className='flex flex-col justify-center items-center h-[90vh] w-[30vw] border-white border-2 rounded-md'>
                <div className='flex justify-center items-center w-[100%] h-[15%]'>
                    <SearchBar
                        labelName="Search Data"
                        type="text"
                        name="text"
                        placeholder="Search Data"
                        value={searchText}
                        handleChange={handleSearchChange}
                    />
                </div>
                <div className='flex flex-col justify-start items-center gap-y-1 overflow-auto w-[100%] h-[100%]'>
                    {
                        loading ? (
                            <p className='text-white text-[1.5rem]'>Loading ...</p>
                        ) : (
                            <>
                                {
                                    searchText && (
                                        <h2 className=' font-medium text-[#666e75] text-xl '>
                                            Showing Results for <span className='text-[#000080e5]'>{searchText}</span>
                                        </h2>
                                    )
                                }

                                {
                                    searchText ? (
                                        <div className='grid grid-cols-1 w-[100%] h-[100%] overflow-auto overflow-x-hidden place-items-center gap-y-1'>
                                            <StudentCards
                                                data={searchedResults}
                                                title="Data Not Found"
                                            />
                                        </div>
                                    ) : (
                                        <div className='grid grid-cols-1 w-[100%] h-[100%] overflow-auto overflow-x-hidden place-items-center gap-y-1'>
                                            <StudentCards
                                                data={fetchedData}
                                                title="Data Not Found"
                                            />
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default StudentsPage
