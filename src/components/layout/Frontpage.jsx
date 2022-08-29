import React from 'react'
import Hero from "./Hero"
import About from './About'
import Recommendation from './Recommendation'
import Team from './Team'
import Procedures from './Procedures'
import Contact from './Contact'
import Footer from './Footer'
import Nav from './Nav'

const Frontpage = () => {
  return (
      <>
      <header>
        <Nav/>
        <Hero/> 
      </header>
    <main>
      <About/>
      <Procedures/>
      <Recommendation/>
      <Team/>
      <Contact/>
      <Footer/>
  </main>
      </>
  )
}

export default Frontpage