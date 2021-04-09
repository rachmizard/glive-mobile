import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import RootRouter from './router';
import {theme} from './assets';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <RootRouter />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
