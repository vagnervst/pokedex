import { ChangeEventHandler } from 'react'

import {
  Container,
  Input,
} from './styles'

type Props = {
  disabled?: boolean,
  name?: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  placeholder?: string,
}

const SearchInput = ({
  disabled = false,
  name = '',
  onChange,
  placeholder,
}: Props): JSX.Element => (
  <Container>
    <Input
      disabled={disabled}
      name={name}
      onChange={e => !disabled && onChange(e)}
      placeholder={placeholder}
    />
  </Container>
)

export default SearchInput
