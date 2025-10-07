import React from 'react'
import { IoBagHandle } from 'react-icons/io5'

const DashboardStatsGrid = () => {
    return (
        <div className='flex gap-4 w-full mb-1'>
            <BoxWrapper>
                <div className='rounded-full h-9 w-9 bg-sky-300 items-center justify-center flex' >
                    <IoBagHandle className='text-xl text-gray-700' />
                </div>
                <div className='pl-4'>
                    <span className='text-gray-500 font-light'>Total Sales</span>
                    <div className='flex items-center'>
                        <strong className='text-l text-gray-700 font-semibold'>$34562.68</strong>
                        <span className='text-sm text-green-400 pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>

            <BoxWrapper>
                <div className='rounded-full h-9 w-9 bg-orange-400 items-center justify-center flex' >
                    <IoBagHandle className='text-l text-gray-700' />
                </div>
                <div className='pl-4'>
                    <span className='text-gray-500 font-light'>Total Expenses</span>
                    <div className='flex items-center'>
                        <strong className='text-l text-gray-700 font-semibold'>$3434.68</strong>
                        <span className='text-sm text-green-400 pl-2'>-134</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-9 w-9 bg-yellow-400 items-center justify-center flex' >
                    <IoBagHandle className='text-l text-gray-700' />
                </div>
                <div className='pl-4'>
                    <span className='text-gray-500 font-light'>Total Customers</span>
                    <div className='flex items-center'>
                        <strong className='text-l text-gray-700 font-semibold'>10009</strong>
                        <span className='text-sm text-green-400 pl-2'>-30</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-9 w-9 bg-green-400 items-center justify-center flex' >
                    <IoBagHandle className='text-l text-gray-700' />
                </div>
                <div className='pl-4'>
                    <span className='text-gray-500 font-light'>Total Orders</span>
                    <div className='flex items-center'>
                        <strong className='text-l text-gray-700 font-semibold'>16432</strong>
                        <span className='text-sm text-green-400 pl-2'>-43</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

export default DashboardStatsGrid

function BoxWrapper({ children }) {
    return <div className=" h-14 bg-white p-4 rounded-sm flex-1 border border-gray-200 flex items-center">{children}</div>
}
