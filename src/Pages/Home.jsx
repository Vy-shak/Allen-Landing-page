import React from 'react'
import Nav from '../Components/Nav';
import { Hero, CourseAd, Results, Advantage, Discover } from '../Section';

function Home() {
  return (
    < section className=' flex items-center justify-center flex-col w-screen '>
      <section className=' z-10 w-full flex items-center justify-center padding-x padding-y bg-gray-900'>
        <Nav />
      </section>
      <section className=' z-0 w-full px-20 padding-y bg-gray-900'>
        <Hero />
      </section>
      <section className=' z-0 w-full px-20 padding-y bg-gray-900'>
        <CourseAd />
      </section>
      <section className=' z-0 w-full px-20 padding-y bg-gray-900'>
        <Results />
      </section>
      <section className=' z-0 w-full px-20 padding-y bg-gray-900'>
        <Advantage />
      </section>
      <section className=' z-0 w-full px-20 padding-y bg-gray-900'>
        <Discover />
      </section>
    </ section>
  )
}

export default Home
