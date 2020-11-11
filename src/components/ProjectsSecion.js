import React, { useEffect } from 'react';
import "../styles/projects.css";
const $ = window.$;
export default function ProjectsSecion() {

    const effects = () => {

    }
    //Similar to componentDidMount
    useEffect(() => {
        effects()
    }, []);


    return (
        <section id="projects-container">
            <h2>PROJECTS</h2>
            <div className="projects">
                <a className="project-one project" href="https://jhuinac1.github.io/Food-recipe-app/" target="_blank">
                    <div>
                        <h6>Food Recipe</h6>
                        <p>This is a page about food recipe</p>
                    </div>
                </a>
                {/* <a className="project-two project" href="https://stormy-forest-16591.herokuapp.com/products" target="_blank"><img src="https://lorempixel.com/250/250/nature/2" /></a>
                <a className="project-three project" href="https://garage-react-app.herokuapp.com/" target="_blank"><img src="https://lorempixel.com/250/250/nature/3" /></a> */}
            </div>
        </section>
    )
}
