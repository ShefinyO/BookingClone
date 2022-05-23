import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'
import SecondNav from '../../components/SecondNav/SecondNav';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format';
import Featured from '../../components/featured/Featured';
import PropertyType from '../../components/propertyType/propertyType';
import FeaturedProperties from '../../components/featuredProperties/featuredProperties';
import MailList from '../../components/MailList/MailList';


const Home = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openDate,setOpenDate] = useState(false)
  const [openBox,setOpenBox] = useState(false)
  const [options,setOptions] = useState({
    adults:0,
    children:0,
    room:0
  })

  const handleOptions =(name,operator)=>{
    if(operator==="+"){
      setOptions({...options,[name]:options[name]+1})
    }else if(operator==="-"){
      setOptions({...options,[name]:options[name]-1})
    }
  }

  return (
    <div className='topside'>
 
    <div className='home'>
        <Navbar/>
        <SecondNav/>
        <div className="detail">
          <div className='title'>A Lifetime of Discounts? It's Genius</div>
          <div className="description">Get rewarded for your travels-unlock instant savings of 10% or more with a free Booking.com account</div>
          <div className='inorupW'><button className='inorup'>SignIn/Register</button></div>
          <div style={{display:"flex", justifyContent:"center"}}>
          <div className="headersearch">
      <div className='searchItem'>
        <AttractionsOutlinedIcon/>
        <input placeholder='Where are you going?'/>
      </div>
      <div className = "searchItem date">
        <div className="dateIcon" onClick={()=>{setOpenDate(x=>!x)
        console.log()}}><FlightLandOutlinedIcon/></div>
        <span className='searchtext'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
        {openDate&&<DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className = "calendar"
        />}
      </div>
      <div className = "searchItem">
        <div style={{cursor:"pointer"}} onClick={()=>setOpenBox(x=>!x)}><FlightLandOutlinedIcon/></div>
        <span className='searchtext'>{`Adults ${options.adults} Children ${options.children} Room ${options.room}`}</span>
        { openBox &&
        <div className = "counterTab">
            <div className='counters '>
              <span className='name'>Adult</span>
              <div className = "counterWrapper">
                <button onClick={()=>handleOptions("adults","-")}>-</button>
                <span>{`${options.adults}`}</span>
                <button onClick={()=>handleOptions("adults","+")}>+</button>
              </div>
            </div>
            <div className='counters top'>
              <span className='name'>Children</span>
              <div className = "counterWrapper">
              <button onClick={()=>handleOptions("children","-")}>-</button>
              <span>{`${options.children}`}</span>
              <button onClick={()=>handleOptions("children","+")}>+</button>
              </div>
            </div>
            <div className='counters bottom'>
              <span className='name'>Room</span>
              <div className='counterWrapper'>
              <button onClick={()=>handleOptions("room","-")}>-</button>
              <span>{`${options.room}`}</span>
              <button onClick={()=>handleOptions("room","+")}>+</button>
              </div>
            </div>
          </div>
}
      </div>
    </div>
    </div>
        </div>
     <Featured/>
     <PropertyType/>
     <FeaturedProperties/>
     <MailList/>
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

     <div className='footerBottom'>
        <div className="fBMain">
          <div className="fbWrapper">
            <div className='links1Wrapper'>
              <span className="link1">Countries</span>
              <span className="link1">Regions</span>
              <span className="link1">Cities</span>
              <span className="link1">Districts</span>
              <span className="link1">Airports</span>
              <span className="link1">Hotels</span>
              <span className="link1">Places of Internet</span>
            </div>
            <div className='links1Wrapper'>
              <span className="link1">Apartments</span>
              <span className="link1">Villa</span>
              <span className="link1">Resorts</span>
              <span className="link1">Hotels</span>
              <span className="link1">Guest House</span>
              <span className="link1">Resorts</span>
              <span className="link1">Villa</span>
            </div>
            <div className='links1Wrapper'>
              <span className="link1">Unique destinations</span>
              <span className="link1">Reviews</span>
              <span className="link1">Discover</span>
              <span className="link1">Unpacked Travel articles</span>
              <span className="link1">Travel communities</span>
              <span className="link1">Seasonal and holiday deals</span>
              <span className="link1"></span>
            </div>
            <div className='links1Wrapper'>
              <span className="link1">Flight finder</span>
              <span className="link1">Car rental</span>
              <span className="link1">Restaurant reservations</span>
              <span className="link1">Booking.com for travel agents</span>
            </div>
            <div className='links1Wrapper'>
              <span className="link1">Coronavirus Covid-19 FAQ</span>
              <span className="link1">About Booking.com</span>
              <span className="link1">Customer service help</span>
              <span className="link1">Careers</span>
              <span className="link1">Sustainability</span>
              <span className="link1">Investor relations</span>
              <span className="link1">Partner help</span>
              <span className="link1">way we work</span>
              <span className="link1">Dispute resolutions</span>
              <span className="link1">Privacy and Cookie statement</span>
              <span className="link1">Cookies settings</span>
              <span className="link1">Corporate contact</span>
              <span className="link1">Customer service help</span>
              <span className="link1">Sustainability</span>
              <span className="link1">way we work</span>
            </div>
          </div>
        </div>
     </div>
    </div>
    </div>
  
  )
}

export default Home
