import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: #91c9a6;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  box-shadow: 1px 3px 3px #acacac;
`

const Flex = styled.div`
  display: flex;
  flex: 1;
`

export const ImageContainer = styled.div`
  margin: 6px;
`

export const FlexContainer = styled(Flex)`
  padding: 2px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 2px;
  color: #f4f4f4;
`

export const Identifier = styled(Flex)`
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 32px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
`
