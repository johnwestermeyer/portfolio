import React from 'react';
import Project from './Project'
import weather from '../assets/weather.png';
import quiz from '../assets/quiz.png';
import game from '../assets/game.png';
import snippet from '../assets/snippet.png';

function Portfolio () {

    return(
        <>
           <h1 class="text-center pt-5">Portfolio</h1>
        <div id="portfolio" class="mx-auto mt-5 text-center" style={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
        <Project 
            link={"https://johnwestermeyer.github.io/WeatherDashboard/"}
            img={weather}
            alt={"Weather Dashboard"}
            git={"https://github.com/johnwestermeyer/WeatherDashboard"}
            desc={"Weather Dashboard display with tab view for multiple cities"}
            tech={"JS, HTML, CSS"}
            />  
        <Project 
            link={"https://johnwestermeyer.github.io/TimedQuiz/"}
            img={quiz}
            alt={"Timed Quiz"}
            git={"https://github.com/johnwestermeyer/TimedQuiz"}            
            desc={"Multiple choice quiz with a countdown timer and high score table"}
            tech={"JS, HTML, CSS"}
            />
        <Project 
            link={"https://calm-crag-81636.herokuapp.com/"}
            img={game}
            alt={"Quarantine Game"}
            git={"https://github.com/johnwestermeyer/QuarantineGame"}                        
            desc={"Real-time multiplayer card game with chat"}
            tech={"JS, HTML, CSS, Socket.IO, MySQL, JQuery"}
            />
        <Project
            link={"http://snippet.ltd"}
            img={snippet}
            alt={"Snippet"}
            git={"https://github.com/johnwestermeyer/Snippet"}                        
            desc={"Database for storing and sharing code snippets"}
            tech={"JS, HTML, CSS, React, Sequelize, MySQL, Passport"}
            />
        </div>   
        </>    
    )
}

export default Portfolio;