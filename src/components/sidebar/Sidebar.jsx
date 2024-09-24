import React, { useRef } from 'react';
import IMAGES from "../../assets/sidebar/";
import { MdChevronRight } from "react-icons/md";
import dashboard from '../../assets/dashboard';

export default function Sidebar() {
    const sidebarRef = useRef(null);
    const helpRef = useRef(null);
    const usersRef = useRef(null);
    const dashboardRef = useRef(null);

    const toggleSidebar = () => {
        sidebarRef.current.classList.toggle('w-[8.33%]');
        usersRef.current.classList.toggle('hidden');
        helpRef.current.classList.toggle('hidden');
        dashboardRef.current.classList.toggle('hidden');
    };

    return (
        <div ref={sidebarRef} className='pt-8 pl-2 w-[16.67%]'>
            <div className='flex items-center' onClick={toggleSidebar}>
                <div><img src={IMAGES.SETTING} alt="settings" /></div>
                <div ref={dashboardRef}>Dashboard <span>v.01</span></div>
            </div>

            <div className='flex items-center gap-2'>
                    <div><img src={IMAGES.USERS} alt="Users"/></div>
                    <div className='flex items-center' ref={usersRef}>
                        <div className='mr-auto'>Users</div>
                        <div><MdChevronRight /></div>
                    </div>
            </div>

            <div className='flex items-center gap-2'>
                <div><img src={IMAGES.HELP} alt="Help" /></div>
                <div className='flex items-center' ref={helpRef}>
                    <div className='mr-auto'>Help</div>
                    <div><MdChevronRight /></div>
                </div>
            </div>
        </div>
    );
}
