import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsBellFill } from 'react-icons/bs'
import '../style/message-bell.scss'

const MessageBell = () => {

    const [messageCount, setMessageCount] = useState<number>(1)

    return (
        <Link to={'/massege'} className='bell-wrapper'>
            { messageCount > 0 && <span className='message-count' style={{color: '#fff'}}>
                {messageCount}
            </span>}
            <BsBellFill  size={16} color='#fff'/>
        </Link>
    )
}

export default MessageBell;