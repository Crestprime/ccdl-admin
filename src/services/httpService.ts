import axios from 'axios';

const TEST_URL = 'https://';

export const httpService = axios.create({
    baseURL: TEST_URL,
    decompress: true,
    timeout: 10 * 60 * 60,
});

httpService.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

httpService.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx triggers this function
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx trigger this function
    return Promise.reject(error);
  }
);