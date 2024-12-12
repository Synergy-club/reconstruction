import { useContext, useEffect, useMemo, useState } from 'react'
import { ReferenceContext } from '../../contexts/ReferenceContext'
import Container from '../../components/Container/Container'
import { workforceContent } from './utils/workforece'
import './Workforce.css'

const Workforce = () => {
  const { useScroll, refworkforce } = useContext(ReferenceContext)
  const memizedContent = useMemo(() => workforceContent, [workforceContent])

  useEffect(() => {
    setTimeout(() => {
      useScroll(refworkforce)
    }, 300)
  }, [])

  return (
    <section ref={refworkforce} className='workforce__container'>
      <div>
        <Container arrayContent={memizedContent} />
      </div>
    </section>
  )
}

export default Workforce
