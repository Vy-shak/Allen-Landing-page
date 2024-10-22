import React from 'react';
import { Discovercard } from '../Components';

function Discover() {
    return (
        <section className='flex flex-col justify-center items-start space-y-6'>
            <span className='font-plusJakarta text-3xl font-medium'>Discover the perfect online program</span>
            <Discovercard />
            <Discovercard />
            <Discovercard />
        </section>
    )
}

export default Discover
