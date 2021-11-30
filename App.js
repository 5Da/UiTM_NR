import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import ADetailsScreen from './screen/ADetailsScreen';
import HomeScreen from './screen/HomeScreen';
import PropertyScreen from './screen/PropertyScreen';

export default function App() {
  //console.log(require("./assets/icon.png"));
  return (
    // <HomeScreen/>
    // <ADetailsScreen />
      <PropertyScreen />


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
