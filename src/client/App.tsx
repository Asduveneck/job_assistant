import { StylesProvider } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Layout from './Layout';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/index';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = (): JSX.Element => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
              <ThemeProvider theme={theme}>
                <Layout />
              </ThemeProvider>
            </MuiThemeProvider>
          </StylesProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
