import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import { Collapse, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import './style.css';
import 'react-slideshow-image/dist/styles.css'
import MobileHeader from '../MobileHeader'

const NarrowHeader = (props) => {
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


    return (
        <div>

            {window.innerWidth > 600 ?
                <div id="navbar-fixed">

                    <nav className="secondary-nav">
                        {/* <a href="#"><i class="fas fa-home"></i></a> */}
                        <a href="/" id="homeLink">
                            <img id="logo" src={require("../../assets/images/logo.png")} alt="logo" />
                        </a>
                        <Dropdown isOpen={isDropdown2Open} toggle={toggleDropdown2}>
                            <DropdownToggle caret className="nav-menu-item"> PORTFOLIO </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><a href="#portfolio/1" >FOTOGRAFIA PORTRETOWA</a></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem><a href="#portfolio/2">FOTOGRAFIA PAR</a></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem><a href="#portfolio/3">FOTOGRAFIA RODZINNA</a></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem><a href="#portfolio/4">FOTOGRAFIA KULINARNA</a></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <a href="#o-mnie" className="nav-menu-item">O MNIE</a>
                        <a href="#kontakt"className="nav-menu-item">KONTAKT</a>
                    </nav>
                </div>
                :
                <MobileHeader />
            }
        </div>
    );

}

export default NarrowHeader;