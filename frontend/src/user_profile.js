import React, { useEffect, useState } from 'react';
import './App.css'; // Use your existing App.css for styling

export default function OthersProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // COMMENT OUT THE FETCH CALL
    // fetch(http://localhost:3000/user/1)
    //   .then(res => res.json())
    //   .then(data => setUser(data))
    //   .catch(err => console.error('Error fetching user data:', err));

    // ✅ USE MOCK DATA
    const mockUser = {
      name: 'Alice Johnson',
      photo_url: 'https://via.placeholder.com/120',
      location: 'Kolkata, India',
      skills_offered: 'React, Node.js',
      skills_wanted: 'UI/UX Design',
      availability: 'Available',
      rating: '⭐ 4.5',
    };

    setTimeout(() => setUser(mockUser), 1000); // Simulate network delay
  }, []);

  if (!user) {
    return (
      <div className="user-profile-container">
        <p>Loading profile...</p>
        <div className="dot-loader">
          <span>.</span><span>.</span><span>.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="user-profile-container">
      <div className="user-profile-card">
        <div className="user-profile-content">
          <img
            src={user.photo_url}
            alt="User"
            className="user-avatar"
          />
          <div className="user-info-block">
            <h2>{user.name}</h2>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Skills Offered:</strong> {user.skills_offered}</p>
            <p><strong>Skills Wanted:</strong> {user.skills_wanted}</p>
            <p><strong>Availability:</strong> {user.availability}</p>
            <p><strong>Rating:</strong> {user.rating}</p>
            <button className="request-button">Request Swap</button>
          </div>
        </div>
      </div>
    </div>
  );
}