import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Dashboard'
import { MdMenu } from 'react-icons/md'
import { IoSettingsOutline } from "react-icons/io5";
import SearchInput from './SearchInput'
import Dropdownuser from './Dropdownuser';
import DarkModeSwitcher from '../component/DarkModeSwitcher';
import DropdownMessage from './DropdownMessage';
import DropdownNotification from './DropdownNotification';

const Header = () => {
    const { toggleSideBar } = useContext(AppContext)
    return (
        <>
            <div className='fixed top-0 right-0 left-0 lg:ms-[256px] p-5 px-10 z-50 shadow-lg bg-white dark:bg-gray-700'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-between gap-5'>
                        <div className="lg:hidden cursor-pointer" onClick={() => toggleSideBar()}>
                            <MdMenu size={25} />
                        </div>
                    </div>
                    <div className='flex items-center justify-between md:gap-5'>
                    <SearchInput />
                        <div className='flex items-center md:gap-5 gap-5 lg:ms-[0px]'>
                            <IoSettingsOutline className='lg:ms-[200px] bg-gray-300 rounded-full p-1' size={27} />
                            <DarkModeSwitcher/>
                            <DropdownNotification/>
                            <DropdownMessage/>
                            <Dropdownuser  />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Header