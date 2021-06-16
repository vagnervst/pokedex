import { InputStyle } from './styles'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input = (props: Props): JSX.Element => (
  <InputStyle
    {...props}
    onChange={e => {
      if (props.onChange && !props.disabled) {
        props.onChange(e)
      }
    }}
  />
)

export default Input
