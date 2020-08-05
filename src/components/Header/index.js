import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import { Collapse } from 'reactstrap';
import './style.css';
import 'react-slideshow-image/dist/styles.css'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

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
        <div className="slide-container" id="home">
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
            {/* {window.innerWidth > 600 ? */}
                <div id="navbar-fixed">

                    <nav>
                        <a href="#home"><i class="fas fa-home"></i></a>
                        <a href="#portfolio">PORTFOLIO</a>
                        <a href="#o-mnie">O MNIE</a>
                        <a href="#oferta">OFERTA</a>
                        <a href="#kontakt">KONTAKT</a>
                    </nav>

                </div>
                {/* :
                <div id="navbar-fixed-mobile">
                    <div className="hamburger-menu" onClick={toggle}>
                        <i class="fas fa-bars"></i>
                    </div>

                    <Collapse isOpen={isOpen}>
                        <div className="menu-item"> <a href="#portfolio">PORTFOLIO</a></div>
                        <div className="menu-item"> <a href="#o-mnie">O MNIE</a></div>
                        <div className="menu-item"> <a href="#oferta">OFERTA</a></div>
                        <div className="menu-item"> <a href="#kontakt">KONTAKT</a></div>
                    </Collapse>

                </div>
            } */}
        </div>
    );

}

export default Header;