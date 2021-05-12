import React from 'react';

function NavBar () {

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav ">
          <li className="nav-item">
          <a href="#about">About Me</a>
          </li>
          <li className="nav-item">          
          <a href="#about">Portfolio</a>
          </li>
          <li className="nav-item">          
          <a href="#contact">Contact</a>
          </li>
          </ul>
        </div>
      </nav>
        </>
    )
}

export default NavBar;