// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from '../components/Login'
import { ToastContainer } from 'react-toastify'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "../components/SignUp"
import CCE from '../components/courses/CCE'
import IT from '../components/courses/IT'
import AIML from '../components/courses/AIML'
import AIDS from '../components/courses/AIDS'
import CSE from '../components/courses/CSE'


function App() {
  

  return (
   <div>
    <div>
      <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cse" element={<CSE/>}/>
        <Route path="/aids" element={<AIDS/>}/>
        <Route path="/aiml" element={<AIML/>}/>
        <Route path="/cce" element={<CCE/>}/>
        <Route path="/it" element={<IT/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
     <ToastContainer/>
    </div>
   </div>
  )
}

export default App
