import { fireEvent, render, screen } from '../../../tests/test-utils'

import { PokemonTypes } from '../../types/pokemon'

import PokemonList from '.'

const pokemons = new Array(10).fill(0).map((value, index) => ({
  id: index,
  picture: '',
  name: 'Bulbasaur Clone',
  types: [{ slot: 1, type: { name: 'grass' as PokemonTypes } }],
  stats: [],
}))

it('should call onItemClick with the expected id', () => {
  const onItemClick = jest.fn()

  render(
    <PokemonList
      onItemClick={onItemClick}
      items={pokemons}
    />
  )

  fireEvent.click(screen.getByRole('button', { name: 'Bulbasaur Clone #002' }))

  expect(onItemClick).toHaveBeenCalledWith(2)
})

it('should call onLoadMore when scrolling to the bottom', () => {
  const onLoadMore = jest.fn()

  render(
    <PokemonList
      onLoadMore={onLoadMore}
      onItemClick={jest.fn()}
      items={pokemons}
    />
  )

  const scrollHeight = document.documentElement.scrollHeight
  const viewPort = document.documentElement.clientHeight
  const scrollable = scrollHeight - viewPort

  fireEvent.scroll(document, { target: { scrollY: scrollable } })

  expect(onLoadMore).toHaveBeenCalled()
})
