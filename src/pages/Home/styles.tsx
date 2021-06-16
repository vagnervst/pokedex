import styled from '@emotion/styled'

export const Container = styled.div`
  padding: ${({ theme }) => theme.sizes.sm}px;

  & > div {
    margin-bottom: ${({ theme }) => theme.sizes.md}px;
  }
`

export const Title = styled.h1`
  color: #d65952;
  margin-bottom: 8px;
`

export const Subtitle = styled.p`
  margin: 16px 4px;
  color: gray;
  font-size: 14px;
`
