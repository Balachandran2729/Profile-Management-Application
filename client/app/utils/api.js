// client/app/utils/api.js
const API_BASE_URL = 'https://profile-management-application-2.onrender.com';

export const fetchProfiles = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/profiles`);
    if (!response.ok) {
      throw new Error('Failed to fetch profiles');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    throw error;
  }
};

export const fetchProfileById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/profiles/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};