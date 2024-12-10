import { createContext } from 'react'

export const ReferenceContext = createContext()

export const ReferenceProvider = ({ children }) => {
  return <ReferenceContext.Provider>{children}</ReferenceContext.Provider>
}
