import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    wishFormFieldChange, 
    wishFormSubmit 
} from './actions';

const WishForm = props => {
    return (
        <div className="wishform">
            <form>
                <p>
                    <label>Add new Item</label>
                    <input type="text" value={props.itemName} onChange={props.onFieldChange.bind(this, 'itemName')} />
                </p>
                <p>
                    <label>Cost</label>
                    <input type="number" value={props.cost} onChange={props.onFieldChange.bind(this, 'cost')} />
                </p>
                <button type="submit" onClick={props.onWishFormSubmit.bind(this, props)}>Add</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cost : state.wishForm.cost,
        itemName : state.wishForm.itemName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFieldChange : (fieldName, event) => {
            dispatch(wishFormFieldChange(fieldName, event.target.value))
        },
        onWishFormSubmit : (form, event) => {
            event.preventDefault();
            console.log(form)
            dispatch(wishFormSubmit(form))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WishForm);