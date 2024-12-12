import { useContext, useState } from 'react'
import { useFilter } from '../../hooks/useFilter'
import { familiesContent } from '../../views/Families/utils/families'
import { workforceContent } from '../../views/Workforce/utils/workforece'
import './Filter.css'
import Card from '../Card/Card'
import { FunctionContext } from '../../contexts/FunctionContext'
import { ReferenceContext } from '../../contexts/ReferenceContext'

const Filter = () => {
  const [searchCampain, setSearchCampain] = useState({})
  const { searchTerm, setSearchTerm, handleSearchChange, filter } =
    useContext(FunctionContext)
  const { useScroll, reffamilies, refFilter } = useContext(ReferenceContext)

  const handleNewCard = (item) => {
    setSearchCampain(item)
    setTimeout(() => {
      useScroll(refFilter)
    }, 300)
  }

  const handleCloseFilter = () => {
    setSearchCampain('')
    setTimeout(() => {
      useScroll(reffamilies)
    }, 300)
  }

  const handleClearInputSearch = () => {
    setSearchTerm('')
    handleCloseFilter()
    setTimeout(() => {
      useScroll(reffamilies)
    }, 300)
  }

  return (
    <div>
      <div className='filter__container'>
        <div className='filter__content'>
          <div className='filter__input-search'>
            <input
              type='search'
              placeholder='Buscar...'
              value={searchTerm}
              onChange={(e) => handleSearchChange(e)}
            />
            {searchTerm !== '' && (
              <button onClick={handleClearInputSearch}>Limpiar</button>
            )}
          </div>
          <div className='filter__target'>
            <p>Busqueda por campaña:</p>
            {filter.length <= 0 && <p className='filter__not-exist'>No hay resultados de busqueda.</p>}
            <ul>
              {filter.map((item, index) => (
                <li key={index} onClick={() => handleNewCard(item)}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {Object.keys(searchCampain).length > 0 && (
        <div className='filter__result'>
          <p>Resultados de busqueda:</p>
          <div ref={refFilter}>
            <Card array={{ searchCampain }} />
            <button onClick={handleCloseFilter}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Filter
