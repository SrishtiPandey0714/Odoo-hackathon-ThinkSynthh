const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const {
  getMe,
  updateProfile
} = require('../controllers/userController');

router.get('/me', auth, getMe);
router.put('/update', auth, upload.single('profilePhoto'), updateProfile);

module.exports = router;
