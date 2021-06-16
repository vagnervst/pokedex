import styled from '@emotion/styled'

const Base = styled.button`
  background: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 2px;
  font-weight: 700;
  color: #f4f4f4;
  border: 0;
  outline: none;
`

export const Solid = styled(Base)`
  background-color: #e26061;
  color: #f4f4f4;
  transition: background-color .2s;

  &[disabled] {
    background-color: #aaa;
  }

  &:hover {
    background-color: ${props => !props.disabled && '#db3e3f'};
  }

  &:active {
    background-color: ${props => !props.disabled && '#c12526'};
  }
`

export const Unstyled = styled(Base)`
  color: #777;
`
