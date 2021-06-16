import Spinner from '.'

export default {
  title: 'Components/Spinner',
  component: Spinner,
}

export const Default = (): JSX.Element => (
  <Spinner mode="dark" r={30} />
)
