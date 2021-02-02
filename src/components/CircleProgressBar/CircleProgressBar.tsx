import styled from 'styled-components';

// Inspirado de https://youtu.be/Ft73g5Kyknw

const Card = styled.div`
  position: relative;
  width: 250px;
  background: linear-gradient(0deg, #1b1b1b, #222, #1b1b1b);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: 10px 0;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0,0,0,.5);
  };

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.03);
    pointer-events: none;
    z-index: 1;
  };
`;

const Box = styled.div`

`;

const Percent = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #000;
  background: #222;
  z-index: 1000;
`;

const Svg = styled.svg`
  position: relative;
  width: 150px;
  height: 150px;
  z-index: 1000;
`;

interface CircleProps {
  cx: string;
  cy: string;
  r: string;
  strokeColor?: string;
  strokeDasharray?: number;
  strokeDashoffset?: number;
}

const Circle = styled.circle<CircleProps>`
  width: 100%;
  height: 100%;
  fill: none;
  stroke: ${props => props.strokeColor || "#191919"};
  stroke-width: 10;
  stroke-linecap: round;
  transform: translate(5px, 5px);
  stroke-dasharray: ${props => props.strokeDasharray};
  stroke-dashoffset: ${props => props.strokeDashoffset};
`;

const Number = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const TextPercent = styled.h2`
  color: #777;
  font-weight: 700;
  font-size: 40px;
  transition: 0.3s;

  ${Card}:hover & {
    color: #fff;
    font-size: 55px;
    text-shadow: 0 0 10px #fff
  }

  span {
    font-size: 24px;
    color: #777;
    transition: 0.3s;

    ${Card}:hover & {
      color: #fff;
      text-shadow: 0 0 10px #fff
    }
  }
`;

const Text = styled.h2`
  position: relative;
  margin-top: 20px;
  color: #777;
  font-weight: 700;
  font-size:18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: 0.5s;

  ${Card}:hover & {
    color: #fff;
    text-shadow: 0 0 10px #fff
  }
`;

const CircleProgressBar = ({
  strokeDasharray,
  percentValue,
  strokeColor,
  cardText
}) => {
  let strokeDashoffset: number;
  return (
    <Card>
      <Box>
        <Percent>
          <Svg>
            <Circle cx="70" cy="70" r="70" />
            {strokeDashoffset = (strokeDasharray - ( strokeDasharray * percentValue) / 100)}
            <Circle cx="70" cy="70" r="70"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeColor={strokeColor}
            />
          </Svg>
          <Number>
            <TextPercent>{percentValue}<span>%</span></TextPercent>
          </Number>
        </Percent>
        <Text>{cardText}</Text>
      </Box>
    </Card>
  )
};

interface CircleProgressBarPorps {
  strokeDasharray: number;
  strokeDashoffset: number;
  percentValue: number;
  strokeColor: string;
  cardText: string;
}

export default CircleProgressBar;
