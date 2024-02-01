// utils/api.ts

import axios from 'axios';

// Set the base URL for your API
const API_BASE_URL = 'https://api.example.com';

// Create an instance of Axios with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Define your API request functions
export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async (userData: any) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Add more API request functions as needed

