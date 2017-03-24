import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const repos = [
  {
    id: "56563762",
    name: "calculator",
    html_url: "https://github.com/johnrobertwood/calculator",
    description: "A simple calculator with jQuery",
    clone_url: "https://github.com/johnrobertwood/calculator.git",
    owner: {
      login: "johnrobertwood",
      avatar_url: "https://avatars3.githubusercontent.com/u/11791782?v=3"
    }
  }
];

class RepoApi {
  static getAllRepos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], repos));
      }, delay);
    });
  }
}

export default RepoApi;
