import React, { useState } from 'react'
import Sdropdown from './Sdropdown';
import { useRef } from 'react';

function Subbar({ navItem, depthVal }) {
    const [sub, setSub] = useState(false);
    const depthValref = useRef(depthVal);

    depthValref.current = depthVal + 1
    console.log(depthValref.current)


    return (
        <>
            <div className={`${sub ? 'bg-gray-800' : null} w-full p-2 flex items-center justify-start`}>
                <li ref={depthValref} onClick={() => setSub((prev) => !prev)}>{navItem.menu}</li>
            </div>
            {sub && navItem.submenu ? <Sdropdown dropitem={navItem.submenu} depthvalProp={depthValref.current} /> : null}
        </>
    )
}

export default Subbar
