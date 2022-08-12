import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../../screens/Auth/SignIn';
import EnterPhone from '../../screens/Auth/EnterPhone'
import EnterCode from '../../screens/Auth/EnterCode'
import SignUp from '../../screens/Auth/SignUp';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='SignIn'
      >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={ SignUp } />

      <Stack.Screen name="EnterPhone" component={EnterPhone} />
      <Stack.Screen name="EnterCode" component={EnterCode} />
    </Stack.Navigator>
  );
}

export default AuthStack;
