import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.types[props.color]};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  padding: ${({ theme }) => theme.sizes.sm}px;
  box-shadow: 1px 3px 3px #eee;
`

const Flex = styled.div`
  display: flex;
  flex: 1;
`

export const ImageContainer = styled.div`
  margin: ${({ theme }) => theme.sizes.sm}px;
`

export const FlexContainer = styled(Flex)`
  padding: ${({ theme }) => theme.sizes.xs}px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 2px;
  color: #f4f4f4;
  flex-direction: column;
`

export const PokemonName = styled.p`
  color: ${props  => props.theme.colors.white};
  margin-top: ${props => props.theme.sizes.sm}px;
  margin-bottom: ${props => props.theme.sizes.xs}px;
  font-weight: 900;
  font-size: 24px;
`

export const Identifier = styled(Flex)`
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 32px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
`

export const AttributeList = styled.div`
  & > div:not(:last-child) {
    margin-right: ${props => props.theme.sizes.xs}px;
  }
`
