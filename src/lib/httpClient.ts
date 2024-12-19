import axios, { AxiosError } from 'axios';
import { APIError } from '@/types/errors';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Origin': 'https://d21puou9fcpb3.cloudfront.net'
  },
  withCredentials: false
});

httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<APIError>) => {
    if (error.response) {
      console.error("API Error Response:", {
        status: error.response.status,
        headers: error.response.headers,
        data: error.response.data
      });
    } else if (error.request) {
      console.error("API Request Error:", error.request);
    } else {
      console.error("API Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default httpClient;
