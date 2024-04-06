// About us page
import React from 'react';
import MainTopic from '../components/MainTopic';
import Service from '../components/Service';
import Customer from '../components/Customer';
import './About.css';

export default function About() {
  return (

    <><><section className="about-section">
          <div className="left-side">
              <img className='aboutimage'  src="/Images/about2.jpg" alt="About Us" />
          </div>
          <div className="right-side">
            <hr className='servicehr2'/>
              <MainTopic title="About MACUL" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing Nullam accumsan nunc sit amet 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum doorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing Nullam accumsan nunc sit amet 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum do
                </p>
          </div>
      </section>
      
      
      
      <section className="services-section">
              <MainTopic title="Our Services" />
              <div className="services">
              <Service logo="/Images/secure payment1.png" topic="Secure Payment" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                  <Service logo="/Images/customize.jpg" topic="Customize Options" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                  <Service logo="/Images/fast delivery.jpg" topic="Fast Delivery" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                  <Service logo="/Images/availability.png" topic="24/7 Availability" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                  <Service logo="/Images/warranty.jpg" topic="3 Year Warranty" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                 
                  <Service logo="/Images/return and refund.png" topic="Return and Refund " text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                  
                  
              </div>
          </section>
          
          
          </><section className="reviews-section">
              <MainTopic title="Customer Reviews" />
              <div className="customers">
                  <Customer image="/Images/customer1.jpg" topic="Mark Burch" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.ed do eiusmod tempor incididunt" />
                  <Customer image="/Images/customer2.jpg" topic="Jenny Lawendowski"text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ed do eiusmod tempor incididunt" />
                  <Customer image="/Images/customer3.jpg" topic="James Wilbert"text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                 
              </div>
          </section></>
  );
}