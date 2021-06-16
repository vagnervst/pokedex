import '@emotion/react'

import colors from '../theme/colors'
import sizes from '../theme/sizes'
import fonts from '../theme/fonts'

declare module '@emotion/react' {
  export interface Theme {
    colors: colors,
    fonts: fonts,
    sizes: sizes,
  }
}
