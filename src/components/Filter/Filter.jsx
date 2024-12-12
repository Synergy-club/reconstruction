import { useContext, useEffect, useState } from 'react'
import { FunctionContext } from '../../contexts/FunctionContext'
import { ReferenceContext } from '../../contexts/ReferenceContext'
import Card from '../Card/Card'
import './Filter.css'
import { useLocation } from 'react-router-dom'

const Filter = () => {
  const [searchCampain, setSearchCampain] = useState({})
  const [scrollRef, setScrollRef] = useState('')
  const { searchTerm, setSearchTerm, handleSearchChange, filter } =
    useContext(FunctionContext)
  const { useScroll, reffamilies, refworkforce, refFilter } =
    useContext(ReferenceContext)
  const location = useLocation()

  const handleNewCard = (item) => {
    setSearchCampain(item)
    setTimeout(() => {
      useScroll(refFilter)
    }, 300)
  }

  const handleCloseFilter = () => {
    setSearchCampain('')
    setTimeout(() => {
      setScrollRef(location.pathname === '/familias' ? reffamilies : refworkforce)
    }, 300)
  }  

  const handleClearInputSearch = () => {
    setSearchTerm('')
    handleCloseFilter()
  }

  useEffect(() => {
    setTimeout(() => {
      useScroll(scrollRef)
    }, 300)
  }, [scrollRef])

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
            {filter.length <= 0 && (
              <p className='filter__not-exist'>
                No hay resultados de busqueda.
              </p>
            )}
            <ul>
              {filter.map((item, index) => (
                <li key={index} onClick={() => handleNewCard(item)}>
                  {item.title}
                </li>
              ))}
            </ul>
            <p className='filter__Result-content'>
              Resultados de busqueda: <span>{Object.keys(filter).length}</span>
            </p>
          </div>
        </div>
      </div>
      {searchCampain && Object.keys(searchCampain).length > 0 && (
        <div className='filter__result'>
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
