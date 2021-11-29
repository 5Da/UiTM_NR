import React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView } from 'react-native';
import ADetailsScreen from './screen/ADetailsScreen';
import HomeScreen from './screen/HomeScreen';

export default function App() {
  //console.log(require("./assets/icon.png"));
  return (
      <ADetailsScreen />
      // <HomeScreen/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
