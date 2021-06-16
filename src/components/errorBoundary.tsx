import { Component, ReactChild } from 'react'

import ErrorBoundaryPage from '../pages/ErrorBoundary'

type Props = { children: ReactChild }

type State = { hasError: boolean }

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render (): JSX.Element | ReactChild {
    if (this.state.hasError) {
      return <ErrorBoundaryPage />
    }

    return this.props.children
  }
}

export default ErrorBoundary
