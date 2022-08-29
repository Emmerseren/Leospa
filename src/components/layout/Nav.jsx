import {useState} from 'react'
import { Link } from 'react-router-dom'
import Burgermenu from './Burgermenu'


const Nav = () => {

    const [openBurger, setOpenBurger] = useState(false)
    

  return (
      <>
      <span onClick={() => {setOpenBurger(true);}} className="material-symbols-outlined burger__Menu">menu</span>
{openBurger && <Burgermenu closeBurgerMenu={setOpenBurger}/> }
      <nav>
      <img className='logo'  src="images/logo.png" alt=""/>

    <ul className='list'>
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
    
      </nav>
      </>
  )
}

export default Nav