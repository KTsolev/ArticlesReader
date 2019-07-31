/**
 * @format
 */

import React from "react";
import App from './App';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './articleStore/articleStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )
  

export default AppRegistry.registerComponent(appName, () => RNRedux);
