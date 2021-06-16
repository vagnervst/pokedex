import { action } from '@storybook/addon-actions'

import { Login } from '.'

export default {
  title: 'pages/Login',
  component: Login,
}

const authenticate = () => new Promise<string>(
  resolve => setTimeout(() => resolve('123'), 1000)
)

export const Default = (): JSX.Element => (
  <Login
    onLogin={action('onLogin')}
    authenticate={authenticate}
  />
)
