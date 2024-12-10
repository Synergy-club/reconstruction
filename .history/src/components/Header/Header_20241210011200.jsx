import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div><Link to='/' />Empresa y Voluntariado</div>
      <div><Link to='familias' />Familias</div>
    </nav>
  )
}

export default Header