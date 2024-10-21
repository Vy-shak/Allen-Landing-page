import React, { useState } from 'react'
import Subbar from './Subbar'

function Sdropdown({ dropitem, depthvalProp }) {
    const [hide, sethide] = useState(false)
    return (
        <ul className='flex flex-col items-start justify-start pl-3' >
            {dropitem.map((item, index) => (
                <>
                    <Subbar navItem={item} depthVal={depthvalProp} />
                </>
            ))}
        </ul>
    )
}

export default Sdropdown
