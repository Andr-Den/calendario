export const BASE_URL = 'http://localhost:3001';

export const getNotes = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

export const register = (name, description, date) => {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, description, date})
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}