import { createContext, useState } from 'react'

export const FunctionContext = createContext()
export const FunctionProvider = ({children}) => {
  const [ showMenu, setShowMenu ] = useState(false)
  
  // SHOW MENU
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <FunctionContext.Provider value={{showMenu, handleShowMenu}}>{children}</FunctionContext.Provider>
  )
}
