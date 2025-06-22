import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Classification2 from './components/Classification2'
import Comparision from './components/Comparirion'
import About from './components/About'
import Cybrain from './components/Cybrain'
import Sphinix from './components/Sphinix'
import Rockman from './components/Rockman'
import Tardihuman from './components/Tardihuman'
import Werewolf from './components/Werewolf'
import Terraka from './components/Terraka'
import Vultrix from './components/Vultrix'
import Petrabyte from './components/Petrabyte'
import Terrawolfvulbyte from './components/Terrawolfvulbyte'
import Humotardilixian from './components/Humotardilixian'
import Gorkon from './components/Gorkon'
import Sandrax from './components/Sandrax'
import Toxizon from './components/Toxizon'
import Flaron from './components/Flaron'
import Tardion from './components/Tardion'
import Gordraxdiozone from './components/Gordraxdiozone'
import Petrovis from './components/Petrovis'
import Flurtone from './components/Flurtone'
import Tigris from './components/Tigris'
import Oculus from './components/Oculus'
import Flurtotilus from './components/Flurtotilus'
import Season1 from './components/Season1'
import About_HCM from './components/About_HCM'
import Origin from './components/Origin'
import Empty_Spaces from './components/Empty_Spaces'
import Login from './components/Login'
import Login2 from './components/Login2'
import Logo from './components/Logo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/season1' element={<Season1/>}/>
          <Route path='classification' element={<Classification2 />} />
          <Route path='comparision' element={<Comparision />} />
          <Route path='about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login2' element={<Login2 />} />
          <Route path='/sphinx' element={<Sphinix />} />
          <Route path='/rockman' element={<Rockman />} />
          <Route path='/tardihuman' element={<Tardihuman />} />
          <Route path='/cybrain' element={<Cybrain />} />
          <Route path='/werewolf' element={<Werewolf />} />
          <Route path='/terraka' element={<Terraka />} />
          <Route path='/vultrix' element={<Vultrix />} />
          <Route path='/petrabyte' element={<Petrabyte />} />
          <Route path='/terrawolfvulbyte' element={<Terrawolfvulbyte />} />
          <Route path='/humotardilixian' element={<Humotardilixian />} />
          <Route path='/gorkon' element={<Gorkon />} />
          <Route path='/sandrax' element={<Sandrax />} />
          <Route path='/toxizon' element={<Toxizon />} />
          <Route path='/tardion' element={<Tardion />} />
          <Route path='/gordraxdiozone' element={<Gordraxdiozone />} />
          <Route path='/flaron' element={<Flaron />} />
          <Route path='/petrovis' element={<Petrovis />} />
          <Route path='/flurtone' element={<Flurtone />} />
          <Route path='/oculus' element={<Oculus />} />
          <Route path='/tigris' element={<Tigris />} />
          <Route path='/flurtotilus' element={<Flurtotilus />} />
          <Route path='/about_empty_spaces' element={<Empty_Spaces />} />
          <Route path='/about_hcm' element={<About_HCM />} />
          <Route path='/origin' element={<Origin />} />

        </Routes>





      </BrowserRouter>
    </div>
  )
}
