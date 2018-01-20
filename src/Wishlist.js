import React, { Component } from 'react';
import { connect } from 'react-redux';

import pluralize from 'pluralize';

const Wishlist = props => {
    const wishlist =
        props.wishlist.map(x => {
            return (
                <p>
                    <label>{x.quantity} {pluralize(x.itemName, x.quantity)}</label>
                </p>)
        });

    return (
        <div className="wishlist">
            {wishlist}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        wishlist: state.app.wishlist
    }
}

export default connect(
    mapStateToProps
)(Wishlist);