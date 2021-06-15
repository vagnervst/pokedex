import {
  SpinnerStyle,
} from './styles'

import { ReactComponent as Circle } from './circle.svg'

type Props = {
  r?: number,
  theme?: 'dark'|'light'
}

const Spinner = ({ theme='light', r = 64 }: Props): JSX.Element => (
  <SpinnerStyle theme={theme} r={r}>
    <Circle />
  </SpinnerStyle>
)

export default Spinner
