import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Card2 extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card" style={ cardDetails }>
                    <img src={ this.props.image } className="card-img-top" alt="Instrument" style={ imageDetails }/>
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: '40px', letterSpacing: '1px' }}>{ this.props.title }</h5>
                        <p className="card-text" style={{ fontSize: '20px' }}>{ this.props.description }</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const cardDetails = {
    height: '100%',
    justifyContent: 'center', 
    border: 'none', 
    backgroundColor: '#f7f7f7',
    padding: '10px 10px 0 10px'
}

const imageDetails = {
    objectFit: 'cover', 
    height: '400px', 
    width: '100%', 
    cursor: 'pointer', 
    margin: 'auto' 
}

export default Card2;