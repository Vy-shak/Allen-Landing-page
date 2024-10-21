import React from 'react';
import { useState } from 'react';
import { Phone, Allenlogo, Burgermenu } from '../assets';
import { Navdata } from '../Data';
import Menuitem from './Menuitem';
import Sidebar from './Sidebar';

function Nav() {
    const [sideBar, setsideBar] = useState(false)

    const ShowNavmanu = () => {
        return (
            <ul className='max-lg:hidden flex  ml-7 space-x-7'>
                {Navdata.map((item, index) => (
                    <Menuitem depthlvl={0} key={index} menuData={item} index={index} />
                ))}
            </ul>
        )
    }

    const showSidebar = () => {
        return (
            <div className=' absolute w-fit flex flex-col justify-between items-start  p-6 left-0 top-0 h-fit bg-gray-900 rounded-md'>
                <div className='flex justify-between w-full items-center '>
                    <img width={72} height={14} src={Allenlogo} alt="logo main" />
                    <span onClick={() => setsideBar(false)} className='w-fit'>{"x"}</span>
                </div>
                <Sidebar />
                <span>Login</span>
            </div>
        )
    }


    return (
        <section className='flex justify-between items-center w-full h-fit'>
            <div className='flex justify-center items-center w-fit'>
                <img onClick={() => setsideBar((prev) => !prev)} className='md:hidden' width={24} height={24} src={Burgermenu} alt="BurgerMenu" />
                <img width={72} height={14} src={Allenlogo} alt="logo main" />
                {ShowNavmanu()}
            </div>

            <div>
                <div className='flex justify-center items-center w-fit'>
                    <img width={24} height={24} src={Phone} alt="icon-phone" />
                    <span className='text-sm font-plusJakarta font-medium text-Blue500'>Talk to us</span>
                </div>
            </div>
            {sideBar ? showSidebar() : null}
        </section>
    )
}

export default Nav
