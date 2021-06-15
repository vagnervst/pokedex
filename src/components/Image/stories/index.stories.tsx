import Image from '..'

import BulbasaurImage from './bulbasaur.png'

export default {
  title: 'Components/Image',
  component: Image,
}

export const Default = (): JSX.Element => (
  <Image
    alt="Bulbasaur image"
    width={100}
    height={100}
    src={BulbasaurImage}
  />
)

export const WithError = (): JSX.Element => (
  <Image
    alt="Bulbasaur image"
    width={100}
    height={100}
    src="not-found"
  />
)
