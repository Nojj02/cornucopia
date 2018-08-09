import './WishForm.css';

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
    wishFormSubmit 
} from '../actions';

import { RootState } from '../reducers';

interface DispatchProps {
    onWishFormSubmit(props : any) : void;
}

interface RootStateProps {
}

interface Props extends DispatchProps, RootStateProps {
}

interface ComponentState {
    itemName : string;
    cost : number;
}

class WishForm extends React.Component<Props, ComponentState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            itemName : '',
            cost: 0
        };

        this._onItemNameChange = this._onItemNameChange.bind(this);
        this._onCostChange = this._onCostChange.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
    }

    _onItemNameChange(event : any) {
        this.setState({
            itemName: event.currentTarget.value
        });
    }

    _onCostChange(event : any) {
        this.setState({
            cost: event.currentTarget.value
        });
    }

    _onFormSubmit(event: any) {
        event.preventDefault();

        this.props.onWishFormSubmit({
            itemName: this.state.itemName,
            cost : this.state.cost
        });

        this.setState({
            itemName : '',
            cost : 0
        });
    }

    render() {
            return (
            <div className="wishform">
                <form>
                    <p>
                        <label>Add new Item</label>
                        <input type="text" value={this.state.itemName} onChange={this._onItemNameChange} />
                    </p>
                    <p>
                        <label>Cost</label>
                        <input type="number" value={this.state.cost} onChange={this._onCostChange} />
                    </p>
                    <button type="submit" onClick={this._onFormSubmit}>Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state : RootState) : RootStateProps => {
    return {
    };
};

const mapDispatchToProps = (dispatch : Dispatch<any>) : DispatchProps => {
    return {
        onWishFormSubmit : (form) => {
            dispatch(wishFormSubmit(form));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WishForm);