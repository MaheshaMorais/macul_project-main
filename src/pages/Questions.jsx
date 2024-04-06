import React from "react";
import './Questions.css'
import image1img from "../assets/image1.png";
import image2img from "../assets/image2.png";
import image3img from "../assets/image3.png";
import image4img from "../assets/image4.png";
import image5img from "../assets/image5.png";
import image6img from "../assets/image6.png";

const Questions= () =>{
    return(
      
        <section class="gallery" id="gallery">

        <h1 class="heading">Frequently asked questions</h1>
     
    
        <div class="box-container">
    
            <div class="box">
            <img src={image1img} alt="imagesignup" />
                <div class="content">
                    
                    <h3>What is Macul Auto?</h3>
                    <p>Macul Auto is a smart auto parts ordering system designed to streamline the process of obtaining replacement parts for vehicles involved in accidents or with damaged parts. It connects vehicle owners with appropriate dealers and simplifies interactions with insurance firms.</p>
                   
                </div>
            </div>
            <div class="box">
            <img src={image2img} alt="imagesignup" />
                <div class="content">
                    <h3>How does Macul Auto work?</h3>
                    <p>Users can upload real-time images of damaged or broken vehicle parts to the system. Using advanced technologies such as artificial intelligence and image processing, the system automatically recognizes the part and connects the user with relevant vendors who can supply the needed parts.</p>
                    
                </div>
            </div>
            <div class="box">
            <img src={image3img} alt="imagesignup" />
                <div class="content">
                    <h3>What benefits does Macul Auto offer to vehicle owners?</h3>
                    <p>Macul Auto makes it easier for vehicle owners to find compatible replacement parts quickly and efficiently. It eliminates the hassle of searching for parts manually and ensures correctness, compatibility, and prompt delivery.</p>
                    
                </div>
            </div>
            <div class="box">
            <img src={image4img} alt="imagesignup" />
                <div class="content">
                    <h3>How does Macul Auto ensure compatibility of auto parts?</h3>
                    <p>Macul Auto frequently interacts with current automotive databases and catalogs, providing users access to a wide range of auto parts suitable for different makes, models, and model years of vehicles. This connectivity minimizes the chances of mistakes or mismatches, ensuring that users get the right parts for their vehicles.</p>
                 
                </div>
            </div>
            <div class="box">
            <img src={image5img} alt="imagesignup" />
                <div class="content">
                    <h3>Is Macul Auto only useful for accident-damaged vehicles?</h3>
                    <p>While Macul Auto is particularly useful for vehicles involved in accidents, it can also assist users in obtaining replacement parts for any damaged or broken vehicle parts. Users can upload images of the damaged components, and the system will connect them with relevant vendors.</p>
                    
                </div>
            </div>
            <div class="box">
            <img src={image6img} alt="imagesignup" />
                <div class="content">
                    <h3>How does Macul Auto differentiate itself from other auto parts ordering systems?</h3>
                    <p>Macul Auto stands out by offering effective and accurate connections between users, vendors, and insurance parties. Its advanced technology, seamless integration with automotive databases, and collaboration with the insurance sector make it a unique and efficient solution for obtaining auto parts.</p>
                    
                </div>
            </div>
        </div>
        <div className="input-group5">
                <label htmlFor="problem">Ask Question</label>
                <textarea id="problem" rows="4" placeholder="Describe the question"></textarea>
            </div>
            <div className="button-group5">
                <button className="clear-button">Clear</button>
                <button className="send-button">Send</button>
            </div>
        </section>
    
   



        
    
    );
}
export default Questions;