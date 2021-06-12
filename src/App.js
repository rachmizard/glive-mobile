import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import RootRouter from './router';
import { theme } from './assets';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { navigationRef } from './router/rootNavigation';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer ref={navigationRef} theme={theme}>
            <RootRouter />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
