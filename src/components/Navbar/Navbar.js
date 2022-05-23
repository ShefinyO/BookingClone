import React from 'react'
import './Navbar.scss'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='navWrapper'>
            <div className='left'>BOOKING.com</div>
            <ul className="menucont">
                <li className="menuWrapper"><a className='plain'>PLN</a></li>
                <li className="menuWrapper"><a className='navicon'><HelpOutlineIcon/></a></li>
                <li className="menuWrapper"><a className='listbtn'>List your property</a></li>
                <li className="menuWrapper"><a className='navbtn'>Register</a></li>
                <li className="menuWrapper"><a className='navbtn'>SignIn</a></li>  
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
