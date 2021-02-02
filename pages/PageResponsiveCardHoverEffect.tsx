import styled from 'styled-components';
import ResponsiveCardHoverEffect from '../src/components/ResponsiveCardHoverEffect/ResponsiveCardHoverEffect';

// import imgPP001 from '../src/assets/images/pp001.jpg';
// import imgPP002 from '../src/assets/images/pp002.jpg';
// import imgPP003 from '../src/assets/images/pp003.jpg';

const OutterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #16384c;
  /* min-height: 100vh; */
  /* flex-direction: column; */
  /* padding: 20px; */

  /* @media(max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
`;

const Container = styled.div`
  position: relative;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
`;


const ContainerBlack = styled(Container)`
  /* background: #101010; */
`;

const ContainerWhite = styled(Container)`
  /* background: #fff; */
`;


const PageResponsiveCardHoverEffect = () => (
  <OutterWrapper>
      <Container>
        <ResponsiveCardHoverEffect
          imgSrc="/pp001.jpg"
          imgAlt="Card 01"
          layout="fixed"
          imgWidth="220px"
          imgHeight="220px"
        />

        <ResponsiveCardHoverEffect
          imgSrc="/pp002.jpg"
          imgAlt="Card 02"
          layout="fixed"
          imgWidth="220px"
          imgHeight="220px"
        />

        <ResponsiveCardHoverEffect
          imgSrc="/pp003.jpg"
          imgAlt="Card 03"
          layout="fixed"
          imgWidth="220px"
          imgHeight="220px"
        />
      </Container>
  </OutterWrapper>
);

interface ResponsiveCardHoverEffectProps {
  imgSrc: string;
  imgAlt: string;
}

export default PageResponsiveCardHoverEffect;
