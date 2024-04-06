// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';

function Navbar(){
    return(
        <div className="navbar-container">
            
            <div className="content-container">
                <div className="nav-bar-content">
                    
                    <div className="navbar-logo">Macul</div>
                    
                    <div className="navbar-links">
                        <Link to="/" className="nav-link" id="active">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/store" className="nav-link">Store</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>
                    
                    <div className="search-login-signup">
                        <div className="search-bar-box">
                            <SearchIcon className="searchicon"/>
                            <input placeholder="Search.." className="search-input" />
                        </div>
                        <Link to="/sign-in" className="nav-link">Login</Link>
                        <Link to="/sign-up" className="signup-button btn">Signup</Link>
                    </div>
                </div>

                

            </div>
        </div>
    );
}

export default Navbar;
