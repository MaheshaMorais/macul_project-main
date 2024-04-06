import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Store from './pages/Store';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Private from './pages/privacy';
import Questions from './pages/Questions';
import Create from './pages/Createacc';
import ProfileSettings from './pages/ProfileSettings';
import {useEffect, useState} from "react";
import LoggedNavigation from "./components/LoggedNavigation";
import { useNavigate } from "react-router-dom"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = (user) => {
    localStorage.setItem("token", user.refreshToken)
    console.log('User logged in!');
    setIsLoggedIn(true)
  };

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, []);


  return (
      <BrowserRouter>
        {isLoggedIn ? <LoggedNavigation setIsLoggedIn={setIsLoggedIn} /> : <Navbar />}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/sign-in' element={<SignIn handleLogin={handleLogin}/>}/>
            <Route path='/sign-up' element={<SignUp handleLogin={handleLogin}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/privacy' element={<Private/>}/>
            <Route path='/question' element={<Questions/>}/>
            <Route path='/create-account' element={<Create handleLogin={handleLogin}/>}/>
            <Route path='/itemsfull' element={<Create/>}/>
            <Route path='/profilesettings' element={<ProfileSettings/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>)
}

export default App;


