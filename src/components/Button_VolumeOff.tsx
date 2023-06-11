import React from 'react'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import '../style/buttons.scss'

const Button_VolumeOff = () => {
    return (
        <button className="small-circle-button">
            <HiVolumeOff size={12} color='#fff'/>
        </button>
    )
}
export default Button_VolumeOff;