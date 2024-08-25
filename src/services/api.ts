import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Riot-Token': process.env.RIOT_API_KEY 
  }
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.error('Axios error:', error);
    return Promise.reject(error);
  }
);

const api = (axios: AxiosInstance) => {
  return {
    post: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ) {
      return axios.post<T>(url, body, config);
    },
    get: function <T>(
      url: string,
      config: AxiosRequestConfig = {}
    ) {
      return axios.get<T>(url, config);
    }
  };
};

export default api(axiosInstance);
