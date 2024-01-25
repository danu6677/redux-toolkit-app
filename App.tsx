/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import NavigationContainerComponent from './src/navigation/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainerComponent />
    </Provider>
  );
};

module.exports = App;
