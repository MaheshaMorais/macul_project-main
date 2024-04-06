import React, {useState} from "react";
import './Createacc.css';
import backgroundimg from "../assets/background.png";
import {Link, useNavigate} from "react-router-dom";
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

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


const Create = ({ handleLogin }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate()

    const onCreateAccount = async () => {
        if (!name || !email || !password) {
            alert('Please fill in all fields');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            let user = userCredential.user;
            console.log("user", user)
            handleLogin(user)
            navigation("/")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error creating user:', errorCode, errorMessage);
        })
    }

    return (<div className="create-account-container">
            <div className="content-container">
                <div className="create-account-content">

                    <div className="create-account-title-container">
                        <span className="create-account-title-black">Create <span
                            className="create-account-title-red">account</span></span>
                    </div>

                    <div className="create-account-form-and-img-container">
                        <div className="create-account-left">

                            <div className="create-account-form-name-username">
                                <div className="create-acount-form-lable-and-input">
                                    <span className="create-account-input-lable">Name</span>
                                    <input type="text" placeholder="Name" name="name"
                                           className="create-account-input-box" onChange={e => setName(e.target.value)}/>
                                </div>
                            </div>

                            <div className="create-acount-form-lable-and-input">
                                <span className="create-account-input-lable">Email</span>
                                <input type="email" placeholder="Email" name="email"
                                       className="create-account-input-box" onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className="create-acount-form-lable-and-input">
                                <span className="create-account-input-lable">Password</span>
                                <input type="password" placeholder="Password" name="password"
                                       className="create-account-input-box" onChange={e => setPassword(e.target.value)}/>
                            </div>

                            <div className="create-account-check-box">
                                <input type="checkbox" className="checkbox-box"/>
                                <span className="checkbox-text">I agree with Macul's <Link to="/terms"
                                                                                           className="link-text">Terms of Service</Link>, <Link
                                    to="/privacy" className="link-text">Privacy Policy</Link>, and default <Link to="/"
                                                                                                                 className="link-text">Notification Settings</Link>.</span>
                            </div>

                            <div className="create-account-btn" onClick={onCreateAccount}>
                                <span className="create-account-btn-text">Create Account</span>
                            </div>

                            <div className="create-account-already-have-account">
                                <span className="already-have-account-text">Already have a account? <Link to="/sign-in"
                                                                                                          className="link-text">Sign in</Link></span>
                            </div>

                            <div className="crete-account-footer-text-area">
                                <span className="crete-account-footer-text">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
                            </div>

                        </div>
                        <div className="create-account-right">
                            <img src={backgroundimg} alt="create-account-img"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>);
}

export default Create;
