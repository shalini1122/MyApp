import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
const Navbar = () => {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");

    const handleClick = () => {
      navLinks.classList.toggle("active");
      const menuOpen = navLinks.classList.contains("active");
      menuIcon.style.display = menuOpen ? "none" : "inline-block";
      closeIcon.style.display = menuOpen ? "inline-block" : "none";
    };

    hamburger.addEventListener("click", handleClick);

    return () => {
      hamburger.removeEventListener("click", handleClick); // Cleanup
    };
  }, []);

  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <a href="http://localhost:3000/">NFT</a>
        </div>

        <div className="hamburger" id="hamburger">
          <i className="fas fa-bars" id="menuIcon"></i>
          <i className="fas fa-times" id="closeIcon" style={{ display: "none" }}></i>
        </div>

        <nav className="navbar-links" id="navLinks">
         <Link to="/character">Character</Link>
         <Link to="/collection">Collections</Link>
         <Link to="/roadmap">Roadmap</Link>
         <Link to="/cryptoPrices">CryptoPrices</Link>
          <a href="#start" className="btn">View on Opensea</a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
