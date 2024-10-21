import React, { useState } from 'react';
import Card from '../Components/Results/Card';
import { resultData } from '../Data';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Dots from '../Components/Common/Dots';

function Results() {
    const [move, setMove] = useState(0);
    console.log(move)

    function slideright() {
        move < 1 && move >= 0 ? setMove((prev) => prev + 1) : null;
    }
    function sliderleft() {
        move <= 1 && move > 0 ? setMove((prev) => prev - 1) : null
    }

    const moveStyle = {
        transform: `translateX(-${move * 900}px)`,
        transition: 'transform 0.5s ease-in-out',
        display: 'flex'
    };
    return (
        <section className='flex flex-col justify-center items-center w-full h-fit text-center '>
            <h3 className='text-4xl font-plusJakarta font-bold leading-10'>Our remarkable results in<br /><span className='font-plusJakarta'>2024</span></h3>
            <div className='flex justify-start w-[900px] overflow-hidden flex-shrink-0'>
                <div style={moveStyle} className='flex justify-start items-center w-fit h-fit'>
                    {resultData.map((item, index) => (
                        <Card key={index} imgLink={item.imgUrl} heading={item.heading} subheading={item.subHeading} />
                    ))}
                </div>
            </div>
            <div className='w-full absolute flex justify-between  px-40'>
                <div onClick={sliderleft} className='w-fit flex justify-center items-center h-fit p-2 rounded-md bg-white bg-gray-500'>
                    <ChevronLeft />
                </div>
                <div onClick={slideright} className='w-fit flex justify-center items-center h-fit p-2 rounded-md bg-white bg-gray-500'>
                    <ChevronRight />
                </div>
            </div>

            <Dots num={2} move={move} />
        </section>
    )
}

export default Results
