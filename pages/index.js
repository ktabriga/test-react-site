import React, {useEffect, useState} from 'react'
import Menu from '../components/Menu'


const Home = () => {
  const [show, setShow] = useState(false)

  const toggleComponent = () => {
    setShow(!show)
  }

  return (
    <div>
      <h1>Home</h1>
      <Menu />
      <div style={{height: 20}} />
      <button onClick={toggleComponent}>Show Hidden component</button>
      <div style={{height: 20}} />
      <span>{show ? "I'm herre" : ''}</span>
    </div>
  )
}

export default Home
