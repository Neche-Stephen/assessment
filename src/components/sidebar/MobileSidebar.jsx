import React, { useState, useRef } from 'react';
import IMAGES from "../../assets/sidebar/";
import { MdChevronRight } from "react-icons/md";
import dashboard from '../../assets/dashboard';

export default function MobileSidebar({show, toggleSidebar}) {
   
    // State to track active sidebar item
    const [activeItem, setActiveItem] = useState('users'); 

    // Handlers for activating sidebar items
    const handleSetActive = (item) => {
        setActiveItem(item); // Set the active item
    };


  return (
    <div className='pt-8 px-4 flex-none min-h-[100vh]'>
            <div className='w-full relative min-h-[100vh]'>
                <div className='flex flex-wrap items-center space-x-2 mb-8 cursor-pointer' onClick={toggleSidebar}>
                    <div><img className='' src={IMAGES.SETTING} alt="settings" /></div>
                </div>


                <div 
                    className={` w-[46px] flex p-3 rounded-[8px] items-center gap-2 mb-8 cursor-pointer ${activeItem === 'users' ? 'bg-[#5932EA] text-white' : 'bg-transparent'}`} onClick={() => handleSetActive('users')}
                >
                        <div className='flex-none'>
                            <img 
                                src={activeItem === 'users' ? IMAGES.USERS_ACTIVE : IMAGES.USERS} 
                                alt="Users"/>
                        </div>
                </div>

                <div 
                    className={`w-[46px] flex p-3 rounded-[8px] items-center gap-2 mb-8 cursor-pointer ${activeItem === 'help' ? 'bg-[#5932EA] text-white' : 'bg-transparent'}`}
                    onClick={() => handleSetActive('help')}
                >
                    <div className='flex-none'>
                            <img 
                                src={activeItem === 'help' ? IMAGES.HELP_ACTIVE : IMAGES.HELP} 
                                alt="Users"/>
                    </div>
                    
                </div>

                <div className='flex justify-center absolute top-[500px]'><img src={IMAGES.EVANO} alt="" /></div>
            </div>
        </div>
  )
}
