import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import About from './containers/About';
import Contact from './containers/Contact';
import Header from './components/Header';
import Instafeed from './components/Instafeed';
import Footer from './components/Footer';
import PhotoGallery from './containers/PhotoGallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Header />
        <Switch>
          <Route exact path="/">
            <About />
            <hr/>
            <Contact />
          </Route>
          {/* <Instafeed /> */}
          <Route path="/o-mnie" component={About} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/portfolio/:id" component={PhotoGallery} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
