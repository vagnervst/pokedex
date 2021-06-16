import styled from '@emotion/styled'

const Base = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.sizes.md}px;
`

export const Solid = styled(Base)`
  background-color: ${({ theme }) => theme.colors.red[400]};
  box-shadow: 1px 2px 1px ${({ theme }) => theme.colors.gray[50]};
  border-radius: 50%;
  transition: .2s background-color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red[500]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.red[600]};
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
