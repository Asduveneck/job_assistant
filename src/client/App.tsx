import { StylesProvider } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Layout from './Layout';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = (): JSX.Element => {
  return (
    <div>
      <Provider store={store}>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <Layout />
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </Provider>
    </div>
  );
};

export default App;
