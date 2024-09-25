import React, { useState, useRef } from 'react';
import IMAGES from "../../assets/sidebar/";
import { MdChevronRight } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import dashboard from '../../assets/dashboard';

export default function DesktopSidebar({show, toggleSidebar}) {
     // State to track active sidebar item
     const [activeItem, setActiveItem] = useState('users'); // Default to none active

     // Handlers for activating sidebar items
     const handleSetActive = (item) => {
         setActiveItem(item); // Set the active item
     };

  return (
    <div className='pt-8 pl-4 pr-8 lg:pr-12 md:w-[30%] lg:w-[21.3%] flex-grow min-h-[100vh]'>
        <div className='w-full relative min-h-[100vh]'>
            <div className='flex flex-wrap items-center space-x-2 mb-8 cursor-pointer' onClick={toggleSidebar}>
                <div><img className='' src={IMAGES.SETTING} alt="settings" /></div>
                <div className='text-[26px] font-[600] leading-[39px]' >Dashboard <span className='hidden xl:inline text-[10px] font-[400] leading-[15px]'>v.01</span></div>
            </div>

            {/* Sidebar item - users */}
            <div 
                className={`flex p-3 rounded-[8px] items-center gap-2 mb-8 cursor-pointer ${activeItem === 'users' ? 'bg-[#5932EA] text-white' : 'bg-transparent'}`} onClick={() => handleSetActive('users')}
            >
                    <div className='flex-none'>
                        <img 
                            src={activeItem === 'users' ? IMAGES.USERS_ACTIVE : IMAGES.USERS} 
                            alt="Users"/>
                    </div>
                    <div className='flex items-center justify-between flex-grow'>
                        <div className='mr-auto'>Users</div>
                        <div><MdChevronRight /></div>
                    </div>
            </div>

            {/* Sidebar item - help */}
            <div 
                className={`flex p-3 rounded-[8px] items-center gap-2 mb-8 cursor-pointer ${activeItem === 'help' ? 'bg-[#5932EA] text-white' : 'bg-transparent'}`}
                onClick={() => handleSetActive('help')}
            >
                <div className='flex-none'>
                        <img 
                            src={activeItem === 'help' ? IMAGES.HELP_ACTIVE : IMAGES.HELP} 
                            alt="Users"/>
                    </div>
                <div className='flex items-center flex-grow'>
                    <div className='mr-auto'>Help</div>
                    <div><MdChevronRight /></div>
                </div>
            </div>

            {/* Sidebar footer section  */}
            <div className='absolute top-[500px]'>
                <div className=' p-5 lg:p-7 rounded-[20px] mb-8'
                    style={{
                        background: "linear-gradient(107.91deg, #EAABF0 7.37%, #4623E9 95.19%)"

                    }}>
                    <div className='text-[14px] font-[600] leading-[21px] text-center text-white mb-5'>Upgrade to  PRO to get access all Features!</div>
                    <button className='w-full bg-white text-[#4925E9] text-[14px] font-[600] leading-[21px text-center] py-3 rounded-[20px] px-3 lg:px-0'>Get Pro Now!</button>

                </div>

    
                <div className='flex justify-between'>
                <div className='flex gap-2'>
                        <div><img src={IMAGES.EVANO} alt="" /></div>
                        <div>
                            <div className='text-[14px] leading-[21px]'>Evano</div>
                            <div className='text-[12px] leading-[18px] text-[#757575]'>Project Manager</div>
                        </div>
                </div>
                    <FaChevronDown color='#757575'/>
                </div>
            </div>
        </div>
    </div>
  )
}
