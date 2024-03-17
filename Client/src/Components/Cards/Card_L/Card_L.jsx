import React from 'react'

const Card_L = ({image, title, description}) => {
    return (
        <div className="flex justify-between items-center px-[8vw] py-[2vh]">
            <img src={image} alt="Reload" className='h-[50vh]'/>
            <div className="flex flex-col justify-center items-center px-[1vw]">
                <h2 className="text-[2rem]">{title}</h2>
                <p className="text-center">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card_L
