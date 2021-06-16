import styled from '@emotion/styled'
import theme from '../../theme'

type Props = {
  color?: keyof typeof theme.colors.types,
  size?: keyof typeof theme.sizes,
}

const Badge = styled.div<Props>`
  padding: 4px;
  font-size: ${props => props.theme.sizes[props.size || 'lg']}px;
  border-radius: 4px;
  display: inline-block;
  font-weight: 900;
  color: ${props => props.theme.colors.white};
  background-color: ${
    ({ color, theme }) => theme.colors.types[color] || 'rgba(0, 0, 0, 0.25)'
  };
`

export default Badge
