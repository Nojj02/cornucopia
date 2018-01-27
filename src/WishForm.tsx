import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
    wishFormFieldChange, 
    wishFormSubmit 
} from './actions';

interface DispatchProps {
    onItemNameChange : React.ReactEventHandler<HTMLInputElement>;
    onCostChange : React.ReactEventHandler<HTMLInputElement>;
    onWishFormSubmit : React.ReactEventHandler<HTMLButtonElement>;
}

interface StateProps {
    itemName : string;
    cost : number;
}

interface Props extends DispatchProps, StateProps {
}

const WishForm = (props : Props) => {
    return (
        <div className="wishform">
            <form>
                <p>
                    <label>Add new Item</label>
                    <input type="text" value={props.itemName} onChange={props.onItemNameChange} />
                </p>
                <p>
                    <label>Cost</label>
                    <input type="number" value={props.cost} onChange={props.onCostChange} />
                </p>
                <button type="submit" onClick={props.onWishFormSubmit}>Add</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state : any) : StateProps => {
    return {
        cost : state.wishForm.cost,
        itemName : state.wishForm.itemName
    };
};

const mapDispatchToProps = (dispatch : Dispatch<any>) : DispatchProps => {
    return {
        onCostChange : (event) => {
            dispatch(wishFormFieldChange('cost', event.currentTarget.value));
        },
        onItemNameChange : (event) => {
            dispatch(wishFormFieldChange('itemName', event.currentTarget.value));
        },
        onWishFormSubmit : (event) => {
            event.preventDefault();
            dispatch(wishFormSubmit(null));
            // dispatch(wishFormSubmit(form))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WishForm);