import styled from 'styled-components';
import CircleProgressBar from '../src/components/CircleProgressBar/CircleProgressBar';

const strokeDasharray: number = 440;

const values = {
  percent: {
    html: 90,
    css: 60,
    javascript: 15,
  },
  strokeColor: {
    html: "#37ec46",
    css: "#eca437",
    javascript: "#13aac5",
  },
  text: {
    html: "html",
    css: "css",
    javascript: "javascript",
  }
};


const OutterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  /* background: #101010; */
  padding: 20px 0px;
`;

const Container = styled.div`
  position: relative;
  width: 900px;
  display: flex;
  justify-content: space-around;

  @media(max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProgressBarPage = () => (
  <OutterWrapper>
    <Container>
      <CircleProgressBar
        strokeDasharray={strokeDasharray}
        percentValue={values.percent.html}
        strokeColor={values.strokeColor.html}
        cardText={values.text.html}
      />
      <CircleProgressBar
        strokeDasharray={strokeDasharray}
        percentValue={values.percent.css}
        strokeColor={values.strokeColor.css}
        cardText={values.text.css}
      />
      <CircleProgressBar
        strokeDasharray={strokeDasharray}
        percentValue={values.percent.javascript}
        strokeColor={values.strokeColor.javascript}
        cardText={values.text.javascript}
      />
    </Container>
  </OutterWrapper>
);

export default ProgressBarPage;
