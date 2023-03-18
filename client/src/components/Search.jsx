import React, { useState } from 'react'

const Search = (props) => {
  const [term, setTerm] = useState('')

  const onChange = (e) => {
    setTerm(e.target.value)
  }

  const search = () => {
    props.onSearch(term)
  }

  return (
    <div className='ui inverted segment'>
      <h4 >Add more repos!</h4>
      Enter a github username: <input className='ui inverted form' placeholder='Github username' defaultValue={term} onChange={onChange} />
      <button onClick={search}> Add Repos </button>
      
    </div>
  )
}

export default Search
