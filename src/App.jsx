import React from 'react'
import Nav from './component/Nav'
import Routerap from './appRoute/Routerap'


const App = () => {
  return (
    <div className='w-screen h-screen bg-zinc-900 text-white'>
       <Nav/>
       <Routerap/>
    </div>
  )
}

export default App
