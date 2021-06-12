import {
  Container,
  FlexContainer,
  Identifier,
  Image,
} from './styles'

import Pokeball from './pokeball.svg'

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
    <Image
      src={picture || Pokeball}
    />
    <FlexContainer>
      {name}
    </FlexContainer>
    <Identifier>
      <span>#{String(id).padStart(3, '0')}</span>
    </Identifier>
  </Container>
)

export default PokemonButton
