import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './LoggedNavigation.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavigationDropdown from './NavigationDropdown';


export default function LoggedNavigation() {
  const [openProfile, setOpenProfile] = useState(false)

  return (
    
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
                    
                <div className="search-user-details">
                    <div className="search-bar-box">
                            <SearchIcon className="searchicon"/>
                            <input placeholder="Search.." className="search-input" />
                    </div>
                    <div className="notification-cart-user">
                      <NotificationsIcon className="nav-link"/>
                      <ShoppingCartIcon className="nav-link"/>
                      <div className="user-profile-click">
                        <AccountCircleIcon className="nav-link" onClick={()=>setOpenProfile((prev)=>!prev)}/>
                        {
                          openProfile && <NavigationDropdown/>
                        }
                      </div>
                    </div>
                </div>
            </div>

                

         </div>
    </div>
  )
}
