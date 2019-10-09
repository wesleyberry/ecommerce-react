import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card" style={{width: '100%', minHeight: '600px', justifyContent: 'center', border: 'none'}}>
                    <img src={ this.props.image } className="card-img-top" alt="Image of Instrument" style={{ objectFit: 'cover', height: '400px', width: '100%', cursor: 'pointer' }}/>
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: '40px', letterSpacing: '2px' }}>{ this.props.title }</h5>
                        <p className="card-text">Was: { this.props.was }</p>
                        <a to="#" className="btn btn-primary" style={{ fontSize: '20px', color: 'white', backgroundColor: 'red', cursor: 'pointer' }}>{ this.props.price }</a>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Card;