import React from 'react'
import { IoClose } from 'react-icons/io5'
import '../style/close-button.scss'

type CloseButtonProps = {
    onClose: () => void
    color: string
    size: number
}

const VideoClose_Button: React.FC<CloseButtonProps> = ({onClose, color, size}) => {
    return (
        <div className='close-button'>
            <span className='close-icon-box'
                onClick={onClose}>
                <IoClose color={color} size={size}/>
            </span>
        </div>
    )
}

export default VideoClose_Button;
