import React from 'react'
import Propimages from '../../assets/Rectangle_13.png';
import Usageimages from '../../assets/Rectangle_12.png';
import RightArrow from "../../assets/Vector_1.png"
import './plantprop.css';
function Plantprop() {
  return (
    <div className='plantprop'>
        <div className='prop-cont med-prop'>
            <img src={Propimages} className='prop-img' />
            <div className="overlay-text"><p>Medicinal Properties </p><img src={RightArrow}/></div>
        </div>
        <div className='prop-cont usage'>
            <img src={Usageimages} className='prop-img' />
            <div className="overlay-text"><p>Disease Cure & Usages</p><img src={RightArrow}/></div>
        </div>
    </div>
  )
}

export default Plantprop