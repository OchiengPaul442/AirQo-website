import axios from 'axios';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_DJANGO_API_URL || 'http://127.0.0.1:8000/api';

// Axios instance to include any necessary headers
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch press articles
export const getPressArticles = async () => {
  try {
    const response = await apiClient.get('/press/');
    return response.data;
  } catch (error) {
    console.error('Error fetching press articles:', error);
    throw error;
  }
};

// Function to fetch impact numbers
export const getImpactNumbers = async () => {
  try {
    const response = await apiClient.get('/impact-number/');
    return response.data;
  } catch (error) {
    console.error('Error fetching impact numbers:', error);
    throw error;
  }
};