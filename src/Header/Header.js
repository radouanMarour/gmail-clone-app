import React, { useEffect, useRef, useState } from 'react'
import './Header.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import Logo from '../img/logo_gmail.png';

function Header() {
    const [query, setQuery] = useState("");
    const [formFocused, setFormFocused] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const changeForm = (e) => {
            // Check if the event target is the input element (focused element)
            if (e.target === inputRef.current) {
                setFormFocused(true);
            } else {
                setFormFocused(false);
            }
        };
        document.addEventListener('click', changeForm);
        return () => document.removeEventListener('click', changeForm);
    }, []);

    const handleForm = (e) => {
        e.preventDefault();
    }

    return (
        <header>
            <div className='header__left'>
                <div className='menu__icon'><MenuOutlinedIcon /></div>
                <img src={Logo} alt="gmail-logo" />
            </div>
            <div className='header__center'>
                <form className={formFocused ? 'form__focused' : ""} onSubmit={handleForm}>
                    <button type="submit">
                        <SearchOutlinedIcon />
                    </button>
                    <input
                        type='text'
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder='Search in messages'
                        ref={inputRef}
                    />
                    {
                        query && <div className='clear__icon' onClick={() => setQuery("")}>
                            <CloseOutlinedIcon />
                        </div>
                    }
                    <div className='filter__icon'>
                        <TuneOutlinedIcon />
                    </div>
                </form>
                <div className='help__icon'>
                    <HelpOutlineOutlinedIcon />
                </div>
                <div className='setting__icon'>
                    <SettingsOutlinedIcon />
                </div>
            </div>
            <div className='header__right'>
                <div className='grid__icon'>
                    <AppsOutlinedIcon />
                </div>
                <div className='user'>
                    <span className='user__letter'>R</span>
                </div>
            </div>
        </header>
    )
}

export default Header