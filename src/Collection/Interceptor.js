// import { signoutUser } from '@/store/auth/reducer';
import axios from 'axios';
import store from '../Store/Store';

export const BASE_URL = "http://ec2-34-230-37-2.compute-1.amazonaws.com"


const instance = axios.create({
  baseURL: BASE_URL,
});

export const clearUserData = () => {
  // store.dispatch(signoutUser());
};
export const getHeaders = async () => {
 
  if (store.getState()?.Authlogin?.data?.token) {
    return {
      Authorization: `Bearer ${store.getState()?.Authlogin?.data?.token}`,
    };
  }

  return {};
};

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const conf = config;
    console.log(store,'--store')
    if (store.getState()?.Authlogin?.data?.token) {
      const token = `Bearer ${store.getState()?.Authlogin?.data?.token}`;
      conf.headers.Authorization = token;
    }

    return conf;
  },
  // Do something before request is sent
  (error) =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Do something with response error
    if (
      error.response &&
      error.response.status === 401
    ) {
      clearUserData();
    }
    return Promise.reject(error);
  },
);

export default instance;