import React from 'react'
import '../style/account-page.scss'

const Account_Page = () => {

    return (
        <main className='account-page'>
            <section className='account'>
                <h1>Account</h1>
                <div className='section-row'>
                    <div className='left-part'>
                        <h4 className='section-title'>MEMBERSHIP & BILLING</h4>
                        <button className='cancel'>Cancel Membership</button>
                    </div>
                    <div className='right-part'>RIGHT</div>
                </div>
            </section>
        </main>
    )
}

export default Account_Page