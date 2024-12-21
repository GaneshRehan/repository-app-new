// src/components/Login.jsx
import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

// Dummy user credentials
const DUMMY_USER = {
  email: "user@example.com",
  password: "password123"
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    // Check credentials against dummy user
    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      // Store login state in localStorage (you might want to use a token in a real app)
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      
      // Redirect to repositories page
      navigate('/repositories');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/api/placeholder/100/40" alt="CodeAnt AI Logo" className="logo" />
        <h2>Welcome to CodeAnt AI</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <div className="stats">
          <div className="stat-item">
            <h3>500k+</h3>
            <p>Users</p>
          </div>
        </div>
        <div className="auth-options">
          <button className="auth-button google">Sign in with Google</button>
          <button className="auth-button github">Sign in with GitHub</button>
        </div>
        {/* Add demo credentials helper */}
        <div className="demo-credentials">
          <p>Demo credentials:</p>
          <p>Email: user@example.com</p>
          <p>Password: password123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;