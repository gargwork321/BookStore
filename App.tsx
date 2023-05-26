import React from 'react';
import AppNavigation from './src/navigation/appNavigation';
import {Provider} from 'react-redux';
import bookStore from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={bookStore}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
