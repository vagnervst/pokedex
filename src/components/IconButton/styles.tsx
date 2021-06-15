import styled from '@emotion/styled'

const Base = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px;
`

export const Solid = styled(Base)`
  background-color: #d21a13;
  box-shadow: 1px 2px 1px #a6a6a6;
  border-radius: 50%;
  transition: .2s background-color;

  &:hover {
    background-color: #ed3f38;
  }

  &:active {
    background-color: #a5130e;
  }
`

export const Ghost = styled(Base)`
  border-radius: 4px;
  transition: .2s background-color;

  &:hover {
    background-color: rgba(0, 0, 0, .15);
  }
`

export const Unstyled = Base
