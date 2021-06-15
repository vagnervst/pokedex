import ArrowBack from '../ArrowBack'

import {
  ChildrenContainer,
  Flex,
  Title,
} from './styles'

type Props = {
  showBackButton?: boolean,
  onNavigateBack?: () => void,
  children?: React.ReactChildren|React.ReactChild,
  title: string,
}

const Header = ({
  children,
  onNavigateBack = () => ({}),
  showBackButton = false,
  title,
}: Props): JSX.Element => (
  <Flex style={{ marginBottom: '8px' }} direction="column">
    {showBackButton && (
      <ArrowBack fill="black" onClick={onNavigateBack} />
    )}
    <Flex direction="row">
      <Title>{title}</Title>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </Flex>
  </Flex>
)

export default Header
