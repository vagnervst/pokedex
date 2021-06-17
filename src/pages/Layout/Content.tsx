import styled from '@emotion/styled'

const Container = styled.div`
  flex: 1;
`

type Props = {
  children: JSX.Element|JSX.Element[],
}

const Content = ({ children }: Props): JSX.Element => (
  <Container>
    {children}
  </Container>
)

export default Content
