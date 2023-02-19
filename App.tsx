import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/navigation/MainStack/MainStack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
