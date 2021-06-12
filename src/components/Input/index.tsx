import { ChangeEventHandler } from 'react'

import {
  Container,
  Input,
} from './styles'

type Props = {
  disabled?: boolean,
  onChange: ChangeEventHandler,
  placeholder?: string,
}

const SearchInput = ({
  disabled = false,
  onChange,
  placeholder,
}: Props): JSX.Element => (
  <Container>
    <Input
      disabled={disabled}
      onChange={e => !disabled && onChange(e)}
      placeholder={placeholder}
    />
  </Container>
)

export default SearchInput
