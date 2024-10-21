import React, { useEffect } from 'react'
import { adData, btntag } from '../Data';
import { useState } from 'react';
import Dots from '../Components/Common/Dots';

function CourseAd() {
    const [move, setMove] = useState(0);

    useEffect(() => {
        const timer1 = setInterval(() => {
            setMove((prev) => prev < 3 ? prev + 1 : 0)
        }, 3000)

        return () => {
            clearInterval(timer1)
        }
    }, []);

    const moveStyle = {
        transform: `translateX(-${move * 800}px)`,
        transition: 'transform 0.5s ease-in-out',
        display: 'flex'
    };




    return (
        <section className='flex  justify-center items-center flex-col'>
            <div className='flex overflow-hidden w-[800px] h-[200px] justify-start items-center'>
                <div style={moveStyle} className={`w-fit flex transition ease-in-out duration-500   h-fit`}>
                    {adData.map((item, index) => (
                        <img key={index} width={800} height={200} src={item} alt="" />
                    ))}
                </div>
            </div>
            <Dots move={move} num={4} />
        </section>
    )

}

export default CourseAd
