import StatusBar from './src/components/StatusBar'
import React from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/Stack/RootStack'
import Photo from './src/components/Photo';
import { Provider } from 'react-redux';
import store from './src/redux/store';
export default function App(){
  
  return <Provider store={store}>
  <View style={{flex:1,}}>
      <StatusBar 
        backgroundColor={'#EFF5F4'}
        barStyle={'dark-content'}
      />
    <RootStack />
  </View>
  </Provider>
}
