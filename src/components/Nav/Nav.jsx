import { NavLink } from 'react-router-dom'
import './Nav.css'
import { useContext, useEffect, useState } from 'react'
import { ReferenceContext } from '../../contexts/ReferenceContext'

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false)
  const { refNav } = useContext(ReferenceContext)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <nav
      ref={refNav}
      className={`nav__container fadeIn ${isSticky ? 'sticky filter' : ''}`}
    >
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
          `button nav__link ${
            isActive ? 'nav__content-link active' : 'nav__content-link'
          }`
        }
      >
        Familias
      </NavLink>
    </nav>
  )
}

export default Nav
