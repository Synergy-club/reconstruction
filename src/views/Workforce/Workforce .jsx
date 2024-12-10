import { useContext, useEffect } from 'react'
import { ReferenceContext } from '../../contexts/ReferenceContext'
import Container from '../../components/Container/Container'
import { workforceContent } from './utils/workforece'
import './Workforce.css'

const Workforce = () => {

  const {useScroll, refworkforce} = useContext(ReferenceContext)

  useEffect(() => {
    setTimeout(() => {
      useScroll(refworkforce)
    }, 300)
  },[])

  return (
    <section ref={refworkforce} className='workforce__container'>
      <div>
        <Container arrayContent={workforceContent} />
      </div>
    </section>
  )
}

export default Workforce
