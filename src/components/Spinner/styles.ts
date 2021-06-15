import styled from '@emotion/styled'

export const SpinnerStyle = styled.div<{ r: number }>`
  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }

  & > svg {
    width: ${props => 2.5 * props.r}px;
    height: ${props => 2.5 * props.r}px;
    stroke-dasharray: 120px;
    transform-origin: 50% 50%;
    animation: rotate .7s infinite linear;

    & > circle {
      stroke: ${props => props.theme === 'dark' ? '#000' : '#fff'};
      r: ${props => `${props.r}px;`
    }
  }
`
