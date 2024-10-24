import React from 'react';
import TestmoniCard from '../Components/Testimonial/TestmoniCard';

function Testimonial() {
    return (
        <section className='centerDiv'>
            <div className='centerDiv flex-col space-y-6'>
                <span className='font-plusJakarta font-bold text-blue-600'>TESTIMONIALS</span>
                <h2 className='font-plusJakarta text-left'>Here's what<br /> students are <br /> saying</h2>
            </div>
            <div className='w-72 overflow-hidden'>
                <div>
                    <TestmoniCard name={'SEKH GALIB RAZA'} exam={'NEET-UG 2024, Score'} rank={"695 / 720"} comment={"I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Programs. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score by 100 marks from my previous attempt."} />
                </div>
            </div>
        </section>
    )
}

export default Testimonial
