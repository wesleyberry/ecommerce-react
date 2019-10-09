import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#e7e7e7' }}>
                <a className="navbar-brand" style={ navBrand } to="#">GUITAR STORE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ marginLeft: "auto", marginRight: '40px' }}>
                    <li className="nav-item dropdown" style={{ marginRight: '20px' }}>
                        <a className="nav-link dropdown-toggle" style={ dropDownToggle } to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Guitars
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" to="#">Acoustic</a>
                        <a className="dropdown-item" to="#">Electric</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" to="#">All Guitars</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown" style={{ marginRight: '20px' }}>
                        <a className="nav-link dropdown-toggle" style={ dropDownToggle } to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Basses
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" to="#">Acoustic</a>
                        <a className="dropdown-item" to="#">Electric</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" to="#">All Basses</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown" style={{ marginRight: '20px' }}>
                        <a className="nav-link dropdown-toggle" style={ dropDownToggle } to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Amps
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" to="#">Guitar Amps</a>
                        <a className="dropdown-item" to="#">Bass Amps</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" to="#">All Amps</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const navBrand = {
    fontWeight: '700',
    fontSize: '30px',
    marginLeft: '40px'
}
const dropDownToggle = {
    fontSize: '24px',
    color: 'black'
}