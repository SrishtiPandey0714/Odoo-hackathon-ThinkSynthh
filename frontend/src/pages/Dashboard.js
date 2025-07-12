import React, { useState, useEffect } from 'react';
import './App.css';


export default function Dashboard() {
  const [availability, setAvailability] = useState('Availability');
  const [searchText, setSearchText] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [profiles, setProfiles] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }

    // Fetch all users from backend
    fetch('http://localhost:5000/api/users/all')
      .then(res => res.json())
      .then(data => {
        // Exclude the currently logged-in user from the display list
        const userId = storedUser ? JSON.parse(storedUser).id : null;
        const otherUsers = data.filter(u => u.id !== userId);
        setProfiles(otherUsers);
      })
      .catch(err => console.error('Failed to fetch users:', err));
  }, []);

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchText.toLowerCase()) ||
    (profile.skills && profile.skills.toLowerCase().includes(searchText.toLowerCase()))
  );

  const profilesPerSlide = 3;
  const totalSlides = Math.ceil(filteredProfiles.length / profilesPerSlide);
  const startIndex = currentSlide * profilesPerSlide;
  const visibleProfiles = filteredProfiles.slice(startIndex, startIndex + profilesPerSlide);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div>Skill Swap</div>
        <div className="log">Welcome, {loggedInUser ? loggedInUser.name : 'Guest'}</div>
      </header>

      <hr className="divider" />

      {/* Filters and Search */}
      <div className="filters-search">
        <div>
          <select
            value={availability}
            onChange={e => setAvailability(e.target.value)}
            className="select-availability"
          >
            <option disabled>Availability</option>
            <option>Available</option>
            <option>Busy</option>
          </select>
        </div>
        <div className="search-wrapper">
          <label htmlFor="search" className="search-label">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search skills or name..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Show Logged-in User Profile */}
      {loggedInUser && (
        <div className="profile-card current-user">
          <h3>Your Profile</h3>
          <div className="profile-info">
            <div className="profile-avatar"></div>
            <div className="profile-text">
              <div className="profile-name">{loggedInUser.name}</div>
              <div className="profile-skills">{loggedInUser.skills || 'Skills not set'}</div>
              <div className="profile-email">{loggedInUser.email}</div>
            </div>
          </div>
        </div>
      )}

      {/* Carousel of Other Users */}
      <div className="profiles">
        {visibleProfiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <div className="profile-info">
              <div className="profile-avatar"></div>
              <div className="profile-text">
                <div className="profile-name">{profile.name}</div>
                <div className="profile-skills">{profile.skills || 'No skills listed'}</div>
              </div>
            </div>
            <button className="request-button">Request</button>
          </div>
        ))}
      </div>

      {/* Carousel Dots */}
      <div className="carousel-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
