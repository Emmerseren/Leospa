import React from 'react'
import {Routes,Route,} from 'react-router-dom'

import LogIn from './components/layout/LogIn'
import Frontpage from './components/layout/Frontpage'

import DataProvider from "./components/context/DataContext"



const App = () => {

  
  return (
    <>
<Routes>
    <Route path="/login" element={<LogIn/>}/>
    <Route path="/" element={<Frontpage/>}/>
</Routes>
</>

    
  )
}

export default App