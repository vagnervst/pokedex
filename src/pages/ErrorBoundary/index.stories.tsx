import ErrorBoundary from '.'

export default {
  title: 'pages/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = (): JSX.Element => <ErrorBoundary />
