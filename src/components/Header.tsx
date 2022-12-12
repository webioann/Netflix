import React from 'react'
import '../style/header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <img className='netflix-logo'
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="Netflix logo"/>
                <img className='avatar-logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                    alt="avatar logo"/>
            </div>
        </header>
    )
}

export default Header