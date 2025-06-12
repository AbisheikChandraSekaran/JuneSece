// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import Login from '../components/Login'
// import { ToastContainer } from 'react-toastify'
// import Navbar from '../components/Navbar'
// import Home from '../components/Home'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import SignUp from "../components/SignUp"
// import CCE from '../components/courses/CCE'
// import IT from '../components/courses/IT'
// import AIML from '../components/courses/AIML'
// import AIDS from '../components/courses/AIDS'
// import CSE from '../components/courses/CSE'


// function App() {
  

//   return (
//    <div>
//     <div>
//       <BrowserRouter>
//        <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/cse" element={<CSE/>}/>
//         <Route path="/aids" element={<AIDS/>}/>
//         <Route path="/aiml" element={<AIML/>}/>
//         <Route path="/cce" element={<CCE/>}/>
//         <Route path="/it" element={<IT/>}/>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/signup" element={<SignUp/>}/>
//       </Routes>
//       </BrowserRouter>
//      <ToastContainer/>
//     </div>
//    </div>
//   )
// }

// export default App


import './App.css';
import Login from '../components/Login';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "../components/SignUp";
import CCE from '../components/courses/CCE';
import IT from '../components/courses/IT';
import AIML from '../components/courses/AIML';
import AIDS from '../components/courses/AIDS';
import CSE from '../components/courses/CSE';

function App() {
  const isLogin = localStorage.getItem("isLogin") === "true";

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={isLogin ? <Home /> : <Login />} />
          <Route path="/cse" element={isLogin ? <CSE /> : <Login />} />
          <Route path="/aids" element={isLogin ? <AIDS /> : <Login />} />
          <Route path="/aiml" element={isLogin ? <AIML /> : <Login />} />
          <Route path="/cce" element={isLogin ? <CCE /> : <Login />} />
          <Route path="/it" element={isLogin ? <IT /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
