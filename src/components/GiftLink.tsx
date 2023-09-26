import React from 'react'
import { Link } from 'react-router-dom'
import { BiGift } from 'react-icons/bi'
import '../style/fake-links.scss'

const GiftLink = () => {
    // mock link button
    return (
        <Link to={'/gifts'} className='fake-link'>
            <BiGift  size={16} color='#fff'/>
        </Link>
    )
}

export default GiftLink;