import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.sizes.md}px;
`

type Props = {
  children: JSX.Element[],
}

const Layout = ({
  children,
}: Props): JSX.Element => (
  <Container>
    {children}
  </Container>
)

export default Layout
