import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../screens/Home/Dashboard';
import CampaignDetails from '../../screens/Home/CampaignDetails'
import VolunteerCampaign from '../../screens/Home/VolunteerCampaign'

const Stack = createNativeStackNavigator();

function App() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CampaignDetails" component={CampaignDetails} />
        <Stack.Screen name="VolunteerCampaign" component={VolunteerCampaign} />

      </Stack.Navigator>
  );
}

export default App;