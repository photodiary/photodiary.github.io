import React, { useState } from 'react';
import { Container, Row, Col, Collapse } from 'reactstrap';
import dataFile from '../../data.json';
import './style.css';
import Header from '../../components/Header';
import PhotoGallery from '../../components/PhotoGallery';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const data = dataFile.data;
    const categoriesNumber = data.length;


    return (
      <div id="portfolio" className="content" style={{paddingTop: "55px"}}>
        {data.map((category, id) => {
          return (
            <PhotoGallery
              catId={category.categoryId}
              category={category.categoryName}
              photoshoots={category.photoshoots}
              isLast={id + 1 == categoriesNumber ? true : false}
            >
            </PhotoGallery>)
        })}
      </div>



    );

  }
}