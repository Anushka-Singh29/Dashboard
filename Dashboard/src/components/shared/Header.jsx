import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const Header = () => {
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
                    <PopoverButton className="p-1 rounded-full text-gray-400 inline-flex items-center hover:text-gray-900 focus:outline-none ">
                        <HiOutlineChatAlt fontSize={24} />
                    </PopoverButton>
                    <PopoverPanel
                        transition
                        anchor="bottom"
                       className="absolute z-10 w-80 mt-2 left-1/2 transform -translate-x-1/4 p-3 rounded-lg shadow-lg text-sm/6 transition duration-200 ease-in-out data-closed:opacity-0"
                    >
                      <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>This is the panel</div>
                      <strong className='text-gray-700 font-medium'>messages</strong>
                      <div>
                       This is messages Panel.
                      </div>
                    </PopoverPanel>
                </Popover>
                <HiOutlineBell fontSize={24} />
            </div>
        </div>
    )
}

export default Header
