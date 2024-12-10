import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav__container'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          `button nav__link ${
            isActive ? 'nav__content-link active' : 'nav__content-link'
          }`
        }
      >
        Empresa y Voluntariado
      </NavLink>
      <NavLink
        to='/familias'
        className={({ isActive }) =>
          `button nav__link ${isActive ? 'nav__content-link active' : 'nav__content-link'
          }`
        }
      >
        Familias
      </NavLink>
    </nav>
  )
}

export default Nav