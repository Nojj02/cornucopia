import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cost: 0,
      unitOfMeasure: 'Starbucks coffees'
    }
  }

  handleChange(event) {
    const cost = parseFloat(event.target.value);
    this.setState({
      cost: cost / 200
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          How much is it worth to you?
        </p>
        <p>
          <label>What are you trying to buy?</label>
          <input type="text" onChange={this.handleChange.bind(this)} />
        </p>
        <p>
          <label>{this.state.cost} {this.state.unitOfMeasure}</label>
          </p>
      </div>
    );
  }
}

export default App;
