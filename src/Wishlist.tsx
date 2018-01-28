import * as React from 'react';
import { connect } from 'react-redux';

import pluralize from 'pluralize';

interface Props {
    wishlist : WishlistItem[];
}

interface WishlistItem {
    quantity: number;
    cost: number;
    itemName : string;
}

const Wishlist : React.SFC<Props> = props => {
    let key = 0;
    const wishlist =
        props.wishlist.map((x : any): JSX.Element => {
            return (
                <p key={key++}>
                    <label>{x.quantity} {pluralize(x.itemName, x.quantity)}</label>
                </p>);
        });

    return (
        <div className="wishlist">
            {wishlist}
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        wishlist: state.app.wishlist
    };
};

export default connect(
    mapStateToProps
)(Wishlist);