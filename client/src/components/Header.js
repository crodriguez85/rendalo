import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <NavLink 
                to="/"
                className="navbar-brand">
                    Rendalo Test
            </NavLink>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className="nav-link"
                        activeClassName="active">
                        Usuarios
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/nuevo-cliente"
                        className="nav-link"
                        activeClassName="active">
                        Nuevo Usuario
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);
 
export default Header;