import React from 'react';
import Index from './src/Index';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
