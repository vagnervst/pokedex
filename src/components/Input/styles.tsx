import styled from '@emotion/styled'

export const InputStyle = styled.input`
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: ${({ theme }) => theme.sizes.md}px;
  border-radius: 16px;
  border: 0;
  outline: none;
  width: 100%;
`
