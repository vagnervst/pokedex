import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from '@emotion/react'

import GlobalStyles from './theme/global'
import theme from './theme'
import reportWebVitals from './reportWebVitals'

import ErrorBoundary from './components/errorBoundary'

import App from './App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
