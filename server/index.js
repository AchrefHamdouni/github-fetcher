const express = require('express');
let app = express();
const {getReposByUsername}= require("../helpers/github.js")
const { save,getRepos,findAll,findOne } = require("../database/index.js")
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  findOne(req.body.user).then((data) => {
    if (data.length) {
      findAll().then((data => res.json(data)))
    } else {
      getReposByUsername(req.body.user).then((response) => {
          response.data.map(e => save({
            repo_id: e.id,
            name: e.name,
            user: e.owner.login,
            avatar_url: e.owner.avatar_url,
            html_url: e.html_url,
            description: e.description,
            url: e.url,
            forks_url: e.forks_url,
            stargazers_count: e.stargazers_count,
            watchers_count: e.watchers_count,
            forks_count: e.forks_count
          })
          )
          findAll().then((data=>res.json(data)))
        }
        )
    }
  })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  getRepos().then((data) =>
    res.send(data))
    
});

let port = 1128;

app.listen(port, function () {
  console.log(`Now listening on port ${port}`);
});

