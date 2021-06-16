import {
  SpinnerStyle,
} from './styles'

import { ReactComponent as Circle } from './circle.svg'

type Props = {
  r?: number,
  mode?: 'dark'|'light'
}

const Spinner = ({ mode = 'light', r = 64 }: Props): JSX.Element => (
  <SpinnerStyle mode={mode} r={r}>
    <Circle />
  </SpinnerStyle>
)

export default Spinner
