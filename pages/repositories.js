import React, {useEffect, useState} from 'react'
import Menu from '../components/Menu'
import "isomorphic-fetch"

const Home = () => {
  const [repositories, setRepositories] = useState([])

  const getData = async () => {
    const response = await fetch("https://api.github.com/orgs/rocketseat/repos")
    return  response.json()
  }

  useEffect(() => {
    getData().then(setRepositories)
  }, [])
  return (
    <div>
      <h1>Repositories</h1>
      <Menu />
      <ul>
        {
          repositories.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home
