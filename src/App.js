import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [availability, setAvailability] = useState('Availability');
  const [searchText, setSearchText] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const profiles = [
    { id: 1, name: 'Alice Johnson', skills: 'JavaScript, React' },
    { id: 2, name: 'Bob Smith', skills: 'Python, Django' },
    { id: 3, name: 'Carol Lee', skills: 'UI/UX Design, Figma' },
    { id: 4, name: 'David Kim', skills: 'Java, Spring' },
    { id: 5, name: 'Eva Green', skills: 'C#, .NET' },
    { id: 6, name: 'Frank Moore', skills: 'Ruby on Rails' },
    { id: 7, name: 'Grace Park', skills: 'Angular, TypeScript' },
    { id: 8, name: 'Henry Ford', skills: 'Go, Kubernetes' },
    { id: 9, name: 'Isabel Cruz', skills: 'PHP, Laravel' },
  ];

  const profilesPerSlide = 3;
  const totalSlides = Math.ceil(profiles.length / profilesPerSlide);

  // Calculate profiles to show on current slide
  const startIndex = currentSlide * profilesPerSlide;
  const visibleProfiles = profiles.slice(startIndex, startIndex + profilesPerSlide);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div>Skill Swap</div>
        <div className="log">Login</div>
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
        <div className="search-wrapper"> {/* Wrap search label and input */}
          <label htmlFor="search" className="search-label">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Enter your text"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

     
      

      <div className="profiles">
        {visibleProfiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <div className="profile-info">
              <div className="profile-avatar"></div>
              <div className="profile-text">
                <div className="profile-name">{profile.name}</div>
                <div className="profile-skills">{profile.skills}</div>
              </div>
            </div>
            <button className="request-button">Request</button>
          </div>
        ))}
      </div>

      {/* Carousel dots */}
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