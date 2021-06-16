import { Pokemon } from '../../types/pokemon'
import { QueryResponse } from './types'

const getPokemonPictureUrl = ({ id }: { id: number }): string =>
`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

const getTranslatedPokemonName = ({ specy, name }: QueryResponse) => {
  if (specy.names.length > 0) {
    return specy.names[0].name
  }

  return name
}

const formatPokemon = (pokemon: QueryResponse): Pokemon => ({
  ...pokemon,
  name: getTranslatedPokemonName(pokemon),
  picture: getPokemonPictureUrl(pokemon),
})

export default formatPokemon
