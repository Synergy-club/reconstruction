
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const Layout = () => {
  return (
    <Fragment>
    <header><Header /></header>
    <div>
      <Outlet />

    </div>
    </Fragment>
  )
}

export default Layout
