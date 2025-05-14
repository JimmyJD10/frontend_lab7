const API_URL = 'http://localhost:8080/api/auth/';

const login = async (username, password) => {
  const response = await fetch(API_URL + 'signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (response.ok && data.accessToken) {
    localStorage.setItem('token', data.accessToken);
  }

  return data;
};

const register = async (username, email, password) => {
  const response = await fetch(API_URL + 'signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });

  return response.json();
};

const logout = () => {
  localStorage.removeItem('token');
};  

const authService = {
  login,
  register,
  logout,
};

export default authService;
