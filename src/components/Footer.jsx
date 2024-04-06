// Footer.jsx

import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="content-container">
                <div className="footer-content">
                    
                    <div className="footer-content-links">
                        <div className="content-list">
                            <span className="link-title">Quick Links</span>
                            <ul>
                                <li>
                                    <Link to="/" className="footer-link-area">
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">Home</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/about" className="footer-link-area">
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">About</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/store" className="footer-link-area">
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">Store</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/contact" className="footer-link-area">
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">Contact us</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="content-list">
                            <span className="link-title">Extra Links</span>
                            <ul>
                                <li>
                                    <Link to="/#" className='footer-link-area'>
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">Our services</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/question" className='footer-link-area'>
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">Ask questions</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/terms" className='footer-link-area'>
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">Terms of use</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/privacy" className='footer-link-area'>
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">Privacy Policy</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="content-list">
                            <span className="link-title">Contact Info</span>
                            <ul>
                                <li>
                                    <Link to="/contact" className="footer-link-area">
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">+94 77 456 8469</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/contact" className="footer-link-area">
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">+94 71 214 2002</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/contact" className="footer-link-area">
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">wikumchamith@gmail.com</span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/contact" className="footer-link-area">
                                        <KeyboardArrowRightIcon className='footer-icon'/>
                                        <span className="footer-link">maheshamorais@gmail.com</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="content-list">
                            <span className="link-title">Follow Us</span>
                            <ul>
                                <li>
                                    <div className="footer-link-area">
                                        <FacebookIcon className='footer-icon'/>
                                        <a href="https://www.facebook.com" className="footer-link">Facebook</a>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="footer-link-area">
                                        <InstagramIcon className='footer-icon'/>
                                        <a href="https://www.instagram.com" className="footer-link">Instagram</a>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="footer-link-area">
                                        <XIcon className='footer-icon'/>
                                        <a href="https://www.twitter.com" className="footer-link">Twitter</a>
                                    </div>
                                </li>
                                
                                <li>
                                    <div className="footer-link-area">
                                        <LinkedInIcon className='footer-icon'/>
                                        <a href="https://www.linkedin.com" className="footer-link">LinkedIn</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="copywrite">
                        <p>Copyright ©2024 Macul. Design by Maculs’ developers</p>
                    </div>

                </div>
           
            </div>
                    
        </div>
    );
}

export default Footer;
