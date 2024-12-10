import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Fragment>
    <header></header>
    <div>
      <Outlet />

    </div>
    </Fragment>
  )
}

export default Layout
