import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import PropertyScreen from './screen/PropertyScreen';
import ProfileScreen from './screen/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ADetailsScreen from './screen/ADetailsScreen';
import TestScreen from './screen/TestScreen';
import Test2 from './screen/swipableItem';
import ListAccommodation from './component/home/ListAccommodation';
import Edit from './component/edit';

const Stack = createStackNavigator()

export default function App() {
  //console.log(require("./assets/icon.png"));
  return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName= 'Profile'
        >
          <Stack.Screen name='Home' component= {HomeScreen} />  
          <Stack.Screen name='Property' component= {PropertyScreen} />  
          <Stack.Screen name='Profile' component= {ProfileScreen} />  
          <Stack.Screen name='ADetails' component= {ADetailsScreen} />  
        </Stack.Navigator>
      </NavigationContainer>
    // <Edit />
    // <HomeScreen/>
    // <PropertyScreen />
    // <ProfileScreen />
    // <ADetailsScreen />
    // <ListAccommodation />


      // <TestScreen />
      // <Test2/>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
