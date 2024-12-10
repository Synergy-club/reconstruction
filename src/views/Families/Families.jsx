import Container from '../../components/Container/Container'
import { familiesContent } from './utils/families'
import './Families.css'

const Families = () => {
  return (
    <section className='families__container'>
      <div>
        <Container arrayContent={familiesContent} />
      </div>
    </section>
  )
}

export default Families