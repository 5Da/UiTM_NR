import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, Pressable, Alert, TouchableOpacity } from "react-native";
import { Avatar, ListItem, Switch, Icon, BottomSheet } from 'react-native-elements'
import BottomTabs, { bottomTabIcons } from "../component/home/BottomTabs";
import ImagePicker2 from "../component/ImagePicker2";
import { auth } from "../firebase";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "My Account",
    icon: 'account' ,
    data: ["Name", "IC", "Gender", 'Edit Profile']
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    title: "Notification",
    data: ['Push Notification']
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
    title: "Support",
    data: ["Tenant", "Landlord", "Staff"]
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
    title: "About Us",
    data: ["Term of Service", "Contact Us", 'Privacy Policy']
  }
];



    // display item in flatlist
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );

    
    const App = ({navigation}) => {
      const [expanded, setExpanded] = React.useState(false)
      const handlePress = () => setExpanded(!expanded)
      
      // const [isSwitchOn, setIsSwitchOn] = React.useState(false)
      // const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)
      
      const [selectedId, setSelectedId] = useState(null)
      
      const [isVisible, setIsVisible] = useState(false);
      const handleOnClose = () => setIsVisible(!isVisible);


  // from bottomshet punya data
  // const list = [
  //   { title: 'Take Photo' },
  //   { title: 'Choose Image from gallery', 
  //     onPress: () => PickImage
  //   },
  //   {
  //     title: 'Cancel',
  //     containerStyle: { backgroundColor: 'red' },
  //     titleStyle: { color: 'white' },
  //     onPress: () => setIsVisible(false),
  //   },
  // ];

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
        { text: "OK", onPress: () => signOutUser() && console.log("ok Pressed")}
      ]
    );

    const signOutUser = () => {
      // change authenthication state
      auth.signOut().then( () => {
          navigation.replace("Login")
      })
  }

  //re rendering the flatlist
  const renderItem = ({ item }) =>  {
    const backgroundColor = item.id === selectedId ? "#CCE3DE" : "#16324F";
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item 
        item={item} 
        title={item.title}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        />
      // {item.title === 'Notification' ? <Switch style={{ position: 'absolute', right: 20, top: 40 }} value={isSwitchOn} onValueChange={onToggleSwitch} /> : null}
    );
  }


  return(
      <SafeAreaView style={styles.container}>
        <View>
        <ListItem>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Avatar
            size= 'xlarge'
            activeOpacity={0.7}
            rounded
            title= 'MF'
            source={{ uri: auth?.currentUser?.photoURL || 'https://wallpaperaccess.com/full/3421978.jpg' }}
            />
        </TouchableOpacity>

        <ListItem.Content > 
            <ListItem.Title>Muhammad Faidhi</ListItem.Title>
            <ListItem.Subtitle>Tenant / Landlord</ListItem.Subtitle>
            <ListItem.Subtitle >IC </ListItem.Subtitle>
            <ListItem.Subtitle>Male</ListItem.Subtitle>
            <ListItem.Subtitle>
            <View style={{marginTop : 5}}>
                <Pressable style={styles.buttonLogOut} >
                    <Text onPress={logOutAlert} style={{color: 'white'}}> LOG OUT </Text>
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
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      />
      {/* <FlatList
      data={DATA}
      renderItem={({ item }) =>  {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#16324F";
        const color = item.id === selectedId ? 'white' : 'black';
        return (
          <Item 
            item={item} 
            title={item.title}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
            />
        );
      }}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      /> */}
  
        {/* <Switch value={isSwitchOn} onValueChange={onToggleSwitch} /> */}
      {/* <Switch style={{ position: 'absolute', right: 20, top: 40 }} value={isSwitchOn} onValueChange={onToggleSwitch} /> */}

    {/* <BottomSheet
          isVisible={isVisible}
          containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
        >
          <ImagePicker2 isVisible={isVisible} onClose={handleOnClose}/>
          {list.map((l, i) => (
            <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet> */}
      
      <ImagePicker2 isVisible={isVisible} onClose={handleOnClose}/>
        
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    opacity: 0.7,
  },
  title: {
    fontSize: 28,
  },
  buttonLogOut: {
    fontSize: 8,
    justifyContent: 'center',
    backgroundColor: '#16324F',
    minHeight: 32,
    marginTop: 5,
    padding: 5,
    width: 80,
    marginLeft: 5,
    borderRadius: 10,
  },
});

export default App;