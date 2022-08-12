import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from '../../screens/Home/Category';
import SelectCompany from '../../screens/Home/SelectCompany';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name='SelectCompany' component={ SelectCompany }/>
      </Stack.Navigator>
  );
}

export default App;