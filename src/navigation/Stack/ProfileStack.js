import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePoint from '../../screens/Home/ProfilePoint';
import NewCampaign from '../../screens/Home/NewCampaign';
import Profile from '../../screens/Home/Profile'
import ContactUs from '../../screens/Home/ContactUs'
import MyCampaign from '../../screens/Home/MyCampaign';


const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="ProfilePoint" component={ProfilePoint} />
        <Stack.Screen name="NewCampaign" component={NewCampaign} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="MyCampaign" component={MyCampaign} />
      </Stack.Navigator>
  );
}

export default App;