import Image from 'next/image'

import styled from 'styled-components';

// Inspirado de https://youtu.be/8b2mTq0Xrtw

const Card = styled.div`
  position: relative;
  max-width: 300px;
  height: 215px;
  background: #fff;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0,0,0,.5);
  transition: 0.3s ease-in-out;

  &:hover {
    height: 420px;
  }
`;

interface ImgBoxProps {
  imgWidth: string;
  imgHeight: string;
}

const ImgBox = styled.div<ImgBoxProps>`
  position: relative;
  width: ${({ imgWidth }) => imgWidth};
  height: ${({ imgHeight }) => imgHeight};
  /* width: "260px";
  height: "260px"; */
  top: -60px;
  left: 20px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0,0,0,.2);
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  border-radius: 4px;
`;

const Content = styled.div`
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;

  ${Card} & {
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
    /* text-shadow: 0 0 4px rgba(16,38,4,2); */
  }

`;

// const Card = styled.div`
// `;

const ResponsiveCardHoverEffect = ({
  imgSrc,
  imgAlt,
  layout,
  imgWidth,
  imgHeight,
}) => {
  // imgWidth = imgWidth || '260px';
  // imgHeight = imgHeight || '260px';
// console.log(imgWidth);

  return (
      <Card>
        <ImgBox
          imgWidth={imgWidth}
          imgHeight={imgHeight}
        >
          <StyledImage
            src={imgSrc}
            alt={imgAlt}
            layout={layout}
            width={imgWidth}
            height={imgHeight}
          />
        </ImgBox>
        <Content>
          <h2>{imgAlt}</h2>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
        </Content>
      </Card>
  );
}

export default ResponsiveCardHoverEffect;