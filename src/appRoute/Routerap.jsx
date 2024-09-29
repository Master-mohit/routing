import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../component/About'
import Contact from '../component/Contact'
import Shop from '../component/Shop'

const Routerap = () => {
  return (
    <Routes>
       <Route path='/about' Component={About}/>
       <Route path='/contact' Component={Contact}/>
       <Route path='/shop' Component={Shop}/>
    </Routes>


  )
}

export default Routerap
