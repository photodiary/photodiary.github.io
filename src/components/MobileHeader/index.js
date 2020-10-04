import React, { useState } from 'react';
import './style.css'

export default class MobileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        }
    }

    handleMenuClick() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    handleLinkClick(href) {
        this.setState({ menuOpen: false });
        window.location.href = href;
        console.log("redirect")
        console.log(href)
    }

    render() {
        const styles =
            {
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh',
                    filter: this.state.menuOpen ? 'blur(2px)' : null,
                    transition: 'filter 0.5s ease',
                },
            }
        const menu = ['Fotografia portretowa', 'Fotografia par', 'Fotografia rodzinna', 'Fotografia kulinarna', 'O mnie', 'Kontakt']
        const menuLinks= ['#/portfolio/1', '#/portfolio/2', '#/portfolio/3', '#/portfolio/4', '#/o-mnie', '#/kontakt'];
        const menuItems = menu.map((val, index) => {
            return (
                <MenuItem
                    key={index}
                    delay={`${index * 0.1}s`}
                    onClick={() => { this.handleLinkClick(menuLinks[index]);}}>{val}</MenuItem>)
        });

        return (
            <div>
                <div className="main-container">
                    <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color='white' />
                    
                </div>
                <div className="logo">
                        <a href="#"><img className="logo-image" src={require("../../assets/images/logo.png")} alt="logo" /></a>
                    </div>
                <Menu open={this.state.menuOpen}>
                    {menuItems}
                </Menu>

            </div>
        )
    }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
    }

    handleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {

        return (
            <div className="container2" style={{ animationDelay: this.props.delay }}>
                <div
                    className="menu-item"
                    style={{
                        animationDelay: this.props.delay,
                        color: this.state.hover ? 'gray' : '#fafafa'
                    }}
                    onMouseEnter={() => { this.handleHover(); }}
                    onMouseLeave={() => { this.handleHover(); }}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </div>
                <div className="line" style={{ animationDelay: this.props.delay }} />
            </div>
        )
    }
}

/* Menu.jsx */
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open ? this.props.open : false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
    }

    render() {
        return (

            <div className="container3" style={{ height: this.state.open ? '100%' : 0 }}>
                {
                    this.state.open ?
                        <div className="menu-list">
                            {this.props.children}
                        </div> : null
                }
            </div>
        )
    }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open ? this.props.open : false,
            color: this.props.color ? this.props.color : 'black',
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
    }

    handleClick() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const styles = {
            
          
        }
        return (
            <div className="button-container"
                onClick={this.props.onClick ? this.props.onClick :
                    () => { this.handleClick(); }}>
                <div className="line-basic line-top" style={{background: this.state.color, transform: this.state.open ? 'rotate(45deg)' : 'none'}} />
                <div className="line-basic" style={{background: this.state.color, opacity: this.state.open ? 0 : 1,
    transform: this.state.open ? 'translateX(-16px)' : 'none'}} />
                <div className="line-basic line-bottom" style={{background: this.state.color, transform: this.state.open ? 'translateX(-1px) rotate(-45deg)' : 'none'}} />
            </div>
        )
    }
}
