import React from 'react'
import user02 from '../assets/image/user02.png'
import user12 from '../assets/image/user12.png'
import user04 from '../assets/image/user04.png'
import user01 from '../assets/image/user01.png'
import user05 from '../assets/image/user05.png'
import user03 from '../assets/image/user03.png'


const UserChats = () => {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-lg p-5 lg:mx-2 md:mx-0 mx-4 h-[600px] lg:w-[32%] w-[92%] md:w-[39%] xl:col-span-4">
      <div className='text-center dark:text-white font-bold text-xl pb-5'>Chats</div>

      <div className='flex text-sm dark:text-white px-2 my-5 hover:bg-gray-300 rounded'>
        <span className='absolute border border-white p-1 ms-[4%] mt-[45px] bg-green-700 rounded-full'></span>
        <p><img className='lg:w-[55%] md:w-[50%] w-[45%]' src={user02} alt="" /></p>
        <div className='lg:ms-[-16px] md:ms-[-30px]'>
          <p className='font-bold'>Hello Samantha</p>
          <span>How you doing?</span><span className='lg:ms-4 md:ms-2 ms-6 bg-blue-700 text-white rounded-full text-[8px] p-2'>1</span>
          <p>5 min ago</p>
        </div>
      </div>

      <div className='flex text-sm dark:text-white px-2 my-5 hover:bg-gray-300 rounded'>
        <span className='absolute border border-white p-1 ms-[4%] mt-[45px] bg-green-700 rounded-full'></span>
        <p><img className='w-[75%]' src={user12} alt="" /></p>
        <div className='lg:ms-[17px] md:ms-[0px] ms-8'>
          <p className='font-bold'>Hello Samantha</p>
          <span>How you doing?</span><span className='lg:ms-4 md:ms-2 ms-5 bg-blue-700 text-white rounded-full text-[8px] p-2'>1</span>
          <p>5 min ago</p>
        </div>
      </div>

      <div className='flex text-sm dark:text-white px-2 my-5 hover:bg-gray-300 rounded'>
        <span className='absolute border border-white p-1 ms-[4%] mt-[45px] bg-green-700 rounded-full'></span>
        <p><img className='w-[55%]' src={user04} alt="" /></p>
        <div className='lg:ms-[-16px] md:ms-[-30px]'>
          <p className='font-bold'>Hello Samantha</p>
          <span>How you doing?</span><span className='lg:ms-4 md:ms-2 ms-5 bg-blue-700 text-white rounded-full text-[8px] p-2'>1</span>
          <p>5 min ago</p>
        </div>
      </div>

      <div className='flex text-sm dark:text-white px-2 my-5 hover:bg-gray-300 rounded'>
        <span className='absolute border border-white p-1 ms-[4%] mt-[45px] bg-green-700 rounded-full'></span>
        <p><img className='w-[55%]' src={user01} alt="" /></p>
        <div className='lg:ms-[-16px] md:ms-[-30px]'>
          <p className='font-bold'>Hello Samantha</p>
          <span>How you doing?</span><span className='lg:ms-4 md:ms-2 ms-5 bg-blue-700 text-white rounded-full text-[8px] p-2'>1</span>
          <p>5 min ago</p>
        </div>
      </div>

      <div className='flex text-sm dark:text-white px-2 my-5 hover:bg-gray-300 rounded'>
        <span className='absolute border border-white p-1 ms-[4%] mt-[45px] bg-green-700 rounded-full'></span>
        <p><img className='w-[55%]' src={user05} alt="" /></p>
        <div className='lg:ms-[-16px] md:ms-[-30px]'>
          <p className='font-bold'>Hello Samantha</p>
          <span>How you doing?</span><span className='lg:ms-4 md:ms-2 ms-5 bg-blue-700 text-white rounded-full text-[8px] p-2'>1</span>
          <p>5 min ago</p>
        </div>
      </div>

      <div className='flex text-sm dark:text-white px-2 my-5 hover:bg-gray-300 rounded'>
        <span className='absolute border border-white p-1 ms-[4%] mt-[45px] bg-green-700 rounded-full'></span>
        <p><img className='w-[55%]' src={user03} alt="" /></p>
        <div className='lg:ms-[-16px] md:ms-[-30px]'>
          <p className='font-bold'>Hello Samantha</p>
          <span>How you doing?</span><span className='lg:ms-4 md:ms-2 ms-5 bg-blue-700 text-white rounded-full text-[8px] p-2'>1</span>
          <p>5 min ago</p>
        </div>
      </div>
  

    </div>
  )
}

export default UserChats