import React from 'react'
import { ArrowRight } from 'lucide-react'

function Discovercard() {
    return (
        <div className='flex flex-col justify-between w-60 items-start h-60 p-6 bg-gray-800 rounded-lg'>
            <span>NEET</span>
            <div className='flex justify-center items-center'>
                <span>View</span>
                <ArrowRight />
            </div>
        </div>
    )
}

export default Discovercard
