import React, { useContext } from 'react'
import { AppContext } from '../context/Dashboard'
import Header from '../Nav/Header'
import Sidebar from '../Side/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Calender from '../pages/Calender'
import UserApproval from '../approval/UserApproval'



const Rootlayout = ({children}) => {
    const {sideBarOpen} = useContext(AppContext)
    return (
    <div className='font-[Mirza] dark:bg-gray-800 bg-blue-50'>
          <div className="h-28 duration-200 ease-in-out z-50">
        <Header />
        <div className="flex max-w-full">
          <Sidebar />
          <div className={` ${!sideBarOpen ? 'md:ml-16' : 'md:ml-64'} `}>
            <main className="py-4 flex-1 break-words">{children}</main>
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/approval' element={<UserApproval/>}/>
      </Routes>
    </div>
  )
}

export default Rootlayout