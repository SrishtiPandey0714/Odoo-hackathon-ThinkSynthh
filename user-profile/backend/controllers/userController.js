const db = require('../utils/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getMe = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [req.user.id]);
  res.json(rows[0]);
};

exports.updateProfile = async (req, res) => {
  const {
    name,
    location,
    skillsOffered,
    skillsWanted,
    availability,
    profileVisibility
  } = req.body;

  let profilePhoto = req.file ? req.file.filename : null;

  await db.query(`
    UPDATE users SET name=?, location=?, skillsOffered=?, skillsWanted=?, availability=?, profileVisibility=?, 
    profilePhoto=IFNULL(?, profilePhoto) WHERE id=?`,
    [name, location, skillsOffered, skillsWanted, availability, profileVisibility, profilePhoto, req.user.id]);

  res.json({ message: 'Profile updated' });
};
