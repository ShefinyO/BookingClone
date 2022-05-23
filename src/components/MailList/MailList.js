import React from 'react'
import './MailList.scss'

const MailList = () => {
  return (
    <div className='mailListCont'>
        <div className="mailList">
            <div className='topPart'>
                <span className="first">{`Save time, save money!`}</span>
                <span className="second">{`Sign up and we will send the best deals to you`}</span>
            </div>
            <div className="subscribe">
                <input placeholder='Email' type="text"/>
                <button>Subscribe</button>
            </div>
            <div className="check">
                <input type="checkbox"/>
                <span className="message">{`Send me a link to get the FREE Booking.com app now!`}</span>
            </div>
        </div>
    </div>
  )
}

export default MailList
