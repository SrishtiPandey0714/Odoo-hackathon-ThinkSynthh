const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Middleware to handle JSON & CORS
app.use(cors());
app.use(bodyParser.json());

// Use routes from routes/auth.js
app.use('/api', require('./routes/auth'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
