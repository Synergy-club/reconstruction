import Container from '../../components/Container/Container'
import { familiesContent } from './utils/families'

const Families = () => {
  return (
    <section>
      <div>
        <Container arrayContent={familiesContent} />
      </div>
    </section>
  )
}

export default Families