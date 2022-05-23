import React from 'react'
import './featuredProperties.scss'

const FeaturedProperties = () => {

    const data = [
        {
            title:"Apart Hotel Star Miasto",
            image:"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            place:"Madrid",
            price:"Starting from £100",
            rating:"8.9",
            rank:"Excellent"

        },
        {
            title:"Comfort Suites",
            image:"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            place:"Austin",
            price:"Starting from £100",
            rating:"9.0",
            rank:"Excellent"

        },
        {
            title:"Four Seasons Hotel",
            image:"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            place:"Lisbon",
            price:"Starting from 150£",
            rating:"7.0",
            rank:"Average"

        },
        {
            title:"Hilton Garden Inn",
            image:"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
            place:"England",
            price:"Starting from 120£",
            rating:"5.0",
            rank:"Poor"

        }
    ]
  return (
    <div className="featuredPropCont">
      <div className = "featuredPropWrapper">
          {data.map((property,i)=>(
              <div key={i} className= "featuredProp">
              <img src={`${property.image}`} className = "featuredPropImg"/>
              <div className = "featuredPropDetails">
                  <div className='title1'>{property.title}</div>
                  <div className='place'>{property.place}</div>
                  <div className='price'>{property.price}</div>
                  <div style={{display:"flex", alignItems:"center"}}>
                  <span className='rating'>{property.rating}</span>
                  <span className='rank'>{property.rank}</span>
                  </div>
              </div>
            </div>
          ))}
      </div>
      </div>
  )}


export default FeaturedProperties
