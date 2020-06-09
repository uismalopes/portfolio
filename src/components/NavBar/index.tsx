import React, { useState } from 'react';
import { FiHome, FiUser, FiMail, FiBriefcase, FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import './style.css';
import Logo from '../../assets/images/logo.svg';

const NavBar = ()=>{
    
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuMobile = ()=>{
        setShowMenu(!showMenu);
    }

    return(
        <>
        <span className="icon-menu d-flex d-lg-none text-white h1 m-0" onClick={handleMenuMobile}>
            {
                showMenu ? (<FiX />) : <FiMenu />
            }
        </span>
        
        <div className={`content-navbar hide-mobile ${showMenu ? 'show' : ''}`} id="menu-container">
            <nav className="nav-bar d-flex align-items-center">
                <div className="w-100">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul className="list-menu mx-0 my-5 p-0">
                        <li className="nav-link-item mb-3">
                            <NavLink 
                            to="/"
                            activeClassName="active"
                            exact={true}
                            onClick={handleMenuMobile}
                            >
                                <span className="icon">
                                    <FiHome />
                                </span>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-link-item mb-3">
                            <NavLink 
                            to="/about"
                            activeClassName="active"
                            onClick={handleMenuMobile}
                            >
                                <span className="icon">
                                    <FiUser />
                                </span>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-link-item mb-3">
                            <NavLink 
                            to="/works"
                            activeClassName="active"
                            onClick={handleMenuMobile}
                            >
                                <span className="icon">
                                    <FiBriefcase />
                                </span>
                                Works
                            </NavLink>
                        </li>
                        <li className="nav-link-item">
                            <NavLink 
                            to="/contact"
                            activeClassName="active"
                            onClick={handleMenuMobile}
                            >
                                <span className="icon">
                                    <FiMail />
                                </span>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    );
}

export default NavBar;