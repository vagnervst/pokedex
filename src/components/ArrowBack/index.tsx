import IconButton from '../IconButton'

import { ReactComponent as ArrowIcon } from './arrow.svg'

import { Container } from './styles'

type Props = {
  fill?: 'white'|'black',
  onClick: () => void,
}

const ArrowBack = ({ fill = 'white', onClick }: Props): JSX.Element => (
  <Container>
    <IconButton
      ariaLabel="Back button"
      variant="unstyled"
      icon={<ArrowIcon fill={fill} width={24}
      height={24} />}
      onClick={onClick}
    />
  </Container>
)

export default ArrowBack
