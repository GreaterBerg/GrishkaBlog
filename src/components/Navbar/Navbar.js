import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <a href="/" className="logo">GrishkaBlog</a>
            <ul>
                <li><a href="#">Домой</a></li>
                <li><a href="#Blog">Блог</a></li>
                <li><a href="#Contact">Контакты</a></li>
            </ul>
            <div className="dark-theme">
                
                <a href="https://t.me/+g7hTjphU-DAxN2Qy" target="_blank" className="btn">
                    telegram
                </a>
            </div>
        </div>
    )
}

export default Navbar;