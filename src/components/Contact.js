import React from 'react';
import resume from '../assets/John-Westermeyer.pdf';

function Contact() {

    return(       
        <div id="contact" class="mx-auto my-5 p-2 text-center" style={{width: "clamp(279px,75%,800px)", border: "solid 1px black", fontSize:"clamp(12px,1vw,48px)"}}>
        <ul className="links" style={{listStyle: "none"}}>
            <li><h1>Contact Me</h1></li>
          <li><a href="https://github.com/johnwestermeyer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/john-westermeyer-310a922/">LinkedIn</a></li>
          <li>Phone: (314) 225-9791</li>
          <li>Email: johnwestermeyer@gmail.com</li>  
          <li><a href={resume}>My Resume (pdf)</a></li>
        </ul>
        </div> 
    )
}

export default Contact;