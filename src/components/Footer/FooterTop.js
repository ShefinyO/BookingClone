import React from 'react'
import './FooterTop.scss'

const FooterTop = () => {
  return (
    <div className="footerTop">
       <div className="listPropertyBtnWrapper">
        <div className="listPropertyBtn">List Your Property</div>
       </div>
       <hr style={{height:"1px", border:"none" ,color:"#fff" ,backgroundColor:"#fff"}}/>
       <div className="linksMain">
          <div className='linksWrapper'>
            <span className="link">Mobile Version</span>
            <span className="link">Your Account</span>
            <span className="link">Make changes online to your booking</span>
            <span className="link">Customer service contact</span>
            <span className="link">Become an affiliate</span>
            <span className="link">Booking.com for business</span>
          </div>
       </div>
     </div>
  )
}

export default FooterTop
