import { ThemeProvider } from '@emotion/react'

import GlobalStyles from '../src/theme/global'
import theme from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withGlobalStyles = (Story) => (
  <GlobalStyles>
    <Story />
  </GlobalStyles>
)

const withTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
)

export const decorators = [withGlobalStyles, withTheme]
