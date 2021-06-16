import styled from '@emotion/styled'

export const ChildrenContainer = styled.div`
  display: flex;
  margin-left: auto;
`

export const Title = styled.h1`
  color: #d65952;
`

export const Flex = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${props => props.direction}
`
