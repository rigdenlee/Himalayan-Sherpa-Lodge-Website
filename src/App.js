import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.css';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Location from './components/Location/Location';
import Navbar from './components/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
      <Navbar />
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/location" component={Location} />
           <Route path="/contact" component={Contact} />
           <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
