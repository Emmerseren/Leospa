import React from 'react'
import {Link} from "react-router-dom"

const Burgermenu = ({closeBurgerMenu}) => {
  
  return (
    <>
    <div className='burger__Modal'>
        <span onClick={() => closeBurgerMenu(false)} className="material-symbols-outlined burger__Close">close</span>

         <ul className='burger__List'>
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <a href="">ABOUT</a>
        </li>
        <li>
            <a href="">FEATURE</a>
        </li>
        <li>
            <a href="">SERVICE</a>
        </li>
        <li>
            <a href="">CONTACT</a>
        </li>
    </ul>
    </div>
    </>
  )
}

export default Burgermenu