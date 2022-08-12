import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Auth/Splash';
import EnterPhone from '../screens/Auth/EnterPhone';
import EnterCode from '../screens/Auth/EnterCode';
import SignUp from '../screens/Auth/SignUp';
import Dashboard from '../screens/Home/Dashboard';
import ViewAll from '../screens/Home/ViewAll';
import VolunteerCampaign from '../screens/Home/VolunteerCamaign';
import ContactUs from '../screens/Home/ContactUs';
import Category from '../screens/Auth/Category';
import MyCampaign from '../screens/Auth/MyCampaign';
import Profile from '../screens/Home/Profile'

const Stack = createNativeStackNavigator();

function AppFlow() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}
        >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="EnterPhone" component={EnterPhone} />
            <Stack.Screen name="EnterCode" component={EnterCode} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="ViewAll" component={ViewAll} />
            <Stack.Screen name="VolunteerCampaign" component={VolunteerCampaign} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="MyCampaign" component={MyCampaign} />
            <Stack.Screen name="Profile" component={Profile} />
           
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppFlow;