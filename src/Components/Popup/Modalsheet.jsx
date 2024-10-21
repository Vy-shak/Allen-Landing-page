import React, { useState } from 'react';
import { useRef } from 'react';

function Modalsheet({ closefn }) {
    const [stream, setStream] = useState(null)
    const [cls, setcls] = useState(null)

    return (
        <div className='absolute space-y-4 justify-center items-start flex flex-col p-4 w-80  h-72 bg-gray-800 rounded-lg '>
            <div className='flex justify-between items-center w-full h-fit'>
                <span className='font-plusJakarta'>Select your stream</span>
            </div>
            <div className='flex space-x-3'>
                <button className='border-solid border-2 px-4 py-1 border-blue-400  items-center rounded-full'>NEET</button>
                <button className='border-solid border-2 px-4 py-1 border-blue-400  items-center rounded-full'>JEE</button>
                <button className='border-solid border-2 px-4 py-1 border-blue-400  items-center rounded-full'>Grade 6-10</button>
            </div>
            <span className='font-plusJakarta'>Select your Class</span>
            <div className='flex space-x-3 border-b border-white border-1 pb-5'>
                <button className='border-solid border-2 px-4 py-1 border-blue-400  items-center rounded-full'>11th</button>
                <button className='border-solid border-2 px-4 py-1 border-blue-400  items-center rounded-full'>12th</button>
                <button className='border-solid border-2 px-4 py-1 border-blue-400  items-center rounded-full'>12th plus</button>
            </div>
            <div className='flex justify-center items-center w-full'>
                <button className=' bg-blue-800 w-fit h-fit text-white items-center rounded-full px-6 py-3 font-plusJakarta font-medium'>Explore courses</button>
            </div>
        </div>
    )
}

export default Modalsheet
