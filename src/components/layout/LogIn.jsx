import {useState, useEffect} from 'react'
import Nav from "./Nav"
import logincss from "./login.module.scss"
import {postLogin} from "../helpers/apicall"
import Dashboard from './Dashboard'
import {   BrowserRouter as Router, Routes, Route,} from 'react-router-dom'



const LogIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)
  

  const handleSubmit = async (e) => {
    e.preventDefault(email,password,);
    postLogin(email, password, setSuccess);
    console.log(email, password);
    
    
    
    
  }

 


 

  return (

    <> 
    {success ?   ( 
      <Dashboard/>  ) : (
        
        <>
  <header>

    <Nav/>
    </header>
    <section className={logincss.login}>

    <div className={logincss.login__Container}>
            <p className={logincss.login__Title}> Login</p>
        <form>
            <input name="email" className={logincss.email} placeholder="EMAIL" type="email" onChange={(e) => setEmail(e.target.value)} />
            <input name="password" className={logincss.password} placeholder="PASSWORD" type="password" onChange={(e) => setPassword(e.target.value)} />
        
        <button className={logincss.login__Submit} onClick={handleSubmit} >
            Login
        </button>
        </form>
        <img className={logincss.login__Jasmine} src="images/jasmine.png" alt="" />
    </div>
    </section>
    </>
      )}   </>
    
    
  )
}

export default LogIn