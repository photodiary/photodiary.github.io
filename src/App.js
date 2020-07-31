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
import Portfolio from './containers/Portfolio';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/o-mnie" exact component={About} />
          <Route path="/oferta" component={Offer} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
