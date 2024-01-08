import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../context/theme/ThemeContext';
import Router from '../routes/Router';
import GlobalStyle from './styles/global';
import { setupThemeProvider } from './themes/themes';

function App() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme
  return (
      <ThemeProvider theme={setupThemeProvider(theme!)}>
        <Container>
          <GlobalStyle/>
          <Router/>
        </Container>
      </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
    width: 100%;
    background: ${({theme}) => theme.primary};
`;
