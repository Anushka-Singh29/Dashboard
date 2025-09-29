import React from 'react'
import { FcBullish } from "react-icons/fc";



const Sidebar = () => {
    return (
        <div className='flex flex-col bg-neutral-800 w-50 p-3 text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish size={25} /> 
                <span className='text-neutral-300 text-lg'>Open Shop</span>
            </div>
            <div className='flex-1'>top part</div>
            <div className=''>bottom part</div>
        </div>
    )
}

export default Sidebar
