import styled from '@emotion/styled'

import Header from '../../components/Header'

const Container = styled.div`
  flex: 0;
  margin-bottom: 12px;
`

type Props = {
  children?: JSX.Element|JSX.Element[],
  showBackButton?: boolean
  onNavigateBack?: () => void,
  title: string,
}

const LayoutHeader = ({
  children,
  onNavigateBack = () => ({}),
  showBackButton = false,
  title,
}: Props): JSX.Element => (
  <Container>
    <Header
      onNavigateBack={onNavigateBack}
      showBackButton={showBackButton}
      title={title}
    >
      {children}
    </Header>
  </Container>
)

export default LayoutHeader
