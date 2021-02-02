import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';

const { theme } = db;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* flex-direction: column; */
    font-family: 'Roboto', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => db.theme.colors.primaryText};
  }
  html, body {
    /* min-height: 100vh; */
  }
  #__next {
    /* flex: 1;
    display: flex; */
    /* flex-direction: column; */
  }
`;


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>HTML, CSS e Javascript</title>
        <meta name="title" content="Estudos de HTML, CSS e Javascript" />
        <meta name="description" content="Teste os seus conhecimentos sobre bolos e demais sabores da confeitaria" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

interface colors {
  name: string;
  hexcode: string;
}

export default App;
