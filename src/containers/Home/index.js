import React, { useState } from 'react';
import { Container, Row, Col, Collapse } from 'reactstrap';
import dataFile from '../../data.json';
import './style.css';
import Header from '../../components/Header';
import PhotoGallery2 from '../../components/PhotoGallery2';


export default class Home extends React.Component {
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
          return(<PhotoGallery2 catId={category.categoryId} category={category.categoryName} photoshoots={category.photoshoots}></PhotoGallery2>)
        })}
        </div>
      </div>
    );

  }
}