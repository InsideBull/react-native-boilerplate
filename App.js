import React from 'react';
import Home from './src/screens/Home'

import { Provider as StoreProvider } from 'react-redux';
import { configureStore } from './src/redux/store';

const store = configureStore().store;

const App = () => {
  return (
    <StoreProvider store={store}>
      <Home></Home>
    </StoreProvider>
  )
}

export default App