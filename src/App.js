import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import '#config/reactotron-config';

import history from '#lib/history';

import { store, persistor } from '#config/redux-config';

import Routes from '#behavior/routes-front';
import GlobalStyle from '#styles/global';
import Header from '#components/Header/index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Header />
          <Routes />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
