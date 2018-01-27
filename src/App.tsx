import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';

import {
  purchaseAmountChange
} from './actions.js';

import WishForm from './WishForm';
import Wishlist from './Wishlist';

const logo = require('./logo.svg');

interface DispatchProps {
  onPurchaseAmountChange : React.ReactEventHandler<HTMLInputElement>;
}

interface StateProps {
  purchaseAmount: number;
}

interface Props extends DispatchProps, StateProps {
}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      unitOfMeasure: 'Starbucks coffees'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How much is it worth?</h1>
        </header>
        <p className="App-intro">
          What are you buying?
        </p>
        <p>
          <input type="text" />
        </p>
        <p className="App-intro">
          How much is it?
        </p>
        <p>
          <input type="number" onChange={this.props.onPurchaseAmountChange} value={this.props.purchaseAmount} />
        </p>
        <Wishlist />
        <WishForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch : Dispatch<any>) : DispatchProps => {
  return {
    onPurchaseAmountChange: event => {
      let parsedValue = event.currentTarget.value;

      dispatch(purchaseAmountChange(parsedValue));
    }
  };
};

const mapStateToProps = (state : any) : StateProps => {
  return {
    purchaseAmount: state.app.purchaseAmount
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);