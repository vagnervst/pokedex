import styled from '@emotion/styled'

export const Container = styled.div`
  padding: ${({ theme }) => theme.sizes.sm}px;

  & > div {
    margin-bottom: ${({ theme }) => theme.sizes.md}px;
  }
`
