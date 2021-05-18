import React from 'react';

function Project(props) {
    return(
        <div class="p-2" style={{overflow: "auto"}}>
            <a style={{float: "top"}} href={props.git}>
                <img src={props.img} alt={props.alt} className="image-fluid mr-3 mb-3"/>
            </a>
            <br/>
            <p>{props.desc}</p>
            <p>Technologies Used: {props.tech}</p>
            <a href={props.git}>Git Repo</a> | &nbsp;
            <a href={props.link}>Live Demo</a>
        </div>
    )

}

export default Project; 