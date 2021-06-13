import {
  Unstyled,
  Solid,
} from './styles'

type Props = {
  ariaLabel: string,
  onClick: () => void,
  icon: JSX.Element,
  variant?: 'solid'|'unstyled',
}

const IconButton = (
  { ariaLabel, onClick, icon, variant = 'solid' }: Props
): JSX.Element => {
  const Button = variant === 'unstyled'
    ? Unstyled
    : Solid

  return (
    <Button aria-label={ariaLabel} onClick={onClick}>
      {icon}
    </Button>
  )
}

export default IconButton
