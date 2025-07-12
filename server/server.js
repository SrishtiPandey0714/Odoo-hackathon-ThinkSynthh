const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Received GET /');
  res.send('Backend Running!');
});

app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
