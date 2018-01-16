import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import {
  PURCHASEAMOUNT_CHANGE,
  purchaseAmountChange
} from './actions.js';

import WishForm from './WishForm';
import Wishlist from './Wishlist';

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
          <h1 className="App-title">How much is it worth?</h1>
        </header>
        <p className="App-intro">
          How much is it?
        </p>
        <p>
          <input type="text" onChange={this.props.onPurchaseAmountChange.bind(this)} value={this.props.purchaseAmount} />
        </p>
        <Wishlist />
        <WishForm />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPurchaseAmountChange: event => {
      let parsedValue = event.target.value ? parseInt(event.target.value) : 0;

      dispatch(purchaseAmountChange(parsedValue))
    }
  }
}

const mapStateToProps = state => {
  return {
    purchaseAmount: state.app.purchaseAmount,
    wishlist : state.app.wishlist
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
