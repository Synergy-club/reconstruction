import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import './Layout.css'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <div className='layout__container'>
    <header><Header /></header>
    <div>
      <Outlet />

    </div>
    <div>
      <Footer />
    </div>
    </div>
  )
}

export default Layout
