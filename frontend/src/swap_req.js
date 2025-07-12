import React, { useState } from 'react';
import './App.css';

export default function NewPage() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    { id: 1, title: 'Learn React', category: 'Education', status: 'pending', rating: 4 },
    { id: 2, title: 'Grocery Shopping', category: 'Personal', status: 'accepted', rating: 5 },
    { id: 3, title: 'Workout Routine', category: 'Health', status: 'rejected', rating: 3 },
    { id: 4, title: 'Project Meeting', category: 'Work', status: 'pending', rating: 2 },
    { id: 5, title: 'Read a Book', category: 'Personal', status: 'accepted', rating: 5 },
    { id: 6, title: 'Meditation', category: 'Health', status: 'pending', rating: 4 },
  ];

  const filteredItems = items.filter(item => {
    if (filter === 'Pending') {
      return item.status === 'pending' &&
        item.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filter === 'All') {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return item.category === filter &&
        item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <div className="app-container">
      <header className="header">
        <div>Skill Swap Platform</div>
        <div className="log">Profile</div>
      </header>

      <hr className="divider" />

      <div className="filters-search">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="select-availability"
        >
          <option value="All">Pending</option>
        </select>

        <a href="/" className="home-link">Go to Home</a>  {/* Moved anchor tag here */}

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      

      <div className="profiles">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="profile-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="profile-photo" style={{ width: '60px', height: '60px', backgroundColor: '#ccc', borderRadius: '50%', marginRight: '15px' }}>
                {/* Placeholder for profile photo */}
              </div>
              <div className="profile-info" style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="profile-text">
                  <div className="profile-name">{item.title}</div>
                  <div className="profile-skills">Skills Offered: {item.category}</div>
                  <div className="profile-skills-wanted">Skills Wanted: Example Skill</div>
                  <div className="profile-rating">Rating: {'⭐'.repeat(item.rating)}</div>
                </div>
                <div className="profile-status" style={{ textAlign: 'right', minWidth: '150px' }}>
                  {item.status === 'pending' && (
                    <>
                      <div className="status">Status: Pending</div>
                      <button className="accept-button" style={{ marginRight: '10px' }}>Accept</button>
                      <button className="reject-button">Reject</button>
                    </>
                  )}
                  {item.status === 'accepted' && (
                    <div style={{ color: 'green', fontWeight: 'bold' }}>Accepted</div>
                  )}
                  {item.status === 'rejected' && (
                    <div style={{ color: 'red', fontWeight: 'bold' }}>Rejected</div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
  );
}