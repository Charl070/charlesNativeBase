import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Display, Capture} from '../../screens';

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Display} name="Display" />
      <Stack.Screen component={Capture} name="Capture" />
    </Stack.Navigator>
  );
};

export default MainStack;
