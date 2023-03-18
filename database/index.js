const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repo_id:{type:String, unique: true},
  name: String,
  user: String,
  avatar_url: String,
  html_url: String,
  description:String,
  url: String,
  forks_url: String,
  stargazers_count: Number,
  watchers_count: Number,
  forks_count: Number,
});

let Repo = mongoose.model('Repo', repoSchema);


let getRepos=()=>{
  return Repo.find({})
      .sort('stargazers_count')
      .limit(50)
}

let save = async (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
    let newRepo= new Repo(data)
    await newRepo.save()
}
let findOne=async(username)=>{
  var found= await Repo.find({user:username})
  return found;
}
let findAll= async()=>{
  var found = await Repo.find({})
  return found;
}

module.exports = {save,findAll,findOne,getRepos};
