import React, { useEffect } from 'react';
import "../styles/projects.css";
// const $ = window.$;
export default function ProjectsSecion() {


    //Similar to componentDidMount
    useEffect(() => {
    }, []);


    return (
        <section id="projects-container">
            <h2>Projects</h2>
            <div className="projects">
                {/* PROJECT 1*/}
                <div className="project-card">
                    <a className="project-one " href="https://stormy-forest-16591.herokuapp.com/products" target="_blank">
                        <div className="image-container image-one">
                            <h6 className="fas fa-link project-link"></h6>
                        </div>
                    </a>
                    <h5 className="project-title">Wine Store</h5>
                    <p className="project-description">An app intended for a store that wants to have the ability to sell wine online or simply showcase their inventory</p>
                </div>
                {/* PROJECT 2*/}
                <div className="project-card">
                    <a className="project-one " href="https://jhuinac1.github.io/Food-recipe-app/" target="_blank">
                        <div className="image-container image-two">
                            <h6 className="fas fa-link project-link"></h6>
                        </div>
                    </a>
                    <h5 className="project-title">Food Recipe</h5>
                    <p className="project-description">You can search for a meal recipe and this app will provide you with the ingredients needed, instructions on how to cook it, and even provides a video with instructions!</p>
                </div>
                {/* PROJECT 3*/}
                <div className="project-card">
                    <a className="project-one " href="https://chisme-proj.herokuapp.com/" target="_blank">
                        <div className="image-container image-three">
                            <h6 className="fas fa-link project-link"></h6>
                        </div>
                    </a>
                    <h5 className="project-title">Chisme (chat) App</h5>
                    <p className="project-description">Use this app to share a post with friends and they can comment on your posts instantly with real-time chat.</p>
                </div>
                {/* PROJECT 4*/}
                <div className="project-card">
                    <a className="project-one " href="https://garage-react-app.herokuapp.com/" target="_blank">
                        <div className="image-container image-four">
                            <h6 className="fas fa-link project-link"></h6>
                        </div>
                    </a>
                    <h5 className="project-title">Garage App</h5>
                    <p className="project-description">Got something you want to sell or give away for free? You can use this app by creating and account and post your item so neighbors can find it</p>
                </div>
                {/* PROJECT 5*/}
                <div className="project-card">
                    <a className="project-one " href="https://gitjokez.herokuapp.com/" target="_blank">
                        <div className="image-container image-five">
                            <h6 className="fas fa-link project-link"></h6>
                        </div>
                    </a>
                    <h5 className="project-title">Jokez App</h5>
                    <p className="project-description">An application intented for entertainment purposes. It contains a library of jokes, that also can be found by category. This user also has the ability to add a new joke to the library or rate a joke by voting</p>
                </div>

            </div>
        </section>
    )
}
