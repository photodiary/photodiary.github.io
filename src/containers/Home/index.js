import React, { useState } from 'react';
import { Container, Row, Col, Collapse } from 'reactstrap';
import data from '../../data.json';
import './style.css';
import Header from '../../components/Header';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="content">
          Home
        </div>
      </div>
    );

  }
}