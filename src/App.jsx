import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Workforce  from './views/Workforce/Workforce '
import Families from './views/Families/Families'
import NotFound from './views/404/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Workforce  />} />
        <Route path='familias' element={<Families />} />
        {/*ERROR LINK*/}
        <Route path='*' element={<NotFound />} />
        <Route />
      </Route>
    </Routes>
  )
}

export default App
