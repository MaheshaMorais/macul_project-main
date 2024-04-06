import React from 'react';
import googleimg from "../assets/Google.png";
import './SignUp.css'; // Importing the CSS file for styling
import SingUpimg from "../assets/Logo_2.png";
import { Link, useNavigate } from 'react-router-dom';
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyAG-N26KKZJLVvFZQDi86OxNocfVGIQ43U",

  authDomain: "macul-1f1cc.firebaseapp.com",

  projectId: "macul-1f1cc",

  storageBucket: "macul-1f1cc.appspot.com",

  messagingSenderId: "1030493895276",

  appId: "1:1030493895276:web:9dc9e753f05a0440d23649"

};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const SignUp = ({ handleLogin }) => {
  const navigate = useNavigate();

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      handleLogin(user)
      console.log('User signed in with Google:', user);
      navigate("/")

      // add navigation
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing in with Google:', errorCode, errorMessage);
    }
  }
  return (
    <div className="signup-container">
      <div className="content-container">
        <div className="signup-content">
          
          <div className="sing-up-left">
            <img src={SingUpimg} alt="imagesignup" />
          </div>
          
          <div className="sing-up-right">
            
            <span className='signup-title-black'>Sign <span className="signup-title-red">Up</span></span>
            
            <div className="signup-btn-area">
              
              <div className="google-signup-background" onClick={signUpWithGoogle}>
                <img src={googleimg} alt="Google Icon" />
                <span className="google-signup-text">Sign in with Google</span>
              </div>

              <div className="or-text-line">
                <span className="or-red-line"></span>
                <span className="-or-text">or</span>
                <hr className='or-red-line'/>
              </div>

              <div className="email-signup-background" onClick={()=> navigate('/create-account')}>
                <span className="email-signup-text">Continue with email</span>
              </div>

              <div className="sign-up-footer-text-area">
                <span className="sign-up-footer-text">By creating an account you agree with our <Link to="/terms" className='sign-up-footer-link'>Terms of Services</Link>, <Link to="/privacy" className='sign-up-footer-link'>privacy policies</Link>and our <Link to="/" className='sign-up-footer-link'>Notifications settings </Link></span>
                <span className="sign-up-footer-text">Already have an account? <Link to="/sign-in" className='sign-up-footer-link'>Sign in</Link></span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

