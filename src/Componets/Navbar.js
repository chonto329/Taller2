import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../style.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg p-5 ">
            <div className="container-fluid">
                <Link className="navbar-brand size" to="/inicio">Restaurant</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }                                
                                to="/inicio">
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` } 
                                to="/nuevo">
                                Nuevo restaurante
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` } 
                                to="/buscar">
                                Buscar Restaurante
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
