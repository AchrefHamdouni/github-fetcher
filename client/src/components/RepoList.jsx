import React from 'react';

const RepoList = (props) => (
  <div className='ui segment'>
    <h3> Repo List Component </h3>
    <h3> There are {props.repos.length} repos.</h3>

    {props.repos.map((repo) => {
      return (

        <tbody>
          <tr  >
            <td key={repo.repo_id} style={{ textAlign: "left", color: "blue", width: "150px" }}>{repo.user}</td>
            <a href={repo.html_url} style={{ color: "black", textAlign: "left" }}>{repo.name}  </a>       
           </tr>
        </tbody>


      )

    })
    }
  </div>
)

export default RepoList;