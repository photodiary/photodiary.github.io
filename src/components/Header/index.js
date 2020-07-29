import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import './style.css';
import 'react-slideshow-image/dist/styles.css'

const Header = (props) => {
    const bgClasses = [
        "bg1", "bg2", "bg3", "bg4", "bg5", "bg6"
    ]

    const fadeProperties = {
        duration: 3000,
        transitionDuration: 1700,
        prevArrow: <div className="arrow arrow-left"><i class="fas fa-chevron-left"></i></div>,
        nextArrow: <div className="arrow arrow-right"><i class="fas fa-chevron-right"></i></div>
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
                                        <img id="logo" src={require("../../assets/images/logo.jpg")} alt="logo" />
                                    </a>
                                    <div id="menu">
                                        <NavLink to="/o-mnie">O MNIE</NavLink>
                                        <NavLink to="/oferta">OFERTA</NavLink>
                                        <NavLink to="/kontakt">KONTAKT</NavLink>
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