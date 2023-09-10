import React from 'react'
import { Link } from 'react-router-dom'
import '../style/fake-links.scss'

const KidsLink = () => {
    
    return (
        <Link 
            className='g-link fake-link' 
            style={{fontWeight: 400, fontSize: '0.8em'}}
            to={'/kids'}>
                KIDS
        </Link>
    )
}

export default KidsLink;