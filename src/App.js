import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import logo from './pictures/Logo.svg';
import MainPage from './MainPage'; // Make sure to import your mainpage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/main'); // Redirect to mainpage.js on form submit
  };

  return (
    <div className="App">
      <div className="background">
        <div className="login-box">
          <img src={logo} className="logo" alt="logo" />
          <h2>Calendar UBB</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <button type="submit" className="login-button">Enter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
/*
import React from 'react';
import './App.css';
import logo from './pictures/Logo.svg';
import wallpaper from './pictures/ubb.jpg';

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="login-box">
          <img src={logo} className="logo" alt="logo" />
          <h2>Calendar UBB</h2>
          <form>
            <input type="text" placeholder="Username" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <button type="submit" className="login-button">Enter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;*/