import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">No 123,De Mel Road</div>
            <div className="text-two">Colombo 07, Sri Lanka</div>
          </div>
          <div className="details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+94774568469</div>
            <div className="text-two">+94712142002</div>
          </div>
          <div className="details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">maheshamorais@gmail.com</div>
            <div className="text-two">wikum.chamith@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="input-box message-box">
              <textarea placeholder="Enter your message"></textarea>
            </div>
            <div className="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
