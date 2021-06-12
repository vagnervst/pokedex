import GlobalStyles from '../src/theme/global'

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

export const decorators = [withGlobalStyles]
