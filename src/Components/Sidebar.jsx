import React, { useState } from 'react';
import { Navdata } from '../Data.jsx';
import Subbar from './Subbar';
function Sidebar() {
    const [hide, sethide] = useState(false)
    return (
        <ul className={`flex flex-col items-start justify-start space-y-6`}>
            {Navdata.map((item, index) => {
                return (
                    <Subbar key={index} navItem={item} depthVal={0} />
                )
            })}
        </ul>
    )
}

export default Sidebar
