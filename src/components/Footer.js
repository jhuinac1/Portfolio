import React from 'react';
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer>
            <h5>2020 &copy; Johnny Huinac</h5>
            <ul>
                <li><a href="https://www.facebook.com/" target="_blank" className="fab fa-facebook" ></a></li>
                <li><a href="https://www.linkedin.com/in/johnnyhuinac/" target="_blank" className="fab fa-linkedin-in"></a></li>
                <li><a href="https://github.com/jhuinac1" target="_blank" className="fab fa-github"></a></li>
                <li><a href="https://www.instagram.com/johnny_hp7/" target="_blank" className="fab fa-instagram"></a></li>
            </ul>
        </footer>
    )
}
