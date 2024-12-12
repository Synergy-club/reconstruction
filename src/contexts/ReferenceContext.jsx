import { createContext, useRef } from 'react'
import useScrollToRef from '../hooks/useScrollToRef'

export const ReferenceContext = createContext()

export const ReferenceProvider = ({ children }) => {
  const refworkforce = useRef()
  const reffamilies = useRef()
  const refNav = useRef()
  const refFilter = useRef()

  const useScroll = useScrollToRef()
  return (
    <ReferenceContext.Provider
      value={{ useScroll, refworkforce, reffamilies, refNav, refFilter }}
    >
      {children}
    </ReferenceContext.Provider>
  )
}
