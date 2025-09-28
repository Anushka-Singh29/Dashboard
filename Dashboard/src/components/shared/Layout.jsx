import React from 'react'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <div>
            <div className='bg-sky-200'>Sidebar</div>
            <div>Header</div>
            <div>{<Outlet />}</div>
        </div>
    )
}

export default Layout
