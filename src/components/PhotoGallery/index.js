import React from 'react';
import { Row, Col, Collapse } from 'reactstrap';
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './style.css';

export default class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            activePhotoshoot: 1
        }
    }

    open = (e) => {
        this.setState({ isOpen: true });
    }

    close = (e) => {
        this.setState({ isOpen: false });
    }

    toggle = (id) => {
        if (this.state.isOpen) {
            if (this.state.activePhotoshoot === id){
                this.close();
            } else {
                this.setState({activePhotoshoot: id});
            }
        } else {
            this.setState({activePhotoshoot: id});
            this.open();
            
        }
    }

    render() {
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

        const $ = window.$;
        $(document).ready(function() {
                $('.parent-container').magnificPopup({
                  delegate: 'a', // child items selector, by clicking on it popup will open
                  type: 'image',
                  gallery: {
                    enabled: true
                  }
                });

          });

        return (
            <div>
                <Row>
                    <Col xs="12">
                        <h4> {this.props.category}</h4>
                    </Col>
                </Row>
                <Row>
                    {this.props.photoshoots.map((photoshoot, index) => {
                        return (
                            <Col xs="12" md="" style={{ padding: "4px" }} className="parent-container">
                                <div className="overlay" data-content={photoshoot.title}
                                    onClick={() => this.toggle(index)}>
                                    <img
                                        className="thumbnail"
                                        src={require("../../assets/photos/" + photoshoot.thumbnail)}
                                    />
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <Row xs="12">
                        <Collapse isOpen={this.state.isOpen} style={{width: "100%"}}>
                        <br/>
                            <div>
                                {this.props.photoshoots.map(
                                    ps => {
                                        if (ps.id === this.state.activePhotoshoot) return (
                                            <Slider {...settings}  className="parent-container">
                                                {ps.photos.map(photo =>
                                                        <a  href={require("../../assets/photos/" + photo.fullSize)}>
                                                            <img class="photo" src={require("../../assets/photos/" + photo.thumbnail)} />
                                                        </a>
                                                )}
                                            </Slider>

                                        )

                                    }
                                )}
                            </div>
                            
                        </Collapse>
                        
                    </Row>
                    {this.props.isLast ? "" : <hr/>}
            </div>
        )
    }
}