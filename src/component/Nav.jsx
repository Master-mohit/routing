import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-80vw h-20vw bg-zinc-600 text-white p-8 flex items-center justify-between'>
    <div className='flex items-center justify-center gap-4 '>
    <h1>heloooooo</h1>
    </div>
    <div className='items-center justify-between flex gap-5'>
     
       <Link to="/about"><h1>about</h1></Link>
       <Link to="/contact"><h1>contact</h1></Link>
       <Link to="/shop"><h1>shop</h1></Link>
    </div>
  </div>
  )
}

export default Nav
