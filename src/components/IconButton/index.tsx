import {
  Unstyled,
  Ghost,
  Solid,
} from './styles'

type Props = {
  ariaLabel: string,
  onClick: () => void,
  icon: JSX.Element,
  variant?: 'solid'|'unstyled'|'ghost',
}

const variants = {
  unstyled: Unstyled,
  ghost: Ghost,
  solid: Solid,
}

const IconButton = (
  { ariaLabel, onClick, icon, variant = 'solid' }: Props
): JSX.Element => {
  const Button = variants[variant]

  return (
    <Button aria-label={ariaLabel} onClick={onClick}>
      {icon}
    </Button>
  )
}

export default IconButton
