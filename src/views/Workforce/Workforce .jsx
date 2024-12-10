import Container from '../../components/Container/Container'
import { workforceContent } from './utils/workforece'
import './Workforce.css'

const Workforce = () => {
  return (
    <section className='workforce__container'>
      <div>
        <Container arrayContent={workforceContent} />
      </div>
    </section>
  )
}

export default Workforce
