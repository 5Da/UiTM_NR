import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Pressable, Alert } from "react-native";
import { Avatar, ListItem } from 'react-native-elements'
import BottomTabs, { bottomTabIcons } from "../component/home/BottomTabs";

const DATA = [
  {
    title: "My Account",
    data: ["Name", "IC", "Gender"]
  },
  {
    title: "Settings",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
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
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );


const App = () => (
  <SafeAreaView style={styles.container}>
        <View>
        <ListItem>
        <Avatar
            size= 'xlarge'
            title= "MF"
            activeOpacity={0.7}
            rounded
            source={{ uri: 'https://bbts1.azureedge.net/images/p/full/2019/01/0c18c2b0-0631-49a4-9a63-4fb5b5848d83.jpg'}}
        />
        <ListItem.Content style={{zIndex: 0}}>
            
            <ListItem.Title>Muhammad Faidhi</ListItem.Title>
            <ListItem.Subtitle>Tenant</ListItem.Subtitle>
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
            

    <SectionList 
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    
    <View style={{flex :1}}>
    <BottomTabs icons ={bottomTabIcons}/>
    </View>

  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  
  },
  item: {
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 30,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
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