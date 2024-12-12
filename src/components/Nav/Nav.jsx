import { NavLink } from 'react-router-dom'
import './Nav.css'
import { useContext, useEffect, useState } from 'react'
import { ReferenceContext } from '../../contexts/ReferenceContext'
import { FunctionContext } from '../../contexts/FunctionContext'

const Nav = () => {
  const { refNav } = useContext(ReferenceContext)
  const {showMenu, handleShowMenu} = useContext(FunctionContext)

  return (
    <nav
      ref={refNav}
      className={`nav__container filter fadeIn`}
    >
      <NavLink
        to='/'
        className={({ isActive }) =>
          `button nav__link ${
            isActive ? 'nav__content-link active' : 'nav__content-link'
          }`
        }
        onClick={() => handleShowMenu()}
      >
        Empresa y Voluntariado
      </NavLink>
      <NavLink
        to='/familias'
        className={({ isActive }) =>
          `button nav__link ${
            isActive ? 'nav__content-link active' : 'nav__content-link'
          }`
        }
        onClick={() => handleShowMenu()}
      >
        Familias
      </NavLink>
    </nav>
  )
}

export default Nav
