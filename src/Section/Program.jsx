import React from 'react'
import { Laptop } from '../assets'

function Program() {
    return (
        <div className='flex justify-center items-center flex-col'>
            <span className='font-plusJakarta mb-6 text-3xl font-medium'>Looking for a classroom based program?</span>
            <div className='flex justify-center items-center bg-gray-800 rounded-lg p-11 w-fit h-fit'>
                <div className='sideDiv flex-col space-y-6'>
                    <h4 className='font-plusJakarta text-xl text-left'>Present in 53 cities with,<br /><span>250+ classrooms</span></h4>
                    <button className='bg-white rounded-full px-6 py-3 text-gray-900 font-plusJakarta w-fit'>Find a center</button>
                </div>
                <div className='h-full flex justify-end items-end'>
                    <img src={Laptop} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Program
