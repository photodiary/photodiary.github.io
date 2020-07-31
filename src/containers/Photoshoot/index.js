import React, { useState } from 'react';
import { Container, Row, Col, Collapse } from 'reactstrap';
import dataFile from '../../data.json';
import './style.css';
import Header from '../../components/Header';
import PhotoGallery2 from '../../components/PhotoGallery2';


export default class Photoshoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = dataFile.data;
    const category = data[this.props.match.params.catId];
    const photoshoot = category.photoshoots[this.props.match.params.id];
    console.log(photoshoot.photos)


    return (
      <div>
        <Header />
        <div id="content">
          <h1>{photoshoot.title}</h1>
          <div className="photoColumn">
            {photoshoot.photos.map(photo => {
              // return <p></p>
              return <img src={require("../../assets/photos/" + photo.fullSize)}/>
            })}

          </div>
        </div>
      </div>
    );

  }
}