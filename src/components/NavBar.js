import React from 'react';
import { HashLink as Link } from 'react-router-hashlink';
import {BrowserRouter as Router} from 'react-router-dom';

function NavBar () {

  let navstyle = {paddingLeft: "10vw", paddingRight: "10vw"};

  let linkstyle = {textDecoration: "none", color: "#000", fontSize:"20px"};

    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
              <Router>
              <li className="nav-item" style={navstyle}>              
              <Link to="/#about" style={linkstyle}>About Me</Link>
              </li>
              <li className="nav-item" style={navstyle}>          
              <Link to="/#portfolio" style={linkstyle}>Portfolio</Link>
              </li>
              <li className="nav-item" style={navstyle}>          
              <Link to="/#contact" style={linkstyle}>Contact</Link>
              </li>
              </Router>
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}

export default NavBar;