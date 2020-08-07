import React from 'react';
import { Row, Col, Collapse, Button } from 'reactstrap';
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './style.css';

export default class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            activePhotoshoot: 0,
            primaryPhotoshoots: this.props.photoshoots.slice(0, this.props.photoshoots.length > 5 ? 5 : this.props.photoshoots.length),
            secondaryPhotoshoots: this.props.photoshoots.length > 5 ? this.props.photoshoots.slice(5, this.props.photoshoots.length) : [],
            isMoreThan5: this.props.photoshoots.length > 5 ? true : false,
            isMoreOpen: false
        }
    }

    open = (e) => {
        this.setState({ isOpen: true });
    }

    close = (e) => {
        this.setState({ isOpen: false });
    }

    toggle = (id) => {
        const $ = window.$;
        if (this.state.isOpen) {
            if (this.state.activePhotoshoot === id) {
                this.close();
            } else {
                this.setState({ activePhotoshoot: id });
                var slides = document.getElementsByClassName("slides")[this.props.catId];
                slides.scrollIntoView(true);
            }
        } else {
            this.setState({ activePhotoshoot: id });
            this.open();

            var slides = document.getElementsByClassName("slides")[this.props.catId];
            slides.scrollIntoView(true);

        }
    }

    getPhotoshoot = () => {
        const settings = {
            className: "slider variable-width",
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            rows: 1,
        };


        const ps = this.props.photoshoots.find(photoshoot => {
            return (photoshoot.id === this.state.activePhotoshoot)
        })

        var photos = '';
        photos = (ps ? ps.photos : photos)

        const $ = window.$;
        $(document).ready(function () {
            $('.parent-container').magnificPopup({
                delegate: 'a', // child items selector, by clicking on it popup will open
                type: 'image',
                gallery: {
                    enabled: true
                }
            });

        });


        if (photos) {
            return (
                <Slider {...settings} className="parent-container">
                    {photos.map(photo =>
                        <a href={require("../../assets/photos/" + photo.fullSize)}>
                            <img class="photo" src={require("../../assets/photos/" + photo.thumbnail)} />
                        </a>
                    )}
                </Slider>
            )
        }
    }

    showMore = () => {
        this.setState({ isMoreOpen: true });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="12">
                        <h4> {this.props.category}</h4>
                    </Col>
                </Row>
                <Row>
                    {this.state.primaryPhotoshoots.map((photoshoot, index) => {
                        return (
                            <Col xs="12" md="" style={{ padding: "4px" }} className="parent-container">
                                <div className="overlay" data-content={photoshoot.title}
                                    onClick={() => this.toggle(photoshoot.id)}>
                                    <img
                                        className="thumbnail"
                                        src={require("../../assets/photos/" + photoshoot.thumbnail)}
                                    />
                                </div>
                            </Col>
                        )
                    })}
                </Row>


                {this.state.isMoreThan5 ?
                    <Row>
                        <Col xs="12" style={{ padding: "0" }}>
                            <Collapse isOpen={!this.state.isMoreOpen} style={{ float: "right" }}>
                                <Button style={{ float: "right", marginRight: "4px" }} onClick={() => this.showMore()}>Więcej...</Button>
                            </Collapse>
                        </Col>
                    </Row>
                    : ""}

                <Collapse isOpen={this.state.isMoreOpen}>
                    <Row>
                        {this.state.secondaryPhotoshoots.map((photoshoot, index) => {
                            return (
                                <Col xs="12" md="" style={{ padding: "4px" }} className="parent-container secondary-content">
                                    <div className="overlay" data-content={photoshoot.title}
                                        onClick={() => this.toggle(photoshoot.id)}>
                                        <img
                                            className="thumbnail"
                                            src={require("../../assets/photos/" + photoshoot.thumbnail)}
                                        />
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>

                </Collapse>

                <div id="slidesContainer">
                    <div className="slides"></div>
                </div>
                <Row xs="12">
                    <Collapse isOpen={this.state.isOpen} style={{ width: "100%" }}>
                        <br />
                        <div>
                            {this.getPhotoshoot()}
                        </div>

                    </Collapse>

                </Row>
                {this.props.isLast ? "" : <hr />}
            </div>
        )
    }
}