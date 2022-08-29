import React from 'react'
import {DataContext} from "../context/DataContext";
import {useContext} from "react";


const Contact = () => {

   
  const{treatment} = useContext(DataContext) 
  
  return (

    
    
<div className='contact__Container'>
  
  <div className='contact__Img'>
   <img src='images/appointment-img.jpg'/>
  </div>
  <form className='form' action="">
    <input type="text" placeholder='NAME' />
    <input type="email" placeholder='EMAIL' />
    <select name="services" id="services" placeholder='SELCET SERVICE'>
   
    {!treatment ? null :treatment.map((item) =>(
        
        
        <option key={item._id} value="spa"> {item.title}</option>
        ))
      }
    
    </select>
    <input type="number" placeholder='PHONE NUMBER' />
    <input type="date" />
    <input type="time" />
    <input type="text" placeholder='YOUR NOTES' />
    <button className='submission' > MAKE AN APPOINTMENT</button>
  </form>
</div>
    )
}

export default Contact