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
import FooterTop from '../../components/Footer/FooterTop';
import FooterBottom from '../../components/Footer/FooterBottom';


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
     <FooterTop/>
     <FooterBottom/>
    </div>
    </div>
  
  )
}

export default Home
