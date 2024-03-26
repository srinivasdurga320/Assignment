// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const { pathname } = useLocation();

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/" className="logo">
//           <span>Cars Sales Dashboard</span>
//         </Link>
//       </div>
//       <ul className="navbar-nav">
//         <li className={`nav-item ${pathname === "/ford" ? "active" : ""}`}>
//           <Link to="/ford">Ford</Link>
//         </li>
//         <li className={`nav-item ${pathname === "/bmw" ? "active" : ""}`}>
//           <Link to="/bmw">Benz</Link>
//         </li>
//         <li className={`nav-item ${pathname === "/Nissan" ? "active" : ""}`}>
//           <Link to="/Nissan">Nissan</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from '../Images/logo1.png'

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="logo">
            <span>Cars Sales Dashboard</span>
          </Link>
        </div>
        <ul className="navbar-nav">
          <li className={`nav-item ${pathname === "/ford" ? "active" : ""}`}>
            <Link to="/ford">Ford</Link>
          </li>
          <li className={`nav-item ${pathname === "/bmw" ? "active" : ""}`}>
            <Link to="/bmw">BMW</Link>
          </li>
          <li className={`nav-item ${pathname === "/Nissan" ? "active" : ""}`}>
            <Link to="/Nissan">Nissan</Link>
          </li>
        </ul>
      </nav> */}

      <div>
            <nav>
                <div className="logo">
                  <img src={logo} alt=""/>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={isOpen ? "nav-links open" : "nav-links"}>
                    <li ><a href="/ford" className={`${pathname === "/ford" ? "active" : ""}`}>Ford</a></li>
                    <li><a href="/bmw" className={`${pathname === "/bmw" ? "active" : ""}`}>BMW</a></li>
                    <li><a href="/Nissan" className={`${pathname === "/Nissan" ? "active" : ""}`}>Nissan</a></li>
                    {/* <li><a href="#">Services</a></li> */}
                    {/* <li><a href="#">Contact Us</a></li>
                    <li><button className="login-button">Login</button></li>
                    <li><button className="join-button">Join</button></li> */}
                </ul>
            </nav>
        </div>

    </>

  );
};

export default Navbar;
