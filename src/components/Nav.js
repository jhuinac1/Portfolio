import React, { useEffect } from 'react';
import "../styles/nav.css";
const $ = window.$;

export default function Nav() {

    const effects = () => {
        $(document).ready(function () {
            $('.sidenav').sidenav();
        });
    }
    //Similar to componentDidMount
    useEffect(() => {
        effects()
    }, []);



    return (
        <nav className="nav">
            <div className="nav-title">
                <h4>Johnny Huinac Paxtor</h4>
                <h6>Full-Stack Software Engineer</h6>
            </div>

            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons burger-icon">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#projects-container">Projects</a></li>
                <li><a href="#contact-container">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1J99w3LK8BIf-l8m0XlWySjpvnAkPw6m9/view?usp=sharing" target="_blank">Resume</a></li>
            </ul>

            <ul id="mobile-demo" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="sidenav-background-black"></div>
                        <div href="#user" className=" sidenav-pic">
                        </div>
                        <a href="#name"><span className="white-text name">Johnny Huinac Paxtor</span></a>
                        <a href="#email"><span className="white-text email">jhuinac7@gmail.com</span></a>
                    </div></li>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#projects-container">Projects</a></li>
                <li><a href="#contact-container">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1J99w3LK8BIf-l8m0XlWySjpvnAkPw6m9/view?usp=sharing" target="_blank">Resume</a></li>
            </ul>
        </nav>
    )
}
