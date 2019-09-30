import React from 'react';
import {Provider} from 'react-redux';
import {StyleProvider} from 'native-base';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import Routes from './src';

const App = props => (
  <Provider store={store}>
    <StyleProvider style={getTheme(material)}>
      <Routes />
    </StyleProvider>
  </Provider>
);

export default App;
