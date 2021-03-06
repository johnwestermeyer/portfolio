import React from 'react';

function Project(props) {
    return(
        <div class="m-2 p-2" style={{overflow: "auto", backgroundColor: "#fff", borderRadius: "3px", boxShadow: "7px 7px 7px #666", width:"clamp(400px,400px,100%)"}}>
            <a style={{float: "top"}} href={props.link}>
                <img src={props.img} alt={props.alt} className="image-fluid mb-3" style={{objectFit:"scale-down"}}/>
            </a>
            <br/>
            <p>{props.desc}</p>
            <p>Technologies Used: {props.tech}</p>
            <a href={props.git}>Git Repo</a> |&nbsp;
            <a href={props.link}>Live Demo</a>
        </div>
    )

}

export default Project; 