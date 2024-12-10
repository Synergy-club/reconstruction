import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='nav__container'>
      <div><Link to='/' />Empresa y Voluntariado</div>
      <button><Link to='familias' />Familias</button>
    </nav>
  )
}

export default Header