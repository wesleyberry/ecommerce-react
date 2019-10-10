import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#e7e7e7' }}>
                <a className="navbar-brand" style={ navBrand } to="#">Guitar World</a>
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
                            <Link>
                                <a className="dropdown-item" to="#" style={{ cursor: 'pointer', fontSize: '24px' }}>Acoustic</a>
                            </Link>
                            <Link>
                                <a className="dropdown-item" to="#" style={{ cursor: 'pointer', fontSize: '24px' }}>Electric</a>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link>
                                <a className="dropdown-item" to="#" style={{ cursor: 'pointer', fontSize: '24px' }}>All Guitars</a>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown" style={{ marginRight: '20px' }}>
                        <a className="nav-link dropdown-toggle" style={ dropDownToggle } to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Basses
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link>
                                <a className="dropdown-item" to="#" style={{ cursor: 'pointer', fontSize: '24px' }}>Acoustic</a>
                            </Link>
                            <Link>
                                <a className="dropdown-item" to="#" style={{ cursor: 'pointer', fontSize: '24px' }}>Electric</a>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link>
                                <a className="dropdown-item" to="#" style={{ cursor: 'pointer', fontSize: '24px' }}>All Basses</a>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown" style={{ marginRight: '20px' }}>
                        <a className="nav-link dropdown-toggle" style={ dropDownToggle } to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Amps
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link>
                                <a className="dropdown-item" to="#" style={{ cursor: 'pointer', fontSize: '24px' }}>Guitar Amps</a>
                            </Link>
                            <Link>
                                <a className="dropdown-item" to="#" style={{ cursor: 'pointer', fontSize: '24px' }}>Bass Amps</a>
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link>
                                <a className="dropdown-item" to="#" style={{ cursor: 'pointer', fontSize: '24px' }}>All Amps</a>
                            </Link>
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
    fontSize: '40px',
    marginLeft: '40px'
}
const dropDownToggle = {
    fontSize: '30px',
    color: 'black'
}