const Profile = require('../models/Profile');
const sampleProfiles = require('../data/sampleProfiles');

const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({});
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findOne({ id: req.params.id });
    
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const seedProfiles = async (req, res) => {
  try {
    await Profile.deleteMany({});
    
    const createdProfiles = await Profile.insertMany(sampleProfiles);
    
    res.status(201).json(createdProfiles);
  } catch (error) {
    console.error('Error seeding profiles:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getProfiles,
  getProfileById,
  seedProfiles
};