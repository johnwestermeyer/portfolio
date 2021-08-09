import React from 'react';
import { HashLink as Link } from 'react-router-hashlink';
import {BrowserRouter as Router} from 'react-router-dom';

function NavBar () {

  let navstyle = {whiteSpace: "nowrap", padding:"10px", borderRadius:"10px", width:"100px"};

  let linkstyle = {textDecoration: "none", color: "#000", fontSize:"20px"};

    return(
        <>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor: "#eee", height:"60px"}}>
        <div class="container-fluid">
          <button style={{backgroundColor:"#fff"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
            <ul class="nav nav-pills">
              <Router>              
              <li className="nav-item" style={navstyle}>              
              <Link to="#about" style={linkstyle}>About Me</Link>
              </li>
              <li class="px-5"/>
              <li className="nav-item" style={navstyle}>          
              <Link to="#portfolio" style={linkstyle}>Portfolio</Link>
              </li>
              <li class="px-5"/>
              <li className="nav-item" style={navstyle}>          
              <Link to="#contact" style={linkstyle}>Contact</Link>
              </li>
              </Router>
            </ul>
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}

export default NavBar;