import React, {useState} from 'react';
import googleimg from "../assets/Google.jpg";
import './SignIn.css';
import '../App.js'
import logoimg from "../assets/Logo.png";
import {Link, useNavigate} from 'react-router-dom';
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from "firebase/auth"

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

const SignIn = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const onLogin = async () => {
    signInWithEmailAndPassword(auth ,email, password)
        .then((userCredential) => {
          let user = userCredential.user
          console.log(user)
          handleLogin(user)
          navigate("/")
        })
        .catch((error) => {
          console.log(error)
        })
  }

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('User signed in with Google:', user);
      handleLogin(user)
      navigate("/")
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing in with Google:', errorCode, errorMessage);
    }
  }

  return (
    <div className="signin-container">
      <div className="left">
        <img src={logoimg} alt="Logo" />
      </div>
      <div className="right">
      
        <p>
          <span className='black-text'>Sign</span>
          <span className='red-text'>In</span>
          </p>
        <div className="google-signin" onClick={signUpWithGoogle}>
          <input type="text" placeholder="Sign in with Google" />
          <img src={googleimg} alt="Google Icon" />
        </div>
        <h2 className='or-line'>or sign in with email</h2>
        <div className="input-group">
          <label htmlFor="username">User name or email</label>
          <input type="text" id="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)}/>
          <a href="#" className="forgot-password">Forgot?</a>
        </div>
        <button className='signin-button' onClick={onLogin}>Sign In</button>
        <h4>Don't have an account? <Link to="/create-account">Create Account</Link></h4>
      </div>
    </div>
  );
}

export default SignIn;
