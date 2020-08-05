import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Offer from './containers/Offer';
import Contact from './containers/Contact';
import Header from './components/Header';
import Instafeed from './components/Instafeed';
import Footer from './components/Footer';
import './App.css';
import Photoshoot from './containers/Photoshoot';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Header />
        <Home />
        <About />
        <Contact />
        {/* <Instafeed /> */}
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
