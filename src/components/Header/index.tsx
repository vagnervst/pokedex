import ArrowBack from '../ArrowBack'

import {
  ChildrenContainer,
  Flex,
  Title,
} from './styles'

type Props = {
  showBackButton?: boolean,
  onNavigateBack?: () => void,
  children?: JSX.Element|JSX.Element[],
  title: string,
}

const Header = ({
  children,
  onNavigateBack = () => ({}),
  showBackButton = false,
  title,
}: Props): JSX.Element => (
  <Flex direction="row">
    {showBackButton && (
      <ArrowBack fill="black" onClick={onNavigateBack} />
    )}
    <Title>{title}</Title>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </Flex>
)

export default Header
