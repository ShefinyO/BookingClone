import React from 'react'
import './SecondNav.scss'
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';

const SecondNav = () => {
  return (
    <nav className='optionsmain'>
        <ul className='optionscont'>
            <li className='optionswrapper'><a className="optionsbtn" ><HotelOutlinedIcon className="optionicon"/><div>Stays</div></a></li>
            <li className='optionswrapper1'><a className = "optionsbtn"><FlightLandOutlinedIcon className="optionicon"/><div>Flights</div></a></li>
            <li className='optionswrapper1'><a className = "optionsbtn"><CarRentalOutlinedIcon className="optionicon"/><div>Car Rental</div></a></li>
            <li className='optionswrapper1'><a className = "optionsbtn"><AttractionsOutlinedIcon className="optionicon"/><div>Attractions</div></a></li>
            <li className='optionswrapper1'><a className = "optionsbtn"><LocalTaxiOutlinedIcon className="optionicon"/><div>Airport Taxis</div></a></li>
        </ul>
  </nav>
  )
}

export default SecondNav
