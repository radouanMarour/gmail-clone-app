import React, { useEffect, useState } from 'react'
import './MailDetails.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { StarBorderOutlined, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, deleteDoc, collection } from "firebase/firestore";
import { db } from "../firebase";


function MailDetails() {
    const { id } = useParams();
    const [email, setEmail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getEmail = async () => {
            const emailRef = doc(db, "emails", id);
            const emailSnap = await getDoc(emailRef);

            if (emailSnap.exists()) {
                setEmail(emailSnap.data());
            } else {
                // docSnap.data() will be undefined in this case
                alert("No such document!");
            }
        }
        getEmail();
    }, [id])

    const deleteMail = async () => {
        await deleteDoc(doc(db, 'emails', id));
        navigate("/inbox");
    }

    if (!email) {
        return <h1>Wait please...</h1>
    }

    return (
        <div className='mail__details'>

            <div className='mails__header'>
                <div className='header__left'>
                    <Link to="/inbox" className='icon'>
                        <ArrowBackIcon />
                        <span>Back to inbox</span>
                    </Link>
                    <div className='icon' onClick={deleteMail}>
                        < DeleteForeverIcon />
                        <span>Delete</span>
                    </div>
                </div>
                <div className='header__right'>
                    <div className='sort__btn'>
                        <p>50 of 6249</p>
                    </div>
                    <div className='pagination__ctrl'>
                        <div className='icon'>
                            <KeyboardArrowLeft />
                            <span>Older</span>
                        </div>
                        <div className='icon'>
                            <KeyboardArrowRight />
                            <span>Newer</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mail__details__content'>
                <p className='subject'>{email.subject}</p>
                <div className='sender'>
                    <div className='sender__info'>
                        <p><strong>{email.from?.name} </strong>{email.from?.email}</p>
                    </div>
                    <div className='recieve__date'>
                        <p>{new Date(email.timestamp.seconds * 1000).toUTCString()}</p>
                        <div className='icon'>
                            <StarBorderOutlined />
                        </div>
                        <div className='icon'>
                            <ReplyIcon />
                        </div>
                    </div>
                </div>
                <div className='message'>
                    <p>{email.message}</p>
                </div>
            </div>
        </div>
    )
}

export default MailDetails