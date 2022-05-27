import React,{useState} from 'react'
import './Hotel.scss'
import Navbar from '../../components/Navbar/Navbar'
import SecondNav from '../../components/SecondNav/SecondNav';
import FooterTop from '../../components/Footer/FooterTop';
import FooterBottom from '../../components/Footer/FooterBottom';
import MailList from '../../components/MailList/MailList';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

const Hotel = () => {

  const [sliderNum,setSliderNum] = useState(0);
  const [open,setOpen] = useState(false)

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleSlider=(i)=>{
    setSliderNum(i)
    setOpen(true)
  }


  return (
    <div className='hotel'>
      <div className='wrap1'>
        <Navbar/>
        <SecondNav/>
      </div>
      {open &&
      <div style={{opacity:open?100:0}} className="slider">
        <CloseIcon className='close' onClick={()=>setOpen(false)}/>
        <div className='sliderwrapper'>
        <ChevronLeftRoundedIcon className="arrow" onClick={()=>sliderNum!==0 ? setSliderNum(x=>x-1):setSliderNum(photos.length-1)}/>
          <img className='sliderimg' src={photos[sliderNum].src} alt="selected-image"/>
          <ChevronRightIcon className="arrow" onClick={()=>sliderNum!==photos.length-1 ? setSliderNum(x=>x+1):setSliderNum(0)}/>  
        </div> 
      </div>}
        <div className="topcont">
          <div className="topwrap">
            <div className="info">
              <span className='head'>Tower Street Apartments</span>
              <span className='loc'>28 Ridgway road, LU2LRR,Luton,England</span>
              <span className='infoloc'>Excellent Location - 500m from center</span>
              <span className='instruct'>Book a stay over for 140£ at this property and get a free airport taxi</span>
            </div>
            <div className='bookBtnWrap'><button className="bookBtn">Reserve or Book Now!</button></div>
          </div>
          <div className='imggrid'>
            {photos.map((photo,i)=>(
              <img className='images' onClick={()=>handleSlider(i)} key={i} src={photo.src} alt="property_image"/>
            ))
            }
          </div>
          <div className="bottomcont">
            <div className='bottomleftWrap'>
              <div className='bottomleft'>
                <h1>Stay in the heart of London</h1>
                <p>Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                  Street Apartments has accommodations with air conditioning and
                  free WiFi. The units come with hardwood floors and feature a
                  fully equipped kitchenette with a microwave, a flat-screen TV,
                  and a private bathroom with shower and a hairdryer. A fridge is
                  also offered, as well as an electric tea pot and a coffee
                  machine. Popular points of interest near the apartment include
                  Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                  airport is John Paul II International Kraków–Balice, 16.1 km
                  from Tower Street Apartments, and the property offers a paid
                  airport shuttle service.</p>
              </div>
            </div>
            <div className='bottomright'>
              <div className='bottomrightWrap'>
              <span className='toph'>Perfect for a 9-night Stay!</span>
              <p>Located in the real heart of London,<br/> this property has an excellent location score
                of 9.9!</p>
              <div style={{fontSize:"0.9rem"}} className='spandiv'>
                <span style={{fontWeight:"700"}}>945£</span>
                <span >{`(9-nights)`}</span>
              </div>
                <BookBtn/>
              </div>
            </div>
          </div>
        </div>
        <MailList/>
        <FooterTop/>
        <FooterBottom/>
        </div>
  )
}

const BookBtn=()=>(
  <div className='bookBtnWrap2 '><button className="bookBtn2">Reserve or Book Now!</button></div>
)

export default Hotel
