import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Classification from './components/Classification'
import Comparision from './components/Comparirion'
import About from './components/About'
import Cybrain from './components/Cybrain'
import Sphinix from './components/Sphinix'
import Rockman from './components/Rockman'
import Tardihuman from './components/Tardihuman'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='classification' element={<Classification/>}/>  
      <Route path='comparision' element={<Comparision/>}/>  
      <Route path='about' element={<About/>}/>  
      <Route path='/sphinx' element={<Sphinix />} />
      <Route path='/rockman' element={<Rockman />} />
      <Route path='/tardihuman' element={<Tardihuman/>}/>
      <Route path='/cybrain' element={<Cybrain/>}/>
      </Routes>

      
    
          
      
      </BrowserRouter>
    </div>
  )
}
