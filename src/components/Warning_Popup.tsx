import React from 'react'
import { IoClose } from 'react-icons/io5'
import '../style/warning-popup.scss'

type closePopupType = {
    closePopup: () => void;
}

const Warning_Popup: React.FC<closePopupType> = ({ closePopup }) => {
    
    return (
        <div className='popup-wrapper' onClick={closePopup}>
            <div className='icon-row'>
                <IoClose className='icon'/>
            </div>
            <h3>You are doing something wrong.</h3>
            <h3>Attention, please.</h3>
        </div>
    )
}

export default Warning_Popup;