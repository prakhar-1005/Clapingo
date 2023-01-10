import React from 'react'
import Bottomcontainer from './Bottomcontainer'
import MIddlecontainer from './MIddlecontainer'
import Navbar from './Navbar'
import Topcontainer from './Topcontainer'
import Work from './Work'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Topcontainer/>
      <MIddlecontainer/>
      <Bottomcontainer/>
      <Work/>
    </div>
  )
}

export default Home
