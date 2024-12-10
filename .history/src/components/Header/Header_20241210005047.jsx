import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div><Link to='/' /></div>
      <div><Link to='familias' /></div>
    </nav>
  )
}

export default Header