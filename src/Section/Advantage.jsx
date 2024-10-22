import React from 'react'
import { Iphone, Phoneimg1, Phoneimg2, Phoneimg3 } from '../assets';


function Advantage() {
    return (
        <section className='flex flex-col justify-center text items-center space-y-6'>
            <h3 className='font-plusJakarta text-3xl font-bold'>Allen App Advantage</h3>
            <div className='flex justify-center items-start space-x-16'>
                <div className='flex flex-col text-left justify-center lg:w-40 items-start space-y-5'>
                    <h5>Achieve your dreams with the ALLEN App</h5>
                    <h6>Top Kota faculty, customised study tools, and AI-powered learning—all in one app</h6>
                    <h6>All impact methodology &measurement validated by</h6>
                </div>
                <div className='grid grid-cols-[270px]  justify-center items-center overflow-hidden'>
                    <img className='col-start-1 z-10 col-end-1 row-start-1 row-end-1' width={270} src={Iphone} alt="" />
                    <div className='col-start-1 col-end-1 row-start-1 row-end-1 flex justify-center items-center '>
                        <img src={Phoneimg1} alt="" />
                        <img src={Phoneimg2} alt="" />
                        <img src={Phoneimg3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantage
