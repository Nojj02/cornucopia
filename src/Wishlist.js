import React, { Component } from 'react';
import { connect } from 'react-redux';

const Wishlist = props => {
    const wishlist =
        props.wishlist.map(x => {
            return (
                <p>
                    <label>{x.quantity} {x.itemNameDisplay}</label>
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
        wishlist: state.wishlist
    }
}

export default connect(
    mapStateToProps
)(Wishlist);