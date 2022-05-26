import React from 'react';
import './List.scss';
import Navbar from '../../components/Navbar/Navbar'
import SecondNav from '../../components/SecondNav/SecondNav';
import SearchItems from '../../components/searchItems/searchItems';

const List = () => {
  return (
    <div className='List'>
      <div className="navWrap">
         <Navbar/>
         <SecondNav/>
      </div>
      <div className="mainWrap">
        <div className='mainContent'>
          <div className = "searchCol">
              <div className="searchBox">
                <div className='searchWrap'>
                  <div className="searchTitle">Search</div>
                  <div className="params">
                    <label>Destination</label>
                    <input type="text"/>
                  </div>
                  <div className="params">
                    <label>Check-in-Date</label>
                    <input type="text" placeholder='Check-in Date'/>
                  </div>
                  <span className='options'>Options</span>
                  <div className='searchOptions'>
                    <div className='filter'>
                      <span>Min Price per night</span>
                      <input min={1} className='in' type="number"/>
                    </div>
                    <div className='filter'>
                      <span>Max Price per night</span>
                      <input min={1} className='in' type="number"/>
                    </div>
                    <div className='filter'>
                      <span>Adult</span>
                      <input min={1} className='in' type="number"/>
                    </div>
                    <div className='filter'>
                      <span>Children</span>
                      <input min={1} className='in' type="filter"/>
                    </div>
                    <div className='filter'>
                      <span>Room</span>
                      <input min={1} className='in' type="number"/>
                    </div>
                  </div>
                  <div className="searchButtonWrap">
                    <button className="searchBtn">Search</button>
                  </div>
                </div>
              </div>
          </div>
          <div className="listCol">
              <SearchItems/>
              <SearchItems/>
              <SearchItems/>
              <SearchItems/>
              <SearchItems/>
              <SearchItems/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
