import { useFormik } from 'formik'

import Input from '../../components/Input'
import Button from '../../components/Button'

import {
  Center,
  Container,
  Label,
  Form,
  Padded,
} from './styles'
import { useHistory } from 'react-router'

const authenticate = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 'session_id'
}

type Props = {
  authenticate: (
    credentials: { email: string, password: string }
  ) => Promise<string>,
  onLogin: (sessionId: string) => void,
}

export const Login = ({ authenticate, onLogin }: Props): JSX.Element => {
  const {
    handleChange,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      const session = await authenticate(values)
      setSubmitting(false)

      onLogin(session)
    }
  })

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Padded>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            disabled={isSubmitting}
            name="email"
            onChange={handleChange}
            placeholder="Enter your e-mail"
          />
        </Padded>
        <Padded>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            disabled={isSubmitting}
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
            type="password"
          />
        </Padded>
        <Center>
          <Button disabled={isSubmitting} type="submit">
            Login
          </Button>
        </Center>
      </Form>
    </Container>
  )
}

const LoginPage = (): JSX.Element => {
  const { replace } = useHistory()

  const onLogin = (sessionId: string) => {
    localStorage.setItem('session_id', sessionId)
    replace('/pokemons')
  }

  return (
    <Login
      authenticate={authenticate}
      onLogin={onLogin}
    />
  )
}

export default LoginPage
