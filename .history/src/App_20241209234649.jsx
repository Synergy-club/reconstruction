import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './views/Construction'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route />
      </Route>
    </Routes>
  )
}

export default App
