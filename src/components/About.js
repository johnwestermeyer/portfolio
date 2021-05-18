import React from 'react';
import me from '../assets/me.png'

function About() {

    return(       
        <div id="about" class="mx-auto mt-5 p-2 text-center" style={{width: "clamp(279px,75%,800px)", border: "solid 1px black", fontSize:"clamp(16px,1vw,48px)",
        display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <div>
        Hello, my name is John Westermeyer. I am a Full Stack Web Developer leveraging a background in retail to build a more intuitive user experience on the web. Known as an innovative problem-solver passionate about developing apps. Strengths in meeting deadlines, creativity and teamwork. Known among staff for a strong work ethic no matter the complexity of the project.
        <br />
        <br />
        Languages: JavaScript, HTML, CSS, SQL, React, React Native, MongoDB, NodeJs, JQuery, Bootstrap
        <br />
        <br />
        Located in Long Beach, California.
        </div>
        </div>       
    )
}

export default About;