const express = require('express');
const router = express.Router();
const { getProfiles, getProfileById, seedProfiles } = require('../controllers/profileController');

// GET all profiles
router.get('/', getProfiles);

// GET profile by ID
router.get('/:id', getProfileById);

// POST seed database with sample data
router.post('/seed', seedProfiles);

module.exports = router;