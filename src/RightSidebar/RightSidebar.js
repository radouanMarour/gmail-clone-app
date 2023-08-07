import React, { useState } from 'react';
import './RightSidebar.css';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function RightSidebar() {

    return (
        <aside className='right__side'>
            <div className='icon'>
                <CalendarMonthIcon style={{ color: "#4285f4" }} />
                <span>Calendar</span>
            </div>
            <div className='icon'>
                <TipsAndUpdatesIcon style={{ color: "#fbbc04" }} />
                <span>Keep</span>
            </div>
            <div className='icon'>
                <TaskAltIcon style={{ color: "#4285f4" }} />
                <span>Tasks</span>
            </div>
            <div className='icon'>
                <PersonIcon style={{ color: "#0158cc" }} />
                <span>Contacts</span>
            </div>
            <div className='icon'>
                <AddIcon />
                <span>Get Add-ons</span>
            </div>
            <div className='icon'>
                <KeyboardArrowRightIcon />
                <span>More</span>
            </div>
        </aside>
    )
}

export default RightSidebar