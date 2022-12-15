import React from 'react'
import '../style/auth-page-footer.scss'

const AuthPageFooter = () => {
    return (
        <footer className='auth-footer'>
            <div className="auth-footer-content">
                <p className="footer-top">
                    Questions? Call 0800-509-417
                </p>
                <ul className="footer-links">
                    <li>FAQ</li>
                    <li>Help Center</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                    <li>Cookie Preferences</li>
                    <li>Corporate Information</li>
                </ul>
                <div className="lang-switcher-row">
                    <span className='lang-switcher'>ENG</span>
                </div>
            </div>
        </footer>
    )
}
export default AuthPageFooter;