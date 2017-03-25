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
  },
  {
    id: "45223479",
    name: "contact-app",
    html_url: "https://github.com/johnrobertwood",
    description: "A contact list app with MEAN stack",
    clone_url: "https://github.comdfdfdf/johnrobertwood/contact-app.git",
    owner: {
      login: "johnrobertwood",
      avatar_url: "https://avatardfdfs3.githubusercontent.com/u/11791782?v=3"
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

  static getRepo() {
    return new Promise((resolve, reject) => {
      resolve(Object.assign([], repos[0]));
    });
  }

}

export default RepoApi;
