import { useContext, useState } from 'react'
import Nav from '../Nav/Nav'
import header from '/images/hero.webp'
import menu from '/images/menu.png'
import './Header.css'
import { FunctionContext } from '../../contexts/FunctionContext'

const Header = () => {
  const {showMenu, handleShowMenu} = useContext(FunctionContext)

  
  return (
    <div className='header__container'>
      <div className='header__hero'>
        <div className='header__background-black'></div>
        <h1 className='header__text-hero'>RECONSTRUCCIÓN</h1>
        <img src={header} alt='dana valencia' />
      </div>
      <div className='header__nav'>
        <div className='header__menu' onClick={handleShowMenu}>
          <img src={menu} alt='menu' />
        </div>
        {showMenu && <Nav />}
      </div>
    </div>
  )
}

export default Header
