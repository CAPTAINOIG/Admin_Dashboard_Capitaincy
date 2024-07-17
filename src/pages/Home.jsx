import React from 'react'
import Card from '../component/DashboardCard/Card'
import CurrentRevenue from '../Revenue/CurrentRevenue'
import ProfitChart from '../Profit/ProfitChart'
import CardOne from '../component/DashboardCard/CardOne'
import CardTwo from '../component/DashboardCard/CardTwo'

const Home = () => {
  return (
    <div className='lg:ms-[22%]'>
        <Card/>
        {/* <div className='flex'>
        </div> */}
        <div className='lg:flex md:flex'>
        <CurrentRevenue/>
        <ProfitChart/>
        </div>
    </div>
  )
}

export default Home