import React, { useEffect, useState } from 'react';
import Menuitem from './Menuitem';

function Dropdown({ submenuData, depthProp, }) {
    console.log(depthProp)
    function RenderChild() {
        return (
            submenuData.map((item, index) => (
                <Menuitem menuData={item} key={index + 5} depthlvl={depthProp} />
            ))

        )
    }
    return (
        <ul className={` ${depthProp === 1 ? ' absolute pt-5 top-12' : null} ${depthProp === 2 ? 'absolute pt-5 left-32 pl-6 top-4' : null}
        w-32 h-fit space-y-6`}>
            <div className={`${depthProp === 1 ? 'bg-gray-950 p-3 w-fit space-y-2' : 'bg-gray-900 p-3 w-fit space-y-2'} rounded-md`}>
                {RenderChild()}
            </div>
        </ul >
    )
}

export default Dropdown
