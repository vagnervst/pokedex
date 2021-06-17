import styled from '@emotion/styled'

export const Container = styled.div`
  height: 100%;

  & > *:not(:last-child) {
    margin-bottom: ${props => props.theme.sizes.lg}px;
  }
`

export const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`
