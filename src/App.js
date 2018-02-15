import React, { Component } from 'react';
import logo from './logo.svg';
import { sma } from 'technicalindicators';
import './App.css';

// MINIMAL TEST CODE HERE
console.log(sma);
var result = sma({period : 5, values : [1,2,3,4,5,6,7,8,9], reversedInput : true});
console.log(result);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
