import React from 'react';
import Header from '../../components/Header';
import { Row, Col, Jumbotron } from 'reactstrap';
import './style.css';


const About = (props) => {
    return (
        <div>
            <Header />
            <div id="content">
                <Row>
                    <Col cs="12" md="4">
                        <img id="profilePhoto" src={require("../../assets/images/about_me.png")} />
                    </Col>
                    <Col xs="12" md="8">
                    <div style={{textAlign: "left"}}>
                    {/* <h2>Cześć!</h2> */}
                    <p>Mam na imię Ania. Fotografia jest moją wielką pasją – w tych kilku słowach mieści się moja, już prawie dziesięcioletnia, przygoda z aparatem. </p>
                    <p>Dzisiaj fotografia towarzyszy mi na co dzień, a każda sesja zdjęciowa z wami sprawia mi radość i daje chęć do dalszego rozwoju. </p>
                    <p>Od niedawna mam szczęście nazywania swojej pasji również pracą. W mojej ofercie jest fotografia, zarówno plenerowa, jak i studyjna:</p>
                    <ul>
                        <li>fashion</li>
                        <li>lifestyle</li>
                        <li>portretowa</li>
                        <li>narzeczeńska, realizuję też filmy – podziękowania dla rodziców</li>
                        <li>rodzinna</li>
                    </ul>
                    <p>Obszar mojego działania to nie tylko Śląsk, w którym mieszkam, ale także cała Polska.</p>
                    <p>Chętnie uwiecznię Was na zdjęciach! 😊</p>
                    <p>Zapraszam do współpracy!</p>


                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    );

}

export default About;