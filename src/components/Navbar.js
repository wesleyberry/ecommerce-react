import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" to="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" to="#">Action</a>
                        <a className="dropdown-item" to="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" to="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" to="#">Action</a>
                        <a className="dropdown-item" to="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" to="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" to="#">Action</a>
                        <a className="dropdown-item" to="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" to="#">Something else here</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
