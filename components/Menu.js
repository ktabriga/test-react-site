import React from 'react'
import Link from 'next/link'

const Menu = () => (
  <nav>
    <Link href='/'>
      <a>Home</a>
    </Link>
    &nbsp;
    <Link href='/repositories'>
      <a>Repositories</a>
    </Link>
    &nbsp;
    <Link href='/about'>
      <a>About</a>
    </Link>
  </nav>
)

export default Menu
