const API_URL = 'http://localhost:8080/api/test/';

const getToken = () => localStorage.getItem('token');

const getPublicContent = () => {
  return fetch(API_URL + 'all').then(res => res.text());
};

const getUserBoard = () => {
  return fetch(API_URL + 'user', {
    headers: { 'x-access-token': getToken() },
  }).then(res => res.text());
};

const getModeratorBoard = () => {
  return fetch(API_URL + 'mod', {
    headers: { 'x-access-token': getToken() },
  }).then(res => res.text());
};

const getAdminBoard = () => {
  return fetch(API_URL + 'admin', {
    headers: { 'x-access-token': getToken() },
  }).then(res => res.text());
};

const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default userService;
