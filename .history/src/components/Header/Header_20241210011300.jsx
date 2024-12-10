import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='nav__container'>
      <button><Link to='/' />Empresa y Voluntariado</button>
      <button><Link to='familias' />Familias</button>
    </nav>
  )
}

export default Header