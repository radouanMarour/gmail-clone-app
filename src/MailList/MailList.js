import React, { useEffect, useState } from 'react';
import './MailList.css';
import { ImageOutlined } from '@mui/icons-material';
import Mail from '../Mail/Mail';
import MailsHeader from '../components/MailsHeader/MailsHeader';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import OfflineWindow from '../components/OfflineWindow';


function MailList() {
    const [data, setData] = useState([]);
    const [emails, setEmails] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [orderType, setOrderType] = useState('asc');
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(5);

    useEffect(() => {
        let queryRef = query(collection(db, 'emails'), orderBy('timestamp', orderType))
        const unsubscribe = onSnapshot(queryRef,
            (snapshot) => {
                const results = [];
                snapshot.forEach((item) => results.push({ ...item.data(), id: item.id }));
                setData(results);
                setEmails(results.slice(start, end));
                console.log(results);
            }
        );

        return () => unsubscribe();
    }, [orderType]);

    useEffect(() => {
        if (start >= data.length || start < 0) return;
        setEmails(data.slice(start, end))
    }, [start, end]);


    // Function to handle pagination and update the page state
    const handlePagination = (direction) => {
        if (direction === "next") {
            if (end >= data.length) return;
            setStart(prev => prev + 5);
            setEnd(prev => prev + 5);
        } else if (direction === "prev") {
            if (start === 0) return;
            setStart(prev => prev - 5);
            setEnd(prev => prev - 5);
        }
    };

    return (
        <div className='mail__list'>
            <MailsHeader
                selectAll={selectAll}
                setSelectAll={setSelectAll}
                data={data}
                setOrderType={setOrderType}
                handlePagination={handlePagination}
                start={start}
                end={end}
            />
            <div className='tab__panel'>
                <div className='primary active__tab'>
                    <ImageOutlined /><span>Primary</span>
                </div>
                <div className='promotions'>
                    <ImageOutlined /><span>Promotions</span>
                </div>
                <div className='social'>
                    <ImageOutlined /><span>Social</span>
                </div>
            </div>
            <div className='tab__content'>
                <div className='mails'>
                    {
                        emails.length > 0 && emails.map((email, index) => {
                            return <Mail
                                key={index}
                                email={email}
                                selectAll={selectAll}
                                setSelectAll={setSelectAll}
                            />
                        })
                    }
                    {!window.navigator.onLine && <OfflineWindow />}
                </div>
            </div>
        </div>
    )
}

export default MailList