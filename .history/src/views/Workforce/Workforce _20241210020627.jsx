import Container from '../../components/Container/Container'
import { workforceContent } from './utils/workforece'

const Workforce = () => {
  console.log(workforceContent)

  return (
    <div>
      <div>
        <Container arrayContent={workforceContent} />
      </div>
    </div>
  )
}

export default Workforce