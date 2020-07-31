import React, { useState } from 'react';
import { Container, Row, Col, Collapse } from 'reactstrap';
import dataFile from '../../data.json';
import './style.css';
import Header from '../../components/Header';
import PhotoGallery from '../../components/PhotoGallery';


export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = dataFile.data;
    
    return (
      <div>
        <Header />
        <div id="content">
        {data.map((category, id) => {
          return(<PhotoGallery category={category.categoryName} photoshoots={category.photoshoots}></PhotoGallery>)
        })}
        </div>
      </div>
    );

  }
}