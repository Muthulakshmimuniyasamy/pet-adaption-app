import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './Components/Signin'
import Pett from './Components/Pett'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return(
  <div>    
<div></div>
    <Router> 
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Pett' element={<Pett/>} />
       
      </Routes>
    </Router>
    </div>
  )
}

export default App
