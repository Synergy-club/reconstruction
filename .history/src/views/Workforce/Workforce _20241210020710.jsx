import Container from '../../components/Container/Container'
import { workforceContent } from './utils/workforece'

const Workforce = () => {
  return (
    <section>
      <div>
        <Container arrayContent={workforceContent} />
      </div>
    </section>
  )
}

export default Workforce
