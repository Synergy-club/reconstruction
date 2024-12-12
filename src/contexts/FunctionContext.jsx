import { createContext, useState } from 'react'
import { familiesContent } from '../views/Families/utils/families'
import { workforceContent } from '../views/Workforce/utils/workforece'
import { useFilter } from '../hooks/useFilter'

export const FunctionContext = createContext()
export const FunctionProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [array, setArray] = useState([
    ...familiesContent.donationBoxes,
    ...workforceContent.donationBoxes
  ])
  const filter = useFilter(searchTerm, array)

  // SHOW MENU
  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  //FILTER
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <FunctionContext.Provider
      value={{
        filter,
        showMenu,
        handleShowMenu,
        searchTerm,
        setSearchTerm,
        handleSearchChange
      }}
    >
      {children}
    </FunctionContext.Provider>
  )
}
