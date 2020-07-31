import React from 'react';
import { Row, Col, Collapse } from 'reactstrap';
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './style.css';
import { Link } from 'react-router-dom';

export default class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            activePhotoshoot: 1
        }
    }

    redirect = (id) => {
        window.location.href = "/o-mnie" //"/sesja/" + id;
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <h1> {this.props.category}</h1>
                    </Col>
                </Row>
                <Row>
                    {this.props.photoshoots.map((photoshoot, index) => {
                        return (
                            <Col xs="12" md="" style={{ padding: "4px" }}>
                            <Link to={"/sesja/" + this.props.catId + "/" + index}>
                                <div className="overlay" data-content={photoshoot.title}>
                                    <img
                                        className="thumbnail"
                                        src={require("../../assets/photos/" + photoshoot.thumbnail)}
                                    />
                                </div>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
                <hr/>
            </div>
        )
    }
}