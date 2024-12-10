import { createContext } from 'react'

const ReferenceContext = createContext()

const ReferenceProvider = ({ children }) => {
  return <ReferenceContext.Provider>{children}</ReferenceContext.Provider>
}

export default ReferenceProvider
