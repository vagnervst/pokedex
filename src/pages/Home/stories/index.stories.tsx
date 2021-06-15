import { Home } from '..'

import BulbasaurImage from './bulbasaur.png'

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
}

const pokemons = [
  {
    id: 1,
    picture: BulbasaurImage,
    name: 'Bulbasaur',
  },
  {
    id: 2,
    picture: BulbasaurImage,
    name: 'Bulbasaur Clone',
  },
]

export const Default = (): JSX.Element => (
  <Home hooks={{
      usePokemonList: () => ({
        isLoading: false,
        data: {
          pageParams: [],
          pages: [
            { data: pokemons },
          ]
        }
      })
    }}
  />
)

export const Disabled = (): JSX.Element => (
  <Home hooks={{
      usePokemonList: () => ({
        isLoading: true,
      })
    }}
  />
)
