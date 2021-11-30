import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import ADetailsScreen from './screen/ADetailsScreen';
import HomeScreen from './screen/HomeScreen';
import PropertyScreen from './screen/PropertyScreen';
import ProfileScreen from './screen/ProfileScreen';
import TestScreen from './screen/TestScreen';
import Test2 from './screen/Test2';

export default function App() {
  //console.log(require("./assets/icon.png"));
  return (
    // <HomeScreen/>
    // <ADetailsScreen />
      // <PropertyScreen />
      <ProfileScreen />
      // <TestScreen />
      // <Test2/>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
