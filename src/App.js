import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/products' component={Products}/>
        </Switch>
      </div>
    );
  }
}

export default App;
