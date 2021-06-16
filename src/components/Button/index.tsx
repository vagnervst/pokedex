import {
  Solid,
  Unstyled,
} from './styles'

type Props = {
  disabled?: boolean,
  onClick?: () => void,
  children: string,
  type?: 'button' | 'submit' | 'reset',
  variant?: 'solid' | 'unstyled'
}

const variants = {
  solid: Solid,
  unstyled: Unstyled,
}

const ButtonComponent = ({
  disabled = false,
  onClick = () => ({}),
  children,
  type = 'button',
  variant = 'solid',
}: Props): JSX.Element => {
  const Variant = variants[variant]

  return (
    <Variant
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </Variant>
  )
}

export default ButtonComponent
