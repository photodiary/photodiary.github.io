import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import About from './containers/About';
import Contact from './containers/Contact';
import Header from './components/Header';
import NarrowHeader from './components/NarrowHeader';
import Instafeed from './components/Instafeed';
import Footer from './components/Footer';
import PhotoGallery from './containers/PhotoGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/o-mnie">
            <NarrowHeader />
            <About />
            <Footer />
          </Route>
          <Route path="/kontakt">
            <NarrowHeader />
            <Contact />
            <Footer />
          </Route>
          <Route path="/portfolio/:id" component={PhotoGallery} >
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
