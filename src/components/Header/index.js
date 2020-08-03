import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import './style.css';
import 'react-slideshow-image/dist/styles.css'

const Header = (props) => {
    const bgClasses = [
        "bg1", "bg2", "bg3", "bg4", "bg5", "bg6", 
        "bg7", "bg8", "bg9", "bg10", "bg11", "bg12"
    ]

    const fadeProperties = {
        duration: 2000,
        transitionDuration: 1700,
        prevArrow: <span></span>,
        nextArrow: <span></span>
    };

    const $ = window.$;
    $(document).ready(function () {
        $("#navbar-fixed").hide(); //Hide the navigation bar first
        $(window).scroll(function () {  //Listen for the window's scroll event
            if (isScrolledAfterElement("#header-end")) {
                $('#navbar-fixed').fadeIn();
            } else {
                $('#navbar-fixed').fadeOut();
            }
        });

        //Function that returns true if the window has scrolled beyond the given element
        function isScrolledAfterElement(elem) {
            var $elem = $(elem);
            var $window = $(window);

            var docViewTop = $window.scrollTop();
            var elemPos = $elem.offset().top;

            return elemPos <= docViewTop;
        }
    });




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
                                        <a href="#portfolio">PORTFOLIO</a>
                                        <a href="#o-mnie">O MNIE</a>
                                        <a href="#oferta">OFERTA</a>
                                        <a href="#kontakt">KONTAKT</a>
                                    </div>
                                </nav>
                            </div>
                        )
                    })}
                </Fade>
                <div id="header-end"></div>
            </div>
            <div id="navbar-fixed">
            
                    <nav>
                        <a href="#portfolio">PORTFOLIO</a>
                        <a href="#o-mnie">O MNIE</a>
                        <a href="#oferta">OFERTA</a>
                        <a href="#kontakt">KONTAKT</a>
                    </nav>
                
            </div>
        </div>
    );

}

export default Header;