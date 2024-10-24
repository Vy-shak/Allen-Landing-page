import React from 'react'

function TestmoniCard({ name, exam, rank, comment }) {
    return (
        <div className='centerDiv flex-col bg-slate-800 rounded-lg p-6 w-60'>
            <p className='font-plusJakarta text-left pt-6 px-2 text-gray-300 text-sm leading-6'>{comment}</p>
            <div className='centerDiv'>
                <div className='flex justify-start items-start flex-col '>
                    <span>{name}</span>
                    <span>{exam}</span>
                    <span>{rank}</span>
                </div>
            </div>
        </div>
    )
}

export default TestmoniCard
