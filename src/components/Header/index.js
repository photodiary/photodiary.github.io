import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import { Collapse, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import './style.css';
import 'react-slideshow-image/dist/styles.css'
import MobileHeader from '../MobileHeader'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const [isDropdown2Open, setDropdown2Open] = useState(false);
    const toggleDropdown2 = () => setDropdown2Open(prevState => !prevState);


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
        if (!isScrolledAfterElement("#header-end")) $("#navbar-fixed").hide(); //Hide the navigation bar first
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
                                {window.innerWidth > 600 ? <a href="/" id="homeLink">
                                        <img id="logo" src={require("../../assets/images/logo.png")} alt="logo" />
                                    </a> : ''}
                                    <div id="menu">
                                        <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown}>
                                            <DropdownToggle caret> PORTFOLIO </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem><a href="#/portfolio/1">FOTOGRAFIA PORTRETOWA</a></DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem><a href="#/portfolio/2">FOTOGRAFIA PAR</a></DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem><a href="#/portfolio/3">FOTOGRAFIA RODZINNA</a></DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem><a href="#/portfolio/4">FOTOGRAFIA KULINARNA</a></DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        <a href="#o-mnie">O MNIE</a>
                                        <a href="#kontakt">KONTAKT</a>
                                    </div>
                                </nav>
                            </div>
                        )
                    })}
                </Fade>
                <div id="header-end"></div>
            </div>
            {window.innerWidth > 600 ?
            <div id="navbar-fixed">

                <nav className="secondary-nav">
                    <a href="#home"><i class="fas fa-home"></i></a>
                    <Dropdown isOpen={isDropdown2Open} toggle={toggleDropdown2}>
                        <DropdownToggle caret> PORTFOLIO </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><a href="#portfolio/1">FOTOGRAFIA PORTRETOWA</a></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><a href="#portfolio/2">FOTOGRAFIA PAR</a></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><a href="#portfolio/3">FOTOGRAFIA RODZINNA</a></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><a href="#portfolio/4">FOTOGRAFIA KULINARNA</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <a href="#o-mnie">O MNIE</a>
                    <a href="#kontakt">KONTAKT</a>
                </nav>
            </div>
            :
            <MobileHeader/>
            }
        </div>
    );

}

export default Header;