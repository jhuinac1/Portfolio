import React, { useEffect } from 'react'
import "../styles/OpeningEffectStyle.css";
//because i used cdn thus gsap is global, I need to 
//create a variable to call it and use it here
const gsap = window.gsap;

export default function OpeningEffect() {
    const welcomeEffect = () => {
        // console.log("the effect runs now");

        //creating a new gsap timeline and adding defaults
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        //grabing the h1 text and showing it since it is hidding at first
        tl.to(".welcome-text", { y: "0", duration: 1 });
        //making the container for the text to leave but delaying once seond so users have time to read.
        tl.to(".welcome-container", { y: "-100%", duration: 1.5, delay: 1 });
        //a while box that slides up and off screen 
        //the "-=1.5 means that it will start a second and a half earlier"
        //thus making it slide at the same time as .welcome-container
        tl.to(".slider-for-welcome", { y: "-100%", duration: 1.4 }, "-=1.5")

    };

    // === componenetDidMount (it will invoke when page is restarting once because of the second argunet [])

    useEffect(() => {
        //when page loads it will invoke this effect
        welcomeEffect();

    }, []);
    return (<>
        <div className="welcome-container">
            <h1 className="welcome-title">
                <span className="welcome-text"> &lt;   Welcome  /&gt;</span>
            </h1>
        </div>
        <div className="slider-for-welcome"></div>
    </>
    )
}
