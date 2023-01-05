import React from 'react'
import { Link } from 'react-router-dom'
import { LOGO_BIG, LOGO_MOBILE } from '../helpers/constants'
import '../style/netflix-logo.scss'

const NetflixLogo = () => {

    return (
        <>
            <Link to={'/'} className='netflix-logo'>
                <img className='logo logo-big' src={LOGO_BIG} alt="Netflix logo"/>
                <img className='logo logo-mobile' src={LOGO_MOBILE} alt="Netflix logo"/>
            </Link> 
        </>
    )
}
export default NetflixLogo;