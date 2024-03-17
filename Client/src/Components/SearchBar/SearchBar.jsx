import React from 'react'

const SearchBar = ({type, name, placeholder, value, handleChange}) => {
  return (
    <div className='flex justify-between items-center w-[90%] h-[50%] px-2'>
        <input 
            type={type} 
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className='flex justify-start items-center w-full px-[1vw] py-[0.7vh] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none'
        />
    </div>
  )
}

export default SearchBar
