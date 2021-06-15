import { render, screen, fireEvent } from '@testing-library/react'

import BulbasaurImage from './stories/bulbasaur.png'

import Image from '.'

it('should render image when it is a valid src', () => {
  render(
    <Image
      alt="Bulbasaur image"
      width={100}
      height={100}
      src={BulbasaurImage}
    />
  )

  fireEvent.load(screen.getByAltText('Bulbasaur image'))

  expect(screen.getByAltText('Bulbasaur image')).toBeVisible()
})

it('should show fallback image when errored', () => {
  render(
    <Image
      alt="Bulbasaur image"
      width={100}
      height={100}
      src={BulbasaurImage}
    />
  )

  fireEvent.error(screen.getByAltText('Bulbasaur image'))

  expect(screen.getByAltText('Bulbasaur image')).not.toBeVisible()
  expect(screen.getByRole('img', { hidden: true, name: 'Pokéball image' })).toBeVisible()
})
