import styled from '@emotion/styled'

import { PokemonTypes } from '../../types/pokemon'

export const AttributeList = styled.div`
  display: flex;
  flex-direction: column;

  & > div:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
    padding: 6px 0;
    margin-bottom: 8px;
  }
`

export const Attribute = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  & > span:first-of-type {
    font-weight: ${({ theme }) => theme.fonts.weight[500]};
    width: 100%;
  }

  & > span:last-child {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`

export const BookmarkContainer = styled.div`
  position: absolute;
  right: 50px;
  top: 280px;
  z-index: 1;
`

export const Container = styled.div``

export const Header = styled.div<{ type?: PokemonTypes }>`
  height: 290px;
  background-color: ${
    ({ theme, type }) => theme.colors.types[type] || theme.colors.red[400]
  };
  position: relative;
  padding: 4px;

  &:after {
    content: "";
    background-color: inherit;
    display: block;
    border-radius: 0 0 50% 50%;
    height: 30px;
    left: 0;
    right: 0;
    bottom: -30px;
    position: absolute;
    z-index: 0;
  }
`

export const HeaderContent = styled.div`
  height: 100%;
  padding: 0 24px;
`

export const SpinnerStyle = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Id = styled.span`
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 4px;
  font-size: 24px;
`

export const Main = styled.div`
  margin-top: 50px;
  padding: 0 16px;
`

export const Name = styled.h2`
  color: white;
  font-size: 32px;
  font-weight: 700;
`

export const PictureContainer = styled.div`
  width: 150px;
  display: block;
  margin: 0 auto;
`

export const TypesList = styled.div`
  display: flex;
  margin-bottom: 16px;

  & > * {
    margin: 4px;
  }
`
