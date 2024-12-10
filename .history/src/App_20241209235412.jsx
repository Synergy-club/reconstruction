import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Workforce  from './views/Workforce/Workforce '

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Workforce  />} />
        <Route />
      </Route>
    </Routes>
  )
}

export default App
