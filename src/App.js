import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Offer from './containers/Offer';
import Contact from './containers/Contact';
import Header from './components/Header';
import Instafeed from './components/Instafeed';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
       <HashRouter basename='/'>
          <Route path="/o-mnie" exact component={About} />
          <Route path="/oferta" component={Offer} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/" component={Home} />
        {/* <Instafeed/> */}
        {/* <Footer/> */}
      </HashRouter>
    </div>
  );
}

export default App;
