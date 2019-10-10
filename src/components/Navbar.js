import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#e7e7e7' }}>
                <Link className="navbar-brand" style={ navBrand } to="/">Guitar World
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ marginLeft: "auto", marginRight: '40px' }}>
                    <li className="nav-item" style={{ marginRight: '20px' }}>
                        <Link className="nav-link" style={ dropDownToggle } to="guitars" role="button" aria-haspopup="true" aria-expanded="false">
                            Guitars
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginRight: '20px' }}>
                        <Link className="nav-link" style={ dropDownToggle } to="basses" role="button" aria-haspopup="true" aria-expanded="false">
                            Basses
                        </Link>
                    </li>
                    <li className="nav-item" style={{ marginRight: '20px' }}>
                        <Link className="nav-link" style={ dropDownToggle } to="amps"role="button" aria-haspopup="true" aria-expanded="false">
                            Amps
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const navBrand = {
    fontWeight: '700',
    fontSize: '40px',
    marginLeft: '40px'
}
const dropDownToggle = {
    fontSize: '30px',
    color: 'black'
}