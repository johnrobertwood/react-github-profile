import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const users = {
  login: "johnrobertwood",
  id: 11791782,
  avatar_url: "https://avatars3.githubusercontent.com/u/11791782?v=3",
  url: "https://github.com/johnrobertwood",
  name: "John Robert Wood",
  blog: "http://johnrobertwood.github.io",
  location: null,
  email: "woodjohn185@gmail.com",
  hireable: true,
  bio: null,
  repos_url: "https://api.github.com/users/johnrobertwood/repos"
};

class UserApi {
  static getUser(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, name));
      }, delay);
    });
  }
}

export default UserApi;
