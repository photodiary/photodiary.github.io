import React from 'react';
import Header from '../../components/Header';
import { Row, Col, Jumbotron } from 'reactstrap';
import './style.css';


const About = (props) => {
    return (
        <div>
            <Header />
            <div id="content">About</div>
            {/* <Jumbotron style={{padding: "8vh 12vw", textAlign: "left"}}>
                <Row>
                    <Col md="4">
                        <img id="profilePhoto" src={require("../../assets/images/about_me.png")} />
                    </Col>
                    <Col md="8">
                    <div style={{padding: "4vh 4vw", border: "solid 3px #c2c6ba"}}>
                    <h2>Cześć!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis lorem, tincidunt tincidunt risus id, molestie mollis leo. Pellentesque placerat erat at varius semper. In hac habitasse platea dictumst. Sed lobortis risus orci, in gravida elit convallis ut. Donec egestas vel ante id convallis. </p><p> Vivamus dignissim metus nec nulla feugiat lacinia. Mauris vel accumsan nunc. Nam libero magna, laoreet quis tincidunt a, elementum eu sem. Ut a nisi eget elit sodales mollis.Suspendisse condimentum pharetra ipsum, tincidunt fringilla magna iaculis quis. Donec sollicitudin ornare odio, sed suscipit nibh interdum vel. Nulla vel elit elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                    </div>
                    </Col>
                </Row>
            </Jumbotron> */}
        </div>
    );

}

export default About;