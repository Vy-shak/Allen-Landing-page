import React from 'react'

function Dots({ num, move }) {

    const myarr = new Array(num).fill(0);

    return (
        <div className='flex w-fit justify-center items-center space-x-3 mt-2'>
            {myarr.map((item, index) => (
                <div key={index} className={`${move === index ? ' transition  ease-in-out duration-500 bg-blue-700 scale-150' : 'bg-white'} w-2 h-2 rounded-full `}>
                </div>
            ))}
        </div>
    )
}

export default Dots
