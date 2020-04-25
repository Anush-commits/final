import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';
const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{ backgroundColor: '#694fad' }}>
        <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => { <MaterialIcons name='home' color='#00adb5' size={26} /> }
        }} />
        <Tab.Screen name='Details' component={DetailsScreen} options={{
          tabBarLabel: 'Details',
          tabBarIcon: () => { <MaterialIcons name='perm-device-information' color='#00adb5' size={26} /> }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
