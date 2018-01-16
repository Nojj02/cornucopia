import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    itemNameChange, 
    wishFormSubmit 
} from './actions';

const WishForm = props => {
    return (
        <div className="wishform">
            <form>
                <p>
                    <label>Add new Item</label>
                    <input type="text" value={props.itemName} onChange={props.onItemNameChange.bind(this)} />
                </p>
                <button type="submit" onClick={props.onWishFormSubmit.bind(this, props)}>Add</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        itemName : state.wishForm.itemName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemNameChange : event => {
            dispatch(itemNameChange(event.target.value))
        },
        onWishFormSubmit : (form, event) => {
            event.preventDefault();
            dispatch(wishFormSubmit(form))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WishForm);