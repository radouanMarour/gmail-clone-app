import React, { useState } from 'react';
import './SendMail.css';
import { Close } from '@mui/icons-material';
import { db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function SendMail({ setShowSendMail }) {
    const [recipients, setRecipients] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (recipients === "" || subject === "" || message === "") {
            alert("All fields are required !");
            return;
        }

        const emailRef = await addDoc(collection(db, "emails"), {
            to: recipients,
            from: {
                name: "hamza",
                email: "hamza@gmail.com"
            },
            subject,
            message,
            timestamp: serverTimestamp()
        })
        if (emailRef.id) {
            alert("Email send successfully");
        }
    }

    return (
        <div className='send__mail'>
            <div className='top'>
                <p>New Message</p>
                <div className='close__icon' onClick={() => setShowSendMail(false)}>
                    <Close />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='recipients'
                    value={recipients}
                    placeholder='Recipients'
                    onChange={(e) => setRecipients(e.target.value)}
                />
                <input
                    type='text'
                    name='subject'
                    value={subject}
                    placeholder='Subject'
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    cols={10}
                    rows={15}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                <div>
                    <button type='submit'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendMail