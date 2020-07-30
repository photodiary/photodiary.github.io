import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import './style.css';
import 'react-slideshow-image/dist/styles.css'

const Header = (props) => {
    const bgClasses = [
        "bg1", "bg2", "bg3", "bg4"
    ]

    const fadeProperties = {
        duration: 3000,
        transitionDuration: 1700,
        prevArrow: <span></span>,
        nextArrow: <span></span>
    };

    return (
        <div className="slide-container">
            <div id="navbar-content" >
                <Fade {...fadeProperties}>
                    {bgClasses.map(bgClass => {
                        return (
                            <div
                                className={"each-fade bg-image " + bgClass}
                            >
                                <nav id="navbar">
                                    <a href="/" id="homeLink">
                                        <img id="logo" src={require("../../assets/images/logo.png")} alt="logo" />
                                    </a>
                                    <div id="menu">
                                        <a href="/o-mnie">O MNIE</a>
                                        <a href="/oferta">OFERTA</a>
                                        <a href="/kontakt">KONTAKT</a>
                                    </div>
                                </nav>
                            </div>
                        )
                    })}
                </Fade>
            </div>
        </div>
    );

}

export default Header;