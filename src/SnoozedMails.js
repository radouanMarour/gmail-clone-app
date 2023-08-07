import React from 'react'
import Mail from './Mail/Mail'
import MailsHeader from './components/MailsHeader/MailsHeader'

function SnoozeddMails() {

    return (
        <div className='mail__list snoozed__mails'>
            <MailsHeader />
            <div className='mails'>
                {/* <Mail /> */}
            </div>
        </div>
    )
}

export default SnoozeddMails