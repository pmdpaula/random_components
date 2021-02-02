import styled, { keyframes } from 'styled-components';

// Inspirado de https://youtu.be/jThaNv8pKDQ


interface LoaderProps {
  circleSize: string;
  bgMode: string;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const gradientColors = {
  color1: "#8000b3",
  color2: "#ff7f2a",
  color3: "#00f7ff",
  color4: "#ffee00",
}



const Loader = styled.div<LoaderProps>`
  position: relative;
  width: ${props => props.circleSize};
  height: ${props => props.circleSize};
  border-radius: 50%;
  background: linear-gradient(${gradientColors.color1}, ${gradientColors.color2}, ${gradientColors.color3}, ${gradientColors.color4});
  animation: ${rotate} 0.8s linear infinite;
  
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(${gradientColors.color1}, ${gradientColors.color2}, ${gradientColors.color3}, ${gradientColors.color4});
  }
  
  span:nth-child(1) {
    filter: blur(calc(${props => props.circleSize} * 0.05));
  }

  span:nth-child(2) {
    filter: blur(calc(${props => props.circleSize} * 0.07));
  }

  span:nth-child(3) {
    filter: blur(calc(${props => props.circleSize} * 0.09));
  }

  span:nth-child(4) {
    filter: blur(calc(${props => props.circleSize} * 0.13));
  }

  &:after {
    content: '';
    position: absolute;
    /* box-shadow: inset 0 0 30px #888; */
    top: calc(${props => props.circleSize} * 0.1);
    left: calc(${props => props.circleSize} * 0.1);
    right: calc(${props => props.circleSize} * 0.1);
    bottom: calc(${props => props.circleSize} * 0.1);
    background: ${props => props.bgMode};
    border-radius: 50%;
  }
`;


const GlowingGradientLoaderRing = ({
  bgMode,
  circleSize,
}) => {
  return (
    <Loader
      bgMode={bgMode}
      circleSize={circleSize}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Loader>
  )
};

interface RingProps {
  bgMode: string,
  circleSize: string,
}

export default GlowingGradientLoaderRing;
