import {
  Container,
  FlexContainer,
  Identifier,
  ImageContainer,
} from './styles'

import Image from '../../components/Image'

type Props = {
  id: number,
  name: string,
  onClick: (id: number) => void,
  picture: string,
}

const PokemonButton = ({
  id,
  name,
  onClick,
  picture,
}: Props): JSX.Element => (
  <Container role="button" onClick={() => onClick(id)}>
    <ImageContainer>
      <Image
        alt={name}
        width={64}
        height={64}
        src={picture}
      />
    </ImageContainer>
    <FlexContainer>
      {name}
    </FlexContainer>
    <Identifier>
      <span>#{String(id).padStart(3, '0')}</span>
    </Identifier>
  </Container>
)

export default PokemonButton
