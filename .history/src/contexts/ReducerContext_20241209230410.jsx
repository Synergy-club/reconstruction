import { createContext } from 'react'

const ReducerContext = createContext()
const ReducerProvider = ({children}) => {
  return (
    <ReducerContext.Provider value={{}}>{ children }</ReducerContext.Provider>
  )
}

export default ReducerProvider
