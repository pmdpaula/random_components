import styled from 'styled-components';
import GlowingGradientLoaderRing from '../src/components/GlowingGradientLoaderRing/GlowingGradientLoaderRing';

const alturaContainer = '250px';

const OutterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  `;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 100%;
  height: ${alturaContainer};
  box-shadow: 0 0 10px rgba(0,0,0,.3);
  border-radius: 5px;
`;

const ContainerBlack = styled(Container)`
  background: #101010;
`;

const ContainerWhite = styled(Container)`
  background: #fff;
`;

const GlowingGradientLoaderRingPage = () => {
  return (
    <OutterWrapper>
      <ContainerBlack>
        <GlowingGradientLoaderRing
          bgMode="#101010"
          circleSize="30px"
        />
      </ContainerBlack>

      <ContainerWhite>
        <GlowingGradientLoaderRing
          bgMode="#fff"
          circleSize="100px"
        />
      </ContainerWhite>
    </OutterWrapper>
  )
}


export default GlowingGradientLoaderRingPage;