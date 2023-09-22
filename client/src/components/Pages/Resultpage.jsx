import React from 'react'
import Plantname from '../Results/Plantname'
import Plantprop from '../Results/Plantprop'
import Properties from '../Results/Properties'
import Disease from '../Results/Disease'
import Footer from '../Footer/Footer'
function Resultpage() {
  return (
    <div className='resultpage'>
        <Plantname/>
        <Plantprop/>
        <Properties/>
        <Disease/>
        <Footer/>
    </div>
  )
}

export default Resultpage