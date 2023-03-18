import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Search from './components/Search.jsx'
import RepoList from './components/RepoList.jsx'
import axios from 'axios'

const App = () => {
  const [repos, setRepos] = useState([])


  // const getData = async (term) => {
  //   const results = await axios.get('/repos', {
  //     username: term
  //   })
  //   setRepos(results.data);
    
  // };

  // useEffect(() => {
  //   getData();
  // }, []);


  const search = (term) => {
    console.log(`${term} was searched`)
    // TODO
    axios.post('/repos', {
      username: term
    })
      .then((response) => {
        setRepos({ repos: response.data })

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='ui grid container center aligned'>
      <div className='column ten wide'>
        <h1>Github Fetcher</h1>
        <RepoList repos={repos} />
        <Search onSearch={search} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
