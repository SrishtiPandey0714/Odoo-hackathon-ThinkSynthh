import React, { useState } from 'react';

export default function UserProfile() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [skillsOffered, setSkillsOffered] = useState(['Graphic Design', 'Video Editing', 'Photoshop']);
  const [skillsWanted, setSkillsWanted] = useState(['Python', 'JavaScript', 'Manager']);
  const [availability, setAvailability] = useState('weekends');
  const [profileVisibility, setProfileVisibility] = useState('Public');
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Handlers for adding/removing skills can be added if needed

  return (
    <div style={{ maxWidth: 900, margin: '20px auto', fontFamily: 'Arial, sans-serif', border: '1px solid black', borderRadius: 10, padding: 20 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <button style={{ color: 'green', background: 'none', border: 'none', cursor: 'pointer', marginRight: 10 }}>Save</button>
          <button style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Discard</button>
        </div>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'underline', cursor: 'pointer' }}>Swap request</a>
          <a href="#" style={{ textDecoration: 'underline', cursor: 'pointer' }}>Home</a>
          <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#ccc', overflow: 'hidden' }}>
            {/* Placeholder profile image */}
            <img src={profilePhoto || 'https://via.placeholder.com/40'} alt="Profile" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      {/* Form */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left side form fields */}
        <div style={{ flex: 1, maxWidth: 600 }}>
          <div style={{ marginBottom: 15 }}>
            <label style={{ fontWeight: 'bold', marginRight: 10 }}>Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ borderBottom: '1px solid black', outline: 'none', width: '60%' }}
            />
          </div>

          <div style={{ marginBottom: 15 }}>
            <label style={{ fontWeight: 'bold', marginRight: 10 }}>Location</label>
            <input
              type="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
              style={{ borderBottom: '1px solid black', outline: 'none', width: '60%' }}
            />
          </div>

          <div style={{ marginBottom: 15 }}>
            <label style={{ fontWeight: 'bold', marginRight: 10 }}>Skills Offered</label>
            <div style={{ display: 'inline-flex', gap: 8, flexWrap: 'wrap', maxWidth: '60%' }}>
              {skillsOffered.map(skill => (
                <div key={skill} style={{ backgroundColor: '#ddd', borderRadius: 15, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>{skill}</span>
                  <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>×</button>
                </div>
              ))}
              <input type="text" placeholder="Add skill" style={{ borderBottom: '1px solid black', outline: 'none', minWidth: 80 }} />
            </div>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label style={{ fontWeight: 'bold', marginRight: 10 }}>Skills Wanted</label>
            <div style={{ display: 'inline-flex', gap: 8, flexWrap: 'wrap', maxWidth: '60%' }}>
              {skillsWanted.map(skill => (
                <div key={skill} style={{ backgroundColor: '#ddd', borderRadius: 15, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>{skill}</span>
                  <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>×</button>
                </div>
              ))}
              <input type="text" placeholder="Add skill" style={{ borderBottom: '1px solid black', outline: 'none', minWidth: 80 }} />
            </div>
          </div>

          <div style={{ marginBottom: 15 }}>
            <label style={{ fontWeight: 'bold', marginRight: 10 }}>Availability</label>
            <input
              type="text"
              value={availability}
              onChange={e => setAvailability(e.target.value)}
              style={{ borderBottom: '1px solid black', outline: 'none', width: '60%' }}
            />
          </div>

          <div style={{ marginBottom: 15 }}>
            <label style={{ fontWeight: 'bold', marginRight: 10 }}>Profile</label>
            <input
              type="text"
              value={profileVisibility}
              onChange={e => setProfileVisibility(e.target.value)}
              style={{ borderBottom: '1px solid black', outline: 'none', width: '60%' }}
            />
          </div>
        </div>

        {/* Right side profile photo */}
        <div style={{ width: 150, textAlign: 'center' }}>
          <div style={{ width: 120, height: 120, borderRadius: '50%', backgroundColor: '#ddd', margin: '0 auto', position: 'relative' }}>
            {/* Profile photo placeholder */}
            <img
              src={profilePhoto || 'https://via.placeholder.com/120'}
              alt="Profile"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
            <div style={{ marginTop: 8, fontSize: 12 }}>
              <button style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer', marginRight: 8 }}>Add/Edit</button>
              <button style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}