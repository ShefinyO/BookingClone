import React from 'react'
import './searchItems.scss'

const SearchItems = () => {
  return (
    <div className='maindiv'>
        <div className="mainWrap">
        <div className='imgwrap'><img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"/></div>
        <div style={{display:"flex", flex:"2",justifyContent:"space-between"}}>
        <div className='propertyDetails'>
            <span className='title'>Tower Street Apartments</span>
            <span className='distance'>500m from Town</span>
            <div style={{marginTop:"5px", display:"flex", alignItems:"center"}}><span className='free'>Free Airport Taxi</span></div>
            <span className='feature1'>Studio Apartment with Air-conditioning</span>
            <span className='feature2'>Entire Studio 1 Bathroom 1 Full Bed</span>
            <span className='cancel'>Free Cancellation</span>
            <span className='canceldetails'>You can cancel later, so lock in this great offer today</span>
        </div>
        <div className='additional'>
           <div className='ratings'>
                <span className='ratingname'>Excellent</span>
                <div style={{marginTop:"5px"}}><span className='ratingnum'>8.9</span></div>
            </div> 
            <div className="more">
                <span className="price">112$</span>
                <span className='tax'>Includes Taxes and fees</span>
            </div>
            <button className="availabilityBtn">See Availability</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default SearchItems
