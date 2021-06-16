import { fireEvent, render, screen } from '../../../tests/test-utils'

import PokemonList from '.'

it('should call onItemClick with the expected id', () => {
  const onItemClick = jest.fn()

  render(
    <PokemonList
      onItemClick={onItemClick}
      items={[
        { id: 1, name: 'Bulbasaur', picture: '' },
        { id: 2, name: 'Bulbasaur Clone', picture: '' },
      ]}
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
      items={[
        { id: 1, name: 'Bulbasaur', picture: '' },
        { id: 2, name: 'Bulbasaur Clone', picture: '' },
      ]}
    />
  )

  const scrollHeight = document.documentElement.scrollHeight
  const viewPort = document.documentElement.clientHeight
  const scrollable = scrollHeight - viewPort

  fireEvent.scroll(document, { target: { scrollY: scrollable } })

  expect(onLoadMore).toHaveBeenCalled()
})
