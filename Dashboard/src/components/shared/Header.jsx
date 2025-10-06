import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Popover, PopoverButton, PopoverPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className='bg-white h-16 px-4 flex items-center justify-between border-b border-gray-300'>
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                <input type="text" placeholder="Search"
                    className='text-sm focus:outline-none active:outline-none rounded-sm
                h-10 w-[24rem] border border-gray-400 pl-10'
                />
            </div>
            <div className='flex items-center gap-2 mr-2'>
                <Popover className='relative'>
                    <PopoverButton className="p-1 rounded-full text-gray-700 inline-flex items-center focus:outline-none active:bg-gray-300 hover:bg-gray-200">
                        <HiOutlineChatAlt fontSize={24} />
                    </PopoverButton>
                    <PopoverPanel
                        transition
                        anchor="bottom"
                        className="absolute z-10 w-80 mt-2 left-1/2 transform -translate-x-1/4 p-3 rounded-lg shadow-lg text-sm/6 transition duration-200 ease-in-out data-closed:opacity-0"
                    >
                        <div className='mt-2 py-1 text-medium text-gray-700'>
                            This is notifications Panel.
                        </div>
                        {/* <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>This is the panel</div> */}
                        <strong className='font-sm font-extralight'>Notifications</strong>
                    </PopoverPanel>
                </Popover>
                <HiOutlineBell fontSize={24} />

                <Menu as="div" className="relative ml-3">
                    <MenuButton className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500">
                        <span className='sr-only'>Open user menu</span>
                        <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'
                            style={{ backgroundImage: `url("https://source.unsplash.com/80x80?face")` }}>
                            <span className='sr-only'>Hugh Jackson</span>
                        </div>
                    </MenuButton>
                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 rounded-lg shadow-xl p-1 bg-white focus:outline-none 
                       transition ease-out duration-100 transform origin-top-right 
                       data-[closed]:opacity-0 data-[closed]:scale-95"
                    >
                        <MenuItem>

                            <button
                                onClick={() => navigate('/profile')}
                                // Apply styling based on the 'active' state
                                className={'flex w-full text-left rounded-md px-3 py-2 hover:bg-gray-200 text-sm font-medium'
                                }
                            >
                                Your Profile
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button
                                onClick={() => navigate('/settings')}
                                className={'flex w-full text-left rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200'}
                            >
                                Settings
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button
                                onClick={() => navigate('/settings')}
                                className={'hover:bg-gray-200 flex w-full text-left rounded-md px-3 py-2 text-sm font-medium'}
                            >
                                Logout
                            </button>

                        </MenuItem>

                    </MenuItems>
                </Menu>

            </div>
        </div>
    )
}

export default Header
