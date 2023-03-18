const axios = require('axios');
const config = require('../config.example.js');

let getReposByUsername = (query) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `http://api.github.com/users/${query}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios.get(options.url, options)
  // .then((res) => res.json());

}

module.exports.getReposByUsername = getReposByUsername;