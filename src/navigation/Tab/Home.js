import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardStack from '../Stack/DashboardStack'
import CategoryStack from '../Stack/CategoryStack'
import SearchStack from '../Stack/SearchStack'
import NotificationsStack from '../Stack/NotificationsStack'
import ProfileStack from '../Stack/ProfileStack'


import { Colors } from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
      <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }} 
      >
        <Tab.Screen name="DashboardStack" component={DashboardStack}
            options={{
                tabBarIcon : ({focused}) => {
                return <View style={styles.menuView}>
                    <Entypo 
                        name={'home'}
                        size={24}
                        color={focused ? Colors.primary : '#707070'}
                    />
                    <Text style={[
                        styles.menuName,
                        { color: focused ?  Colors.primary : '#707070', }
                      ]}> Home </Text>
                </View>
                }
            }}
        />
         <Tab.Screen name="CategoryStack" component={CategoryStack}
            options={{
                tabBarIcon : ({focused}) => {
                return <View style={styles.menuView}>
                    <MaterialIcons 
                        name={'article'}
                        size={24}
                        color={focused ? Colors.primary : '#707070'}
                    />
                    <Text style={[
                        styles.menuName,
                        { color: focused ?  Colors.primary : '#707070', }
                      ]}> Categories </Text>
                </View>
                }
            }}
        />
         <Tab.Screen name="SearchStack" component={SearchStack}
            options={{
                tabBarIcon : ({focused}) => {
                return <View style={styles.menuView}>
                    <FontAwesome 
                        name={'search'}
                        size={24}
                        color={focused ? Colors.primary : '#707070'}
                    />
                    <Text style={[
                        styles.menuName,
                        { color: focused ?  Colors.primary : '#707070', }
                      ]}> Search </Text>
                </View>
                }
            }}
        />
         <Tab.Screen name="NotificationsStack" component={NotificationsStack}
            options={{
                tabBarIcon : ({focused}) => {
                return <View style={styles.menuView}>
                    <Ionicons 
                        name={'notifications'}
                        size={24}
                        color={focused ? Colors.primary : '#707070'}
                    />
                    <Text style={[
                        styles.menuName,
                        { color: focused ?  Colors.primary : '#707070', }
                      ]}> Notifications </Text>
                </View>
                }
            }}
        />
         <Tab.Screen name="ProfileStack" component={ProfileStack}
            options={{
                tabBarIcon : ({focused}) => {
                return <View style={styles.menuView}>
                    <FontAwesome 
                        name={'user'}
                        size={24}
                        color={focused ? Colors.primary : '#707070'}
                    />
                    <Text style={[
                        styles.menuName,
                        { color: focused ?  Colors.primary : '#707070', }
                      ]}> Profile </Text>
                </View>
                }
            }}
        />
       
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    menuView:{
        alignItems:'center',
        justifyContent:'center',
        top:3,
    },
    menuName:{
        fontSize:12, 
        fontFamily:Fonts.medium,
        marginTop:3
    },
})