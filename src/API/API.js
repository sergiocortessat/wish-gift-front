// const userEndpoint = 'http://localhost:3000/users';


const userEndpoint = 'https://wish-gift.herokuapp.com/users';

// // Get requests

export const getUsers = async () => {
  const response = await fetch(userEndpoint);
  const user = await response.json();
  return user;
};

export const getUser = async (id) => {
  const response = await fetch(`${userEndpoint}/${id}`);
  const user = await response.json();
  return user;
};

// Post requests

export const postUser = async (data, accessToken) => {
  fetch(userEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};


// Patch

// export const editGoals = async (data, accessToken, coinId) => {
//   try {
//     const response = await fetch(`${goalEndpoint}/${coinId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${accessToken}`,
//       },
//       body: JSON.stringify(data),
//     });
//     const user = await response.json();
//     return user;
//   } catch (error) {
//     return error.message;
//   }
// };

// DELETE

// export const deleteMeasurement = async (id, accessToken) => {
//   fetch(`${measurementEndpoint}/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${accessToken}`,
//     },
//   });
// };
