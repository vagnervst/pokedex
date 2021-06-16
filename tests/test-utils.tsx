import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'

import theme from '../src/theme'

const WithProvider = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): any => render(ui, { wrapper: WithProvider, ...options })

export * from '@testing-library/react'

export { customRender as render }
