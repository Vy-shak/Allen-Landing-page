import React, { useEffect } from 'react';
import { useState } from 'react';
import { heroData, btntag } from '../Data';
import Dots from './Common/Dots';
function Heroimg() {
    const [move, setMove] = useState(0);

    useEffect(() => {
        const timer1 = setInterval(() => {
            setMove((prev) => prev < 3 ? prev + 1 : 0)
        }, 3000)

        return () => {
            clearInterval(timer1)
        }
    }, [])

    const moveStyle = {
        transform: `translateX(-${move * 600}px)`,
        transition: 'transform 0.5s ease-in-out',
        display: 'flex'
    };

    return (
        <div>
            <img />
            <div className='w-fit h-fit space-x-3 flex flex-col items-center justify-center'>
                <div className='flex overflow-hidden  w-[600px] h-[450px] justify-start items-center'>
                    <div style={moveStyle} className={`w-fit flex transition ease-in-out duration-500 -translate-x-[${(move * 600)}] h-fit`}>
                        {heroData.map((item, index) => (
                            <img key={index} width={600} height={450} src={item} alt="" />
                        ))}
                    </div>
                </div>
                <Dots num={4} move={move} />

            </div>
        </div>
    )
}

export default Heroimg
