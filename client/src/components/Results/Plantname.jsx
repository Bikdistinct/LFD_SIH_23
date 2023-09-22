import React from 'react'
import "./plantname.css";
import Alovera from "../../assets/alovera.png"
function Plantname() {
  return (
<div class="Plant_grid-container">
  <div class="Plant_grid-item item1 itemL"></div>
  <div class="Plant_grid-item item2 itemM">
    <span id='line-span'></span>
    <span id='text-span'>Aloe vera</span>
    <span id='line-span'></span>
  </div>
  <div class="Plant_grid-item item3 itemR"></div>  
  <div class="Plant_grid-item item4 itemL">
    <p>1.Scientific name</p>
    <p className='plant-des'>Aloe barbadensis miller</p>
  </div>
  <div class="Plant_grid-item item5 itemM">
    <img src={Alovera} />
  </div>
  <div class="Plant_grid-item item6 itemR">
    <p>2.Local name</p>
    <p className='plant-des'>Gwar Patha or Ghrit Kumari</p>
  </div>  
  <div class="Plant_grid-item item7 itemL">
    <p>3.Locations</p>
    <p className='plant-des'>Mainly distributed in the extreme dry parts of Rajasthan and Gujarat state. In other states of India, it is grown as a medicinal plant.</p>
  </div>
  <div class="Plant_grid-item item8 itemR">
    <p>4.Family</p>
    <p className='plant-des'>alovera</p>
  </div>
 
</div>
  )
}

export default Plantname