// App.js

import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to ChatApp</h1>
        <nav>
          <Link to="/personal" className="nav-link">
            Personal Chat
          </Link>
          <Link to="/public" className="nav-link">
            Public Chat
          </Link>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Connect with your friends and the world around you.</h2>
          <p>
            Join our community to enjoy personal and public chatting
            experiences.
          </p>
          <div className="cta-buttons">
            <Link to="/personal" className="btn primary-btn">
              Start Personal Chat
            </Link>
            <Link to="/public" className="btn secondary-btn">
              Join Public Chat
            </Link>
            <Link to='/group' className="btn primary-btn">
               Group chat
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="chat-illustration.png" alt="Chat Illustration" />
        </div>
      </section>
    </div>
  );
};

export default App;
