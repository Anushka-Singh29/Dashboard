import React from 'react'
import DashboardStatsGrid from './shared/DashboardStatsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'

const Dashboards = () => {
  return (
    <div className='flex-col gap-4'>
      <DashboardStatsGrid />
      <div className='flex flex-row gap-4 w-full'>
      <TransactionChart />
      <BuyerProfileChart />
      </div>
    </div>
  )
}

export default Dashboards
