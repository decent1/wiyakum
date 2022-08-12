import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../../screens/Splash'
import AppStack from './AppStack'
// import Photo from '../../components/Photo';

const Stack = createNativeStackNavigator();

function RootFlow() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        headerMode={'none'}
        initialRouteName="Splash">
         <Stack.Screen name="Splash" component={Splash} />
         <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootFlow;