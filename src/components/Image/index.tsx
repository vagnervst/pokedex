import { useState } from 'react'

import {
  Container,
  ImageStyle,
} from './styles'

import { ReactComponent as Pokeball } from './pokeball.svg'

type Props = {
  alt: string,
  src: string,
  width: number,
  height: number,
}

const Image = ({ alt, src, width, height }: Props): JSX.Element => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    if (src) {
      setHasError(true)
    }
  }

  return (
    <Container width={width} height={height}>
      {hasError && (
        <Pokeball
          role="img"
          aria-label="Pokéball image"
          width={width}
          height={height}
        />
      )}
      <ImageStyle
        aria-label={alt}
        visible={!isLoading && !hasError}
        onError={handleError}
        onLoad={() => setIsLoading(false)}
        alt={alt}
        src={src}
        width={width}
        height={height}
      />
    </Container>
  )
}

export default Image
