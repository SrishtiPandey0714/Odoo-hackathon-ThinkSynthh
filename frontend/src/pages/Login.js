// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Optional shared styling

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
  localStorage.setItem("user", JSON.stringify(data.user));
  alert("Login successful!");
  window.location.href = "/dashboard";  //  Navigate to dashboard
} else {
  responseMsg.textContent = data.message || "Login failed";
}

    } catch (err) {
      console.error(err);
      setResponseMsg('Server error. Try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email}
               onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
               onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p className="response">{responseMsg}</p>
      <p>Don't have an account? <a href="/signup">Register here</a></p>
    </div>
  );
}
