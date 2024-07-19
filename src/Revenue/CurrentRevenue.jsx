import React, { useState } from 'react'
import DayChart from './DayChart'
import MonthChart from './MonthChart'
import WeekChart from './WeekChart'

const CurrentRevenue = () => {
    const [revenue, setRevenue] = useState('day')

    const handleRevenue = (e) => {
        // console.log(e);
        setRevenue(e)
    }

    return (
        <div className='bg-white dark:bg-gray-500 shadow-lg h-[480px] mb-5 p-3 pb-5 w-[92%] lg:w-[60%] md:w-[60%] lg:mx-2 md:mx-2 mx-4'>
            <div className=' flex gap-2 justify-end'>
                <button onClick={() => handleRevenue('day')} className={`px-2 text-white rounded transition-all duration-500 ease-in-out transform ${revenue === 'day' ? 'bg-blue-600 border-blue-600 scale-105' : 'bg-gray-800'}`}
                >Day</button>
                <button onClick={() => handleRevenue('week')} className={` px-2 text-white rounded transition-all duration-500 ease-in-out transform ${revenue === 'week' ? 'bg-blue-600 border-blue-600 scale-105' : 'bg-gray-800'}`}
                >Week</button>
                <button onClick={() => handleRevenue('month')} className={`px-2 text-white rounded transition-all duration-500 ease-in-out transform ${revenue === 'month' ? 'bg-blue-600 border-blue-600 scale-105' : 'bg-gray-800'}`}
                >Month</button>
            </div>
            <div>
                {revenue === 'day' && <DayChart />}
                {revenue === 'week' && <WeekChart />}
                {revenue === 'month' && <MonthChart />}
            </div>
        </div>
    )
}

export default CurrentRevenue