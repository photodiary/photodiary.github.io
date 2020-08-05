import React, { useState } from 'react';
import { Row, Col, Collapse } from 'reactstrap';
import './style.css';


const Offer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentOffer, setOffer] = useState(1);

  function toggleOffer(id){
    if (isOpen){
      if (id == currentOffer){
        setIsOpen(false)
      } else {
        setOffer(id);
      }
    } else {
      setOffer(id);
      setIsOpen(true);
    }
  }


  function getOffer(id){
    if (id == 1) {
      return(<div className="offer-container"><h3>Sesje indywidualne</h3></div>)
    } else if (id == 2) {
      return(<div className="offer-container"><h3>Sesje par</h3></div>)
    } else {
      return(<div className="offer-container"><h3>Sesje rodzinne</h3></div>)
    }
  }

  return (
    <div>
      <div className="content" id="oferta" style={{paddingTop: "10px"}}>
      <hr/>
        <Row>
          <Col xs="12">
            <h3>Oferta</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="" style={{ padding: "4px" }} >
            <div className="overlay" data-content={"Sesje indywidualne"}
              onClick={() => toggleOffer(1)}>
              <img
                className="thumbnail"
                src={require("../../assets/images/" + "oferta1.jpg")}
              />
            </div>
          </Col>
          <Col xs="12" md="" style={{ padding: "4px" }} >
            <div className="overlay" data-content={"Sesje par"}
              onClick={() => toggleOffer(2)}>
              <img
                className="thumbnail"
                src={require("../../assets/images/" + "oferta2.jpg")}
              />
            </div>
          </Col>
          <Col xs="12" md="" style={{ padding: "4px" }} >
            <div className="overlay" data-content={"Sesje rodzinne"}
              onClick={() => toggleOffer(3)}>
              <img
                className="thumbnail"
                src={require("../../assets/images/" + "oferta3.jpg")}
              />
            </div>
          </Col>

        </Row>
        <Row xs="12">
          <Collapse isOpen={isOpen} style={{ width: "100%" }}>
            {getOffer(currentOffer)}
          </Collapse>

        </Row>
      </div>
    </div>
  );

}

export default Offer;