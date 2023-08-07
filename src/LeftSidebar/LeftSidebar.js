import React, { useState } from 'react';
import './LeftSidebar.css';

import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
// import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SendIcon from '@mui/icons-material/Send';
import { Link, NavLink } from 'react-router-dom';
import SendMail from '../components/SendMail/SendMail'

function LeftSidebar({ shrinked }) {
    const [showSendMail, setShowSendMail] = useState(false);
    return (
        <aside className='left__side' style={{ flex: shrinked && 1 }}>
            <div className='icon' onClick={() => setShowSendMail(true)}>
                <CreateOutlinedIcon />
                {!shrinked && <span>Compose</span>}
            </div>
            <NavLink to="/inbox" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                <ImageOutlinedIcon />
                {!shrinked && <span>
                    <span>Inbox</span>
                    <span>1025</span>
                </span>}
            </NavLink>
            <NavLink to="starred" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                <StarBorderOutlinedIcon />
                {!shrinked && <span>Starred</span>}
            </NavLink>
            <NavLink to="snoozed" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                <AccessTimeOutlinedIcon />
                {!shrinked && <span>Snoozed</span>}
            </NavLink>
            <NavLink to="send" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                <SendIcon />
                {!shrinked && <span>Send</span>}
            </NavLink>
            <NavLink to="drafts" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                <InsertDriveFileOutlinedIcon />
                {!shrinked && <span>Drafts</span>}
            </NavLink>
            <div className='icon'>
                <KeyboardArrowDownOutlinedIcon />
                {!shrinked && <span>More</span>}
            </div>
            {showSendMail && <SendMail setShowSendMail={setShowSendMail} />}
        </aside>
    )
}

export default LeftSidebar