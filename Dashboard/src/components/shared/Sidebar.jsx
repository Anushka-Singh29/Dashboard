import React from 'react'
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi';


const linkClasses = ' text-gray-300 flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'



const Sidebar = () => {
    return (
        <div className='flex flex-col bg-neutral-800 w-50 p-3 text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish size={25} />
                <span className='text-neutral-300 text-lg'>Open Shop</span>
            </div>
            <div className='flex-1 py-8 flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}>
                    </SidebarLink>

                ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-400'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
                    <SidebarLink key={item.key} item={item}>
                    </SidebarLink>
                ))}
                <div
                    className={classNames('text-red-500 cursor-pointer', linkClasses)}>
                    <span className='text-xl'>
                        <HiOutlineLogout />

                    </span>
                    Logout
                </div>
            </div>
        </div>
    )
}

export default Sidebar

function SidebarLink({ item }) {
    const { pathname } = useLocation()
    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-600 text-white' : '', linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
