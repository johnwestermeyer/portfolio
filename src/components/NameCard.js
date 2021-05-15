import React from 'react';
import space from '../assets/space.jpg'

function NameCard () {

    return(
        <>
        <div class="card bg-dark text-white">
        <img src={space} class="card-img" alt="John Westermeyer" style={{width: "100%"}}/>
        <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
        </div>
        </div>
        </>
    )
}

export default NameCard;