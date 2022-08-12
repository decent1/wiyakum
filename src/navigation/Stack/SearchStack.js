import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../../screens/Home/Search';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Search" component={Search} />

      </Stack.Navigator>
  );
}

export default App;