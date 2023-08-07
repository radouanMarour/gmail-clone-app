import React, { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './MailsHeader.css';
import { db } from '../../firebase';
import { deleteDoc, doc } from 'firebase/firestore';

function MailsHeader({ selectAll, setSelectAll, data, setOrderType, handlePagination, start, end }) {

    const deleteAll = () => {
        data.forEach(async (email) => {
            await deleteDoc(doc(db, 'emails', email.id));
        });
    }

    return (
        <div className='mails__header'>
            <div className='header__left'>
                <div className='icon'>
                    <label htmlFor='select'>
                        {selectAll ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                    </label>
                    <input
                        type='checkbox'
                        id="select"
                        hidden
                        onChange={(e) => e.target.checked ? setSelectAll(true) : setSelectAll(false)}
                    />
                </div>
                {
                    selectAll && <div className='icon' onClick={() => deleteAll()}>
                        <DeleteForeverIcon />
                        <span>Delete all</span>
                    </div>
                }
                <div className='icon'>
                    <ArrowDropDownIcon />
                    <span>Select</span>
                </div>
                <div className='icon'>
                    <RefreshIcon />
                    <span>Refrech</span>
                </div>
                <div className='icon'>
                    <MoreVertIcon />
                    <span>More</span>
                </div>
            </div>
            <div className='header__right'>
                <div className='sort__btn'>
                    {data && <p>{start + 1}-{end} of {data.length}</p>}
                    <div className='sort__options'>
                        <button onClick={() => setOrderType("desc")}>Newest</button>
                        <br />
                        <button onClick={() => setOrderType("asc")}>Oldest</button>
                    </div>
                </div>
                <div className='pagination__ctrl'>
                    <div className='icon' onClick={() => handlePagination('prev')}>
                        <KeyboardArrowLeftIcon />
                        <span>Older</span>
                    </div>
                    <div className='icon' onClick={() => handlePagination('next')}>
                        <KeyboardArrowRightIcon />
                        <span>Newer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MailsHeader