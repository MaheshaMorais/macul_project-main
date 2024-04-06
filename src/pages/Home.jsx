import React, { useState, useEffect } from 'react';
import CommandButton from '../components/CommandButton';
import MainTopic from '../components/MainTopic';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';


const images = [
  '/Images/about1.jpg',
  '/Images/about2.jpg',
  '/Images/about3.jpg',
];

function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const Item = ({ imageSrc, topic, description,onBuy, onAddToCart }) => {
    return (
      <div className="item">
        <img src={imageSrc} alt={topic} className="item-image" />
        <h2 className="item-topic">{topic}</h2>
        <p className="item-description">{description}</p>
        <div className='item-buttons'>
        <CommandButton text="Buy Now" onClick={onBuy} className="custom-button1" />
        <CommandButton text="Add to Cart" onClick={onAddToCart} className="custom-button1" />
        </div>
      </div>
    );
  };

  const items = [
    {
      imageSrc: "Images/tyre1.jpg",
      topic: "Item 1",
      description: "Description of Item 1"
    },
    {
      imageSrc: "Images/engine.jpg",
      topic: "Item 2",
      description: "Description of Item 2"
    },
    {
      imageSrc: "Images/Brakes.jpeg",
      topic: "Item 3",
      description: "Description of Item 3"
    },
    {
      imageSrc: "Images/Belts.jpg",
      topic: "Item 4",
      description: "Description of Item 1"
    },
    {
      imageSrc: "Images/Battery.jpg",
      topic: "Item 5",
      description: "Description of Item 1"
    },
    {
      imageSrc: "Images/air filter.jpg",
      topic: "Item 6",
      description: "Description of Item 1"
    },
    // Add more items as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 

  return (
    <><div>
      <div className="Home1">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${images[imageIndex]})`,
          }}
        >
          <div className="overlay" />
          <div className="home1content">
            <h1 className='home1h1'>Welcome to </h1>
            <h2 className='home1h2'>MACUL </h2>
            <p className='home1p'>
              This is a simple example of a home page with a background image that
              changes transitions using React.
            </p>
            <CommandButton text="Explore More" className="custom-button" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="left-side">
          <img className='aboutimage' src="/Images/about2.jpg" alt="About Us" />
        </div>
        <div className="right-side">
          <hr className='servicehr2' />
          <MainTopic title="About MACUL" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
            <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="social-media-box">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="Images/facebook2.png" alt="Facebook" className="social-media-icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="Images/instagram2.png" alt="Instagram" className="social-media-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="Images/twitter2.png" alt="Twitter" className="social-media-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="home-contact-section">
        <div className="contact-left-side">
          <hr className='servicehr2' />
          <MainTopic title="Contact Us" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
            <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sit amet mi euismod laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="social-media-box">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="Images/facebook2.png" alt="Facebook" className="social-media-icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="Images/instagram2.png" alt="Instagram" className="social-media-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="Images/twitter2.png" alt="Twitter" className="social-media-icon" />
            </a>
          </div>
        </div>
        <div className="contact-right-side">
          <img className='homecontactimage' src="/Images/about2.jpg" alt="Contact us" />
        </div>

      </div>
    </div>
    
    
    
    
    
    
    <div className="home-store-section">

        <hr className='servicehr2' />
        <MainTopic title="Our Store" />
        <div className="slider-container">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index}>
                <Item
                  imageSrc={item.imageSrc}
                  topic={item.topic}
                  description={item.description} />
              </div>
            ))}
          </Slider>
        </div>
        <CommandButton text="View More" className="custom-button3" />
      </div></>


  );

}

export default Home;