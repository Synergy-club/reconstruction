import { useContext, useEffect, useMemo } from 'react'
import Container from '../../components/Container/Container'
import { ReferenceContext } from '../../contexts/ReferenceContext'
import { familiesContent } from './utils/families'
import './Families.css'

const Families = () => {
  const {useScroll, reffamilies} = useContext(ReferenceContext)
  const memoizedContent = useMemo(() => familiesContent, [familiesContent])

  useEffect(() => {
    setTimeout(() => {
      useScroll(reffamilies)
    }, 300)
  },[])
  return (
    <section ref={reffamilies} className='families__container'>
      <div>
        <Container arrayContent={memoizedContent} />
      </div>
    </section>
  )
}

export default Families