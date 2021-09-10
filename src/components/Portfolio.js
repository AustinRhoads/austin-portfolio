import React, { Component } from 'react' 
import ProjectCard from './ProjectCard'
import arcade_studio_img from '../images/AS_1_demo_image.png'
import speckled_trouts from '../images/spec1.jpg'
import ufo_img from '../images/pentagon_ufo.png'

const Projects = [
    {name: "Arcade Studios", img: arcade_studio_img, languages: "Javascript/Rails"},
    {name: "Fish In Sight", img: speckled_trouts, languages: "React/Rails"},
    {name: "UFO Tracker", img: ufo_img, languages: "Ruby on Rails"},
]





class Portfolio extends Component{
    render(){
        return(
            <section id="portfolio-div">
                <div id="portfolio-header">PROJECTS</div>
                <div id="portfolio-projects-list">
                   {/*<div id="portfolio-proj-as" className="portfolio-projects-list-item" >
                       
                    </div> */} 
                    <ProjectCard project={Projects[0]} />
                    <ProjectCard project={Projects[1]} />
                    <ProjectCard project={Projects[2]} />
                   
                    {
                        /* 
                         <div className="portfolio-projects-list-item" ></div>
                        <div className="portfolio-projects-list-item" ></div>
                        <div className="portfolio-projects-list-item" ></div>
                        */
                    }
                   

                </div>


            </section>
        )
    }
}

export default Portfolio;