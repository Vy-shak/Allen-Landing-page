import React, { useState } from 'react'
import { Heroimg } from '../Components'
import Modalsheet from '../Components/Popup/Modalsheet'

function Hero({ bgProp }) {
    const [popup, setPopup] = useState(false);


    function CloseModal() {
        popup ? setPopup(false) : null
    }

    return (
        <div className='w-full flex items-center justify-center'>
            <section onClick={CloseModal} className={`${popup ? ' opacity-65 bg-blend-multiply' : null} flex justify-center items-center space-x-16 w-full `}>
                <div className='flex flex-col items-start justify-start'>
                    <h3 className='text-left font-plusJakarta font-semibold text-3xl lg:text-5xl'><span>Your Dream</span>
                        <br />
                        Our Expertise .
                    </h3>
                    <h4 className='text-left  lg:text-xl text-lg lg:mt-7 mt-4'>
                        <span>What brings you to</span>
                        <br />
                        us Today?
                    </h4>
                    <div className='space-y-3 mt-6'>
                        <div className='flex w-full justify-between items-center space-x-3'>
                            <button onClick={() => setPopup((prev) => !prev)} className='border-solid border-2 px-4 py-1 border-blue-400  items-center rounded-full'>NEET</button>
                            <button onClick={() => setPopup((prev) => !prev)} className='border-solid border-2 px-4 py-1 border-blue-400  items-center rounded-full'>JEE</button>
                        </div>
                        <div className='flex'>
                            <button onClick={() => setPopup((prev) => !prev)} className='border-solid border-2 px-4 py-1 border-blue-400  items-center rounded-full'>Grade 6-10</button>
                        </div>
                    </div>
                </div>
                <Heroimg />
            </section>
            {popup ? <Modalsheet /> : null}
        </div>
    )
}

export default Hero
