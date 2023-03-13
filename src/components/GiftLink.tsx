import React from 'react'
import { Link } from 'react-router-dom'
import { BiGift } from 'react-icons/bi'

const GiftLink = () => {
    return (
        <Link to={'/gifts'}>
            <BiGift  size={20} color='#fff'/>
        </Link>
    )
}

export default GiftLink;