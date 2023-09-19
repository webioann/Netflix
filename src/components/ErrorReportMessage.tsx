import React from 'react'
import { IoClose } from 'react-icons/io5'
import '../style/error-message.scss'

type closePopupType = {
    closePopup: () => void;
    message: string | null
}

const ErrorReportMessage: React.FC<closePopupType> = ({ closePopup, message }) => {
    
    return (
        <div className='popup-wrapper' onClick={closePopup}>
            <div className='icon-row'>
                <IoClose className='icon'/>
            </div>
            <h2 className='error-message'>ERROR : { message }</h2>
        </div>
    )
}

export default ErrorReportMessage;