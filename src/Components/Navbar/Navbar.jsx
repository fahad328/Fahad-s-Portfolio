import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import undrline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="navbar" className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <img
        src={isMenuOpen ? menu_close : menu_open}
        alt="Menu Toggle"
        className="nav-toggle"
        onClick={handleMenuToggle}
      />
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={() => setMenu("home")}>
          <a href="#home">
            <p>Home</p>
            {menu === "home" && <img src={undrline} alt="underline" />}
          </a>
        </li>
        <li onClick={() => setMenu("about")}>
          <a href="#about">
            <p>About me</p>
            {menu === "about" && <img src={undrline} alt="underline" />}
          </a>
        </li>
        <li onClick={() => setMenu("services")}>
          <a href="#services">
            <p>Services</p>
            {menu === "services" && <img src={undrline} alt="underline" />}
          </a>
        </li>
        <li onClick={() => setMenu("portfolio")}>
          <a href="#portfolio">
            <p>Portfolio</p>
            {menu === "portfolio" && <img src={undrline} alt="underline" />}
          </a>
        </li>
        <li onClick={() => setMenu("contact")}>
          <a href="#contact">
            <p>Contact</p>
            {menu === "contact" && <img src={undrline} alt="underline" />}
          </a>
        </li>
      </ul>
      <div className="nav-connect" onClick={() => window.location.href = '#contact'}>Connect with me</div>







    </div>
  );
};

export default Navbar;










