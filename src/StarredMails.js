import React from 'react'
import Mail from './Mail/Mail'
import MailsHeader from './components/MailsHeader/MailsHeader'

function StarredMails() {
    return (
        <div className='mail__list starred__mails'>
            <MailsHeader />
            <div className='mails'>
                {/* <Mail /> */}
            </div>
        </div>
    )
}

export default StarredMails