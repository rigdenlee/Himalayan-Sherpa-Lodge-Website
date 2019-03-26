import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import classes from './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './containers/Contact/Contact';
import About from './containers/About/About';
import Destination from './containers/Destination/Destination';



class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Switch>
          <Route path="/Destination" component={Destination} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/" exact component={Home} />
        </Switch>  
      </div>
    );
  }
}

export default App;



