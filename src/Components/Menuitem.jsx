import React, { useState } from 'react'
import Dropdown from './Dropdown';
import { ChevronRight } from 'lucide-react'

function Menuitem({ menuData, depthlvl }) {
    const [child, setchild] = useState(false);
    depthlvl = depthlvl + 1;
    function setmenu() {
        return (
            <div className={` flex justify-between w-full items-center `}>
                <label className='whitespace-nowrap'>{menuData.menu}</label>
                {menuData.submenu && depthlvl !== 1 ? (<ChevronRight />) : null}
            </div>
        )
    }
    console.log(child);

    function setsubmenu() {
        return (
            <Dropdown depthProp={depthlvl} submenuData={menuData.submenu} childprop={child} childfun={setchild} />
        )
    }

    return (
        <li onMouseLeave={() => setchild(false)} onMouseEnter={() => setchild(true)} className={` ${depthlvl !== 1 ? 'rounded-sm p-2' : 'null'} w-32 ${depthlvl == 1 ? 'w-fit' : null} h-fit ${child && depthlvl !== 1 ? "bg-slate-800" : null}`}>
            {setmenu()}
            {menuData.submenu && child ? setsubmenu() : null}
        </li>
    )
}

export default Menuitem