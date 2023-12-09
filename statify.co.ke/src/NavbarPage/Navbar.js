import React from "react";
import "../NavbarPage/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <h5>get in touch tel: 07228732301</h5>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img
              src="https://statify.co.ke/Images/IMG-20230305-WA0043.jpg"
              alt="Logo"
              className="logo"
            />
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>

            {/* Services dropdown */}
            <li className="dropdown">
              <a href="#services" className="dropbtn">
                Services
              </a>
              <div className="dropdown-content">
                <a href="#service1">Service 1</a>
                <a href="#service2">Service 2</a>
                <a href="#service3">Service 3</a>
              </div>
            </li>

            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
