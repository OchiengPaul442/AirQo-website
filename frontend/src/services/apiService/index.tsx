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

// Function to fetch all events
export const getAirQoEvents = async () => {
  try {
    const response = await apiClient.get('/events/?category=airqo');
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Function to fetch all clean air events
export const getCleanAirEvents = async () => {
  try {
    const response = await apiClient.get('/events/?category=cleanair');
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Function to fetch a single event by ID
export const getEventDetails = async (id: string) => {
  try {
    const response = await apiClient.get(`/events/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
};

// Function to fetch highlights
export const getHighlights = async () => {
  try {
    const response = await apiClient.get('/highlights/');
    return response.data;
  } catch (error) {
    console.error('Error fetching highlights:', error);
    throw error;
  }
};

// Function to fetch careers
export const getCareers = async () => {
  try {
    const response = await apiClient.get('/careers/');
    return response.data;
  } catch (error) {
    console.error('Error fetching careers:', error);
    throw error;
  }
};

// Function to fetch a single career by ID
export const getCareerDetails = async (id: string) => {
  try {
    const response = await apiClient.get(`/careers/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching career details:', error);
    throw error;
  }
};

// Function to get departments
export const getDepartments = async () => {
  try {
    const response = await apiClient.get('/departments/');
    return response.data;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};

// Function to get publications
export const getPublications = async () => {
  try {
    const response = await apiClient.get('/publications/');
    return response.data;
  } catch (error) {
    console.error('Error fetching publications:', error);
    throw error;
  }
};
