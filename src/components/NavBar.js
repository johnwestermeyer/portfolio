import React from 'react';

function NavBar () {

  let navstyle = {paddingLeft: "20px", paddingRight: "20px"};

  let linkstyle = {textDecoration: "none", color: "#000"};

    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">John Westermeyer</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <li className="nav-item" style={navstyle}>
              <a href="#about" style={linkstyle}>About Me</a>
              </li>
              <li className="nav-item" style={navstyle}>          
              <a href="#about" style={linkstyle}>Portfolio</a>
              </li>
              <li className="nav-item" style={navstyle}>          
              <a href="#contact" style={linkstyle}>Contact</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}

export default NavBar;