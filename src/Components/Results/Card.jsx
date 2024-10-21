import React from 'react';

function Card({ imgLink, heading, subheading }) {
    return (
        <div className='flex justify-center items-start w-[900px] h-fit mt-5 '>
            <div className='flex justify-center items-center w-full h-fit'>
                <img width={960} src={imgLink} alt="" />
            </div>
            <div className='flex flex-col space-y-4 ml-4 '>
                <h3 className='text-2xl font-medium text-left'>{heading}</h3>
                <h5 className='text-sm font-regular text-gray-400 text-left'>{subheading}</h5>
                <div className='flex justify-start'>
                    <h5>View Detailed results</h5>
                </div>
            </div>
        </div>
    )
}

export default Card
