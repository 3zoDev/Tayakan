import axios from 'axios';

import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from './types';
import { USER_SERVER } from '../components/Config.js';

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/auth/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/auth/login`, dataToSubmit, {
      withCredentials: true,
    })
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export async function auth() {
  const request = await axios
    .get(`${USER_SERVER}/auth`, { withCredentials: true })
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/auth/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
