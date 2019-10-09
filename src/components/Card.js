import React, { Component } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

export class Card extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="card" style="width: 18rem;">
                    <img src={ this.props.image } class="card-img-top" alt="Image of Instrument" />
                    <div className="card-body">
                        <h5 className="card-title">{ this.props.title }</h5>
                        <p className="card-text">{ this.props.was }</p>
                        <a to="#" className="btn btn-primary">{ this.props.price }</a>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Card;