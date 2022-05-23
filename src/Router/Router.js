import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Hotel from '../Pages/Hotel/Hotel'
import List from '../Pages/List/List'
import Login from '../Pages/Login/Login'

const Router = () => {
  return (
    <div className="app">
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path='/hotels' element={<List/>}/>
          <Route exact path='/hotels/:id' element={<Hotel/>}/>
      </Routes>
    </div>
  )
}

export default Router
