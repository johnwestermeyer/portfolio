import React from 'react';
import space from '../assets/satellite.PNG';

function NameCard () {

    return(
        <>
        <div class="card bg-dark text-white">
        <img src={space} class="card-img" alt="John Westermeyer"/>  
        <div class="card-img-overlay text-center align-middle" style={{background: "rgb(50,50,50,0.5)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <h5 class="card-title" style={{fontSize: "5vw"}}>John Westermeyer</h5>
            <p class="card-text" style={{fontSize: "2.5vw"}}>Full Stack Web Developer</p>
        </div>
        </div>
        </>
    )
}

export default NameCard;