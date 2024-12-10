import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav__container'>
      <button><Link to='/' />Empresa y Voluntariado</button>
      <button><Link to='familias' />Familias</button>
    </nav>
  )
}

export default Header