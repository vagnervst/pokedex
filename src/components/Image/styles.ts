import styled from '@emotion/styled'

export const Container = styled.div<{
  height: number,
  width: number,
}>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`

export const ImageStyle = styled.img<{ visible?: boolean }>`
  display: ${({ visible = true }) => visible ? 'block' : 'none'}
`
