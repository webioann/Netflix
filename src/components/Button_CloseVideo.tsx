import React from 'react'
import { IoClose } from 'react-icons/io5'
import '../style/close-button.scss'

type CloseVideoButtonProps = {
    onClose: () => void
    color: string
    size: number
}

const Button_CloseVideo: React.FC<CloseVideoButtonProps> = ({onClose, color, size}) => {
    // only to close video player
    return (
        <div className='close-button'>
            <span className='close-icon-box'
                onClick={onClose}>
                <IoClose color={color} size={size}/>
            </span>
        </div>
    )
}

export default Button_CloseVideo;
