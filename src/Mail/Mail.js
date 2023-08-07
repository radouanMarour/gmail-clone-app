import React, { useRef, useState } from 'react'
import './Mail.css';
import { CheckBox, CheckBoxOutlineBlank, StarBorderOutlined } from '@mui/icons-material';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';

function Mail({ email, selectAll }) {

    const deleteMail = async (id) => {
        await deleteDoc(doc(db, 'emails', id));
    }

    return (
        <div className='mail'>
            <div className='mail__sender'>
                <div>
                    <label htmlFor='select'>
                        {
                            selectAll ? <CheckBox /> : <CheckBoxOutlineBlank />
                        }
                    </label>
                    <input
                        type='checkbox'
                        id="select"
                        hidden
                    />
                </div>
                <StarBorderOutlined />
                <p>{email?.from.name}</p>
            </div>
            <div className='mail__body'>
                {/* <div className='mail__body__info'> */}
                <Link to={`/inbox/${email.id}`} className='mail__body__info'>
                    <span className='mail__subject'>{email?.subject}</span>
                    <span className='mail__message'> - {email?.message.substr(0, 150)}</span>
                </Link>
                {/* </div> */}
                <div className='mail__body__actions'>
                    <div className='icon'>
                        <ArchiveIcon />
                        <span>Archive</span>
                    </div>
                    <div className='icon' onClick={() => deleteMail(email.id)}>
                        <DeleteForeverIcon />
                        <span>Delete</span>
                    </div>
                    <div className='icon'>
                        <DraftsIcon />
                        <span>Mark as read</span>
                    </div>
                    <div className='icon'>
                        <AccessTimeIcon />
                        <span>Snooze</span>
                    </div>
                </div>
                <p className='date'>
                    {new Date(email?.timestamp?.seconds * 1000).toUTCString().substring(0, 17)}
                </p>
            </div>
        </div>
    )
}

export default Mail