import styled from '@emotion/styled'

export const ChildrenContainer = styled.div`
  display: flex;
  margin-left: auto;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.red[400]};
`

export const Flex = styled.div<{ direction: string }>`
  display: flex;
  flex: 1;
  flex-direction: ${props => props.direction};
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
`
