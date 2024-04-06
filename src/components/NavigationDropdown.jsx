import React from 'react'
import './navigationdropdown.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export default function NavigationDropdown() {
  return (
    <div className='drop-down-area'>
        <div className="drop-down-content">
            <ul>
                <li>
                    <div className="profile-details">
                        <AccountCircleIcon className='profile-icon'/>
                        <span className="user-name">User Name</span>
                        <span className="user-email">user45778@gmail.com</span>
                    </div>
                </li>
                <li className='user-proflie-links'> <Link to="/profilesettings" className='user-proflie-link'>My Acount</Link></li>
                <li className='user-proflie-links'>My Order</li>
                <li className='user-proflie-links'>Logout</li>
            </ul>
        </div>
      
    </div>
  )
}
