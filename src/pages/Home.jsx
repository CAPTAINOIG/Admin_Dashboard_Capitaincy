import React from 'react'
import Card from '../component/DashboardCard/Card'
import CurrentRevenue from '../Revenue/CurrentRevenue'
import ProfitChart from '../Profit/ProfitChart'
import MapOne from '../component/Maptable/MapOne'
import Analytics from '../component/Maptable/Analytics'
import Channels from '../Topchannels/Channels'
import UserChats from '../Chats/UserChats'

const Home = () => {
  return (
    <div className='lg:ms-[22%]'>
      <Card />
      <div className='lg:flex md:flex'>
        <CurrentRevenue />
        <ProfitChart />
      </div>
      <div className='lg:flex md:flex'>
        <Analytics />
        <MapOne />
      </div>
      <div className='lg:flex md:flex mb-6'>
        <Channels />
        <UserChats />
      </div>
    </div>
  )
}

export default Home