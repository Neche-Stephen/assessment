import React, { useState, useRef } from 'react';
import IMAGES from "../../assets/sidebar/";
import { MdChevronRight } from "react-icons/md";
import dashboard from '../../assets/dashboard';

export default function DesktopSidebar({show, toggleSidebar}) {
     // State to track active sidebar item
     const [activeItem, setActiveItem] = useState('users'); // Default to none active

     // Handlers for activating sidebar items
     const handleSetActive = (item) => {
         setActiveItem(item); // Set the active item
     };

  return (
    <div className='pt-8 pl-4 pr-12 border md:w-[30%] lg:w-[21.3%] flex-grow'>
        <div className='w-full'>
            <div className='flex flex-wrap items-center space-x-2 mb-8 cursor-pointer' onClick={toggleSidebar}>
                <div><img className='' src={IMAGES.SETTING} alt="settings" /></div>
                <div className='text-[26px] font-[600] leading-[39px]' >Dashboard <span className='hidden xl:inline text-[10px] font-[400] leading-[15px]'>v.01</span></div>
            </div>

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
        </div>
    </div>
  )
}
