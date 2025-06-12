
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './css/Navbar.css';

// const Navbar = () => {
//   const [dropdown, showDropdown] = useState(false);
//   const [dropdown2, showDropdown2] = useState(false);
//   const [clickedCourse, setClickedCourse] = useState('');

//   useEffect(() => {
//     if (clickedCourse) {
//       console.log(`Clicked ${clickedCourse}`);
//     }
//   }, [clickedCourse]);

//   const updateDept = (dept) =>{
//     setClickedCourse(dept);
//   }

//   return (
//     <nav>
//       <li><Link to="/" className='link'>Home</Link></li>

//       <li>
//         <div 
//           className="dropdown" 
//           onMouseEnter={() => showDropdown2(true)} 
//           onMouseLeave={() => showDropdown2(false)}
//         >
//           <span className='link'>Placements</span>
//           {dropdown2 && (
//             <ul className='dropdown-list'>
//               <li><Link to='/aids' className='dropdown-link' >IT</Link></li>
//               <li><Link to='/aiml' className='dropdown-link' >Core</Link></li>
//               <li><Link to='/cce' className='dropdown-link' >IT&Core</Link></li>
//             </ul>
//           )}
//         </div>
//       </li>

//       <li>
//         <div 
//           className="dropdown" 
//           onMouseEnter={() => showDropdown(true)} 
//           onMouseLeave={() => showDropdown(false)}
//         >
//           <span className='link'>Courses</span>
//           {dropdown && (
//             <ul className='dropdown-list'>
//               <li><Link to='/aids' className='dropdown-link' onClick={()=> updateDept('AIDS')}>AIDS</Link></li>
//               <li><Link to='/aiml' className='dropdown-link' onClick={()=> updateDept('AIML')}>AIML</Link></li>
//               <li><Link to='/cce' className='dropdown-link' onClick={()=> updateDept('CCE')}>CCE</Link></li>
//               <li><Link to='/it' className='dropdown-link' onClick={()=> updateDept('IT')}>IT</Link></li>
//             </ul>
//           )}
//         </div>
//       </li>

//       <li><Link to="/login" className='link'>Login</Link></li>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  const [dropdown, showDropdown] = useState(false);
  const [dropdown2, showDropdown2] = useState(false);
  const [clickedCourse, setClickedCourse] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLogin") === "true");

  const navigate = useNavigate();

  useEffect(() => {
    if (clickedCourse) {
      console.log(`Clicked ${clickedCourse}`);
    }
  }, [clickedCourse]);

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(localStorage.getItem("isLogin") === "true");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const updateDept = (dept) => {
    setClickedCourse(dept);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav>
      <li><Link to="/" className='link'>Home</Link></li>

      <li>
        <div
          className="dropdown"
          onMouseEnter={() => showDropdown2(true)}
          onMouseLeave={() => showDropdown2(false)}
        >
          <span className='link'>Placements</span>
          {dropdown2 && (
            <ul className='dropdown-list'>
              <li><Link to='/aids' className='dropdown-link'>IT</Link></li>
              <li><Link to='/aiml' className='dropdown-link'>Core</Link></li>
              <li><Link to='/cce' className='dropdown-link'>IT&Core</Link></li>
            </ul>
          )}
        </div>
      </li>

      <li>
        <div
          className="dropdown"
          onMouseEnter={() => showDropdown(true)}
          onMouseLeave={() => showDropdown(false)}
        >
          <span className='link'>Courses</span>
          {dropdown && (
            <ul className='dropdown-list'>
              <li><Link to='/aids' className='dropdown-link' onClick={() => updateDept('AIDS')}>AIDS</Link></li>
              <li><Link to='/aiml' className='dropdown-link' onClick={() => updateDept('AIML')}>AIML</Link></li>
              <li><Link to='/cce' className='dropdown-link' onClick={() => updateDept('CCE')}>CCE</Link></li>
              <li><Link to='/it' className='dropdown-link' onClick={() => updateDept('IT')}>IT</Link></li>
            </ul>
          )}
        </div>
      </li>

      <li>
        {isLoggedIn ? (
          <span className='link' onClick={handleLogout}>Logout</span>
        ) : (
          <Link to="/login" className='link'>Login</Link>
        )}
      </li>
    </nav>
  );
};

export default Navbar;
