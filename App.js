/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import HomePage from './src/pages/HomePage';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
