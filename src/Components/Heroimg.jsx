import React, { useEffect } from 'react';
import { useState } from 'react';
import { heroData, btntag } from '../Data';
function Heroimg() {
    const [move, setMove] = useState(0);
    console.log(move)

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

                <div className='flex w-fit justify-center items-center space-x-3 mt-2'>
                    {btntag.map((item, index) => (
                        <div key={index} className={`${move === index ? ' transition ease-in-out duration-500 bg-blue-700 scale-150' : 'bg-white'} w-2 h-2 rounded-full`}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Heroimg
