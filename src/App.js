import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router>
        <Switch>
          <Route path="/o-mnie" exact component={About} />
          <Route path="/oferta" component={Offer} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/" exact component={Home} />
        </Switch>
        {/* <Instafeed/> */}
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
