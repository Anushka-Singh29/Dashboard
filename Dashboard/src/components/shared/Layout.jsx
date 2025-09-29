import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


const Layout = () => {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar />
            {/* <div className='bg-sky-200'>Sidebar</div> */}
            <div className="className p-4">

                <div className='bg-teal-200'>Header</div>
                <div>{<Outlet />}</div>
            </div>
        </div>
    )
}

export default Layout
