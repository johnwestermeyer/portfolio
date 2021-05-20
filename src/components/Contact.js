import React from 'react';
import resume from '../assets/John-Westermeyer.pdf';

function Contact() {

    return(
        <>
        <h1 class="text-center pt-5">Contact Me</h1>
        <div id="contact" class="mx-auto my-5 p-2 text-center" style={{width: "clamp(279px,75%,800px)", fontSize:"clamp(16px,1vw,48px)",
        backgroundColor: "#fff", borderRadius: "3px", boxShadow:"7px 7px 7px #666", flexShrink: "0"}}>
        <ul className="links" style={{listStyle: "none"}}>
          <li><a href="https://github.com/johnwestermeyer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/john-westermeyer-310a922/">LinkedIn</a></li>
          <li>Phone: (314) 225-9791</li>
          <li>Email: johnwestermeyer@gmail.com</li>  
          <li><a href={resume}>My Resume (pdf)</a></li>
        </ul>
        </div> 
        </>
    )
}

export default Contact;