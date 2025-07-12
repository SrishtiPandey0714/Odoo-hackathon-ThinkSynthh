import React, { useState } from 'react';
import SwapReq from './swapReq'; // Import swapReq component
import UserProfile from './userProfile';// Import userProfile component
import OthersProfile from './OthersProfile';
import './App.css';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide components array
  const slides = [
    <HomePage key="home" />,      // Slide 0: Homepage (this component is defined below)
    <EmptySlide key="slide1" />,
    <UserProfile key="userProfile" />,
    <OthersProfile key="OthersProfile" />,
    <EmptySlide key="slide4" />,
    <SwapReq key="swapReq" />,    // Slide 5: swapReq.js component
    <EmptySlide key="slide6" />,
  ];

  return (
    <div className="app-container">
      {slides[currentSlide]}

      {/* Carousel dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={dot ${index === currentSlide ? 'active' : ''}}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

// Define homepage component here (previous App.js content)
function HomePage() {
  const [availability, setAvailability] = useState('Availability');
  const [searchText, setSearchText] = useState('');

  const profiles = [
    { id: 1, name: 'Alice Johnson', skills: 'JavaScript, React' },
    { id: 2, name: 'Bob Smith', skills: 'Python, Django' },
    { id: 3, name: 'Carol Lee', skills: 'UI/UX Design, Figma' },
  ];

  const profilesPerSlide = 3;
  const totalSlides = Math.ceil(profiles.length / profilesPerSlide);
  const [slideIndex, setSlideIndex] = useState(0);

  const startIndex = slideIndex * profilesPerSlide;
  const visibleProfiles = profiles.slice(startIndex, startIndex + profilesPerSlide);

  return (
    <>
      <header className="header">
        <div className="logo">Skill Swap</div>
        <div className="log">Login</div>
      </header>

      <hr className="divider" />

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
                <div className="profile-skills">Skills Offered: </div>
                <div className="profile-skills-wanted">Skills Wanted: Example Skill</div>
                <div className="profile-rating">Rating: {'⭐'}</div>
              </div>
            </div>
            <button className="request-button">Request</button>
          </div>
        ))}
      </div>


    </>
  );
}

// Empty slide placeholder component
function EmptySlide() {
  return (
    <div style={{ padding: 40, textAlign: 'center', color: '#888' }}>
      <h2>Slide Content Coming Soon</h2>
    </div>
  );
}