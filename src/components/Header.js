import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink className="navbar-brand ml-5 d-flex align-items-center" to="/">
                    <i className="fas fa-3x fa-space-shuttle mr-2"></i> Streamy
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3">
                            <NavLink className="nav-link font-weight-bolder" to="/">Streams</NavLink>
                        </li>
                        <GoogleAuth />
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
