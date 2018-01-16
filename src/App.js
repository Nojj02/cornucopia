import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitOfMeasure: 'Starbucks coffees'
    }
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
          <input type="text" onChange={this.props.onPurchaseAmountChange.bind(this)} />
        </p>
        <p>
          <label>{this.props.purchaseAmount / 200} {this.state.unitOfMeasure}</label>
          </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPurchaseAmountChange : event => {
      dispatch({
        type : 'PURCHASEAMOUNT_CHANGE',
        value : parseFloat(event.target.value)
      })
    }
  }
}

const mapStateToProps = state => {
  return {
    purchaseAmount: state.purchaseAmount
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
