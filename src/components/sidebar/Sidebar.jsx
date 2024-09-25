import React, { useState, useRef, useEffect } from 'react';
import IMAGES from "../../assets/sidebar/";
import { MdChevronRight } from "react-icons/md";
import dashboard from '../../assets/dashboard';
import MobileSidebar from './MobileSidebar';
import DesktopSidebar from './DesktopSidebar';

export default function Sidebar() {

    const [show, setShow] = useState(true); // State to track if sidebar is open or closed
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // State to track if screen is mobile
   
    // State to track active sidebar item
    const [activeItem, setActiveItem] = useState(''); // Default to none active

    // Handlers for activating sidebar items
    const handleSetActive = (item) => {
        setActiveItem(item);
    };

    const toggleSidebar = () => {
        setShow(!show);
    }

    // Event listener for window resizing
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Update `isMobile` based on the window width
        };

        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // For screens less than 768px, show only Mobile Sidebar
    if (isMobile) {
        return (
            <MobileSidebar show={show} toggleSidebar={toggleSidebar} />
        );
    }

    // For screens wider than 768px, allow toggle between Desktop and Mobile Sidebar
    return show ? (
        <MobileSidebar show={show} toggleSidebar={toggleSidebar} />
    ) : (
        <DesktopSidebar show={show} toggleSidebar={toggleSidebar} />
    );


}
