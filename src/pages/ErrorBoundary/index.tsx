import {
  Container,
  Title,
} from './styles'

import { ReactComponent as Surprised } from './surprised.svg'

const ErrorBoundary = (): JSX.Element => (
  <Container>
    <Title>Something went wrong.</Title>
    <Surprised width={150} height={150} />
  </Container>
)

export default ErrorBoundary
