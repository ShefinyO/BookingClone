import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import './propertyType.scss'

const PropertyType = () => {
  const data = [{
      image:"https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
      title:"Hotels",
      count:"2331"
  },
  {
    image:"https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    title:"Cabins",
    count:"2000"
  },
  {
    image:"https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    title:"Villas",
    count:"1999"
  },
  {
    image:"https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    title:"Apartments",
    count:"1800"
  },
  {
    image:"https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    title:"Hotels",
    count:"2000"
}]

  return (
    <div className = "propertyCont">
        <div className='mainTitle'>Browse By Category</div>
        <div className = "propertyWrapper">
                { data.map((type,i)=>(
                    <div key={i} className='types'>
                    <img src = {`${type.image}`} className = "propertyImg"/>
                    <div className = "propertyDescription">
                        <div className='title'>{type.title}</div>
                        <div className="counter">{type.count}</div>
                    </div>
                    </div>

                ))}
        </div>
    </div>
  )
}

export default PropertyType
