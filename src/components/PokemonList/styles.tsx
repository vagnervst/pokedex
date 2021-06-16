import styled from '@emotion/styled'

export const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${props => props.theme.sizes.lg}px;
  }
`
