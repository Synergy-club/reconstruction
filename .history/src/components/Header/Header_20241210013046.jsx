import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className='nav__container'>
      <NavLink 
        to='/' 
        className={({ isActive }) => 
          isActive ? 'nav__content-link active' : 'nav__content-link'
        }
      >
        Empresa y Voluntariado
      </NavLink>
      <NavLink 
        to='/familias' 
        className={({ isActive }) => 
          isActive ? 'nav__content-link active' : 'nav__content-link'
        }
      >
        Familias
      </NavLink>
    </nav>
  );
}

export default Header;
