import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { API_URL } from './constants';

export const backendRequest = applyCaseMiddleware(
  axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
);

const backendApi = async (method, path, payload) => {
  return await axios.post('/api/backend', { method, path, payload });
};

export default backendApi;
