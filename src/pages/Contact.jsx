import React from "react";
import './Contact.css'
import contactimg from "../assets/Contact.png";

const Contact =() =>{
    return(
     

        <div className="contact-container">
        <div className="contact-form">
            <h2>Contact <span className="red-text">us</span></h2>
            <div className="input-group2">
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" placeholder="Enter your user name" />
            </div>
            <div className="input-group2">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="input-group2">
                <label htmlFor="problem">Report Problem</label>
                <textarea id="problem" rows="4" placeholder="Describe the problem"></textarea>
            </div>
            <div className="button-group2">
                <button className="clear-button">Clear</button>
                <button className="send-button">Send</button>
            </div>
        </div>
        <div className="contact-image">
            <img src={contactimg} alt="Contact" />
        </div>
    </div>
);




   


}

export default Contact;