import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Season1 from './components/Season1';
import Season2 from './components/Season2';
import Classification2 from './components/Classification2';
import Comparision from './components/Comparirion';
import About from './components/About';
import Fight from './components/Fight';

// Monster-specific pages
import Sphinix from './components/Sphinix';
import Rockman from './components/Rockman';
import Tardihuman from './components/Tardihuman';
import Cybrain from './components/Cybrain';
import Werewolf from './components/Werewolf';
import Terraka from './components/Terraka';
import Vultrix from './components/Vultrix';
import Petrabyte from './components/Petrabyte';
import Terrawolfvulbyte from './components/Terrawolfvulbyte';
import Humotardilixian from './components/Humotardilixian';
import Gorkon from './components/Gorkon';
import Sandrax from './components/Sandrax';
import Toxizon from './components/Toxizon';
import Flaron from './components/Flaron';
import Tardion from './components/Tardion';
import Gordraxdiozone from './components/Gordraxdiozone';
import Petrovis from './components/Petrovis';
import Flurtone from './components/Flurtone';
import Oculus from './components/Oculus';
import Tigris from './components/Tigris';
import Flurtotilus from './components/Flurtotilus';
import Fight2 from './components/Fight2';
// Misc pages
import About_HCM from './components/About_HCM';
import Origin from './components/Origin';
import Empty_Spaces from './components/Empty_Spaces';
import Login from './components/Login';
import Login2 from './components/Login2';
import OTP1 from './components/OTP1';
import Signed_In1 from './components/Signed_In1';
import Failed from './components/Failed';
export default function App2() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>

                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/season1" element={<Season1 />} />
                <Route path="/season2" element={<Season2 />} />
                <Route path="/classification" element={<Classification2 />} />
                <Route path="/comparision" element={<Comparision />} />
                <Route path="/about" element={<About />} />

                {/* Fight Routes */}
                <Route path="/fight" element={<Fight />} />
                <Route path="/fight2" element={<Fight2 />} />

                {/* Monster Detail Pages */}
                <Route path="/sphinx" element={<Sphinix />} />
                <Route path="/rockman" element={<Rockman />} />
                <Route path="/tardihuman" element={<Tardihuman />} />
                <Route path="/cybrain" element={<Cybrain />} />
                <Route path="/werewolf" element={<Werewolf />} />
                <Route path="/terraka" element={<Terraka />} />
                <Route path="/vultrix" element={<Vultrix />} />
                <Route path="/petrabyte" element={<Petrabyte />} />
                <Route path="/terrawolfvulbyte" element={<Terrawolfvulbyte />} />
                <Route path="/humotardilixian" element={<Humotardilixian />} />
                <Route path="/gorkon" element={<Gorkon />} />
                <Route path="/sandrax" element={<Sandrax />} />
                <Route path="/toxizon" element={<Toxizon />} />
                <Route path="/tardion" element={<Tardion />} />
                <Route path="/gordraxdiozone" element={<Gordraxdiozone />} />
                <Route path="/flaron" element={<Flaron />} />
                <Route path="/petrovis" element={<Petrovis />} />
                <Route path="/flurtone" element={<Flurtone />} />
                <Route path="/oculus" element={<Oculus />} />
                <Route path="/tigris" element={<Tigris />} />
                <Route path="/flurtotilus" element={<Flurtotilus />} />
                <Route path="/failed" element={<Failed />} />

                {/* Misc Routes */}
                <Route path="/about_hcm" element={<About_HCM />} />
                <Route path="/about_empty_spaces" element={<Empty_Spaces />} />
                <Route path="/origin" element={<Origin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login2" element={<Login2 />} />
                <Route path="/otp1/:type/:userID" element={<OTP1 />} />
                <Route path="/signedin1" element={<Signed_In1 />} />

            </Routes>
        </BrowserRouter>
    )
}
