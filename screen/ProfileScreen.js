import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, Pressable, Alert, TouchableOpacity } from "react-native";
import { Avatar, ListItem, Switch, Icon } from 'react-native-elements'
import BottomTabs, { bottomTabIcons } from "../component/home/BottomTabs";
import { auth } from "../firebase";
const DATA = [
  {
    title: "My Account",
    icon: 'account' ,
    data: ["Name", "IC", "Gender", 'Edit Profile']
  },
  {
    title: "Notification",
    data: ['Push Notification']
  },
  {
    title: "Support",
    data: ["Tenant", "Landlord", "Staff"]
  },
  {
    title: "About Us",
    data: ["Term of Service", "Contact Us", 'Privacy Policy']
  }
];



    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

    

const App = ({navigation}) => {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const logOutAlert = () =>
    Alert.alert(
        "Log Out?",
      "You sure want to Log Out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: signOutUser() && console.log("ok Pressed")}
      ]
    );

    const signOutUser = () => {
      // change authenthication state
      auth.signOut().then( () => {
          navigation.replace("Login")
      })
  }

  function renderItem({ item }) {
    return (
      <Item item={item} title={item.title} />
      // {item.title === 'Notification' ? <Switch style={{ position: 'absolute', right: 20, top: 40 }} value={isSwitchOn} onValueChange={onToggleSwitch} /> : null}
    );
  }

  return(
      <SafeAreaView style={styles.container}>
        <View>
        <ListItem>
        <Avatar
            size= 'xlarge'
            activeOpacity={0.7}
            rounded
            title= 'MF'
            source={{ uri: 'https://wallpaperaccess.com/full/3421978.jpg' }}
        />
        <ListItem.Content > 
            <ListItem.Title>Muhammad Faidhi</ListItem.Title>
            <ListItem.Subtitle>Tenant / Landlord</ListItem.Subtitle>
            <ListItem.Subtitle >IC </ListItem.Subtitle>
            <ListItem.Subtitle>Male</ListItem.Subtitle>
            <ListItem.Subtitle>
            <View style={{marginTop : 5}}>
                <Pressable style={styles.buttonLogOut} >
                    <Text onPress={logOutAlert}> LOG OUT </Text>
                </Pressable>
            </View>
            </ListItem.Subtitle>
            
          </ListItem.Content>
          <ListItem.Chevron/>
          </ListItem>
        </View>

      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
  
        {/* <Switch value={isSwitchOn} onValueChange={onToggleSwitch} /> */}
      {/* <Switch style={{ position: 'absolute', right: 20, top: 40 }} value={isSwitchOn} onValueChange={onToggleSwitch} /> */}

      <BottomTabs icons ={bottomTabIcons} navigation={navigation}/>
      </SafeAreaView>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  
  },
  header: {
    fontSize: 30,
    backgroundColor: "#fff"
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    opacity: 0.7,
  },
  title: {
    fontSize: 28,
  },
  buttonLogOut: {
    fontSize: 10,
    justifyContent: 'center',
    backgroundColor: 'blue',
    minHeight: 32,
    marginTop: 5,
    borderRadius: 10,
  },
});

export default App;