import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, Pressable, Alert, TouchableOpacity, Platform, } from "react-native";
import { Avatar, ListItem, Divider } from 'react-native-elements'
import BottomTabs, { bottomTabIcons } from "../component/home/BottomTabs";
import ImagePicker from "../component/ImagePicker";
import { auth, db } from "../firebase";


    // display item in flatlist
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.title}>{item.data}</Text> */}
        {/* <Text style={styles.title}>{item.data}</Text> */}
      </TouchableOpacity>
    );

    
const ProfileScreen = ({navigation}) => {
      const [expanded, setExpanded] = React.useState(false)
      const [user, setUser] = React.useState([])
      const [latestProfilePic, setLatestProfilePic] = React.useState(auth?.currentUser?.photoURL)

      const handlePress = () => setExpanded(!expanded)
      
      const [selectedId, setSelectedId] = useState(null)
      
      const [isVisible, setIsVisible] = useState(false);
      const handleOnClose = () => setIsVisible(!isVisible);

      const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "My Account",
          screen: 'Edit Profile',
          icon: 'account' ,
          data: user,
          // data: {name : user.name , email : user.email, ic : user.ic, phoneNo : user.phoneNo,},
          // data: [{name : user.name , email : user.email}, user.ic, user.phoneNo, gender],
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
          title: "Notification",
          screen: 'Notification',
          data: ['Push Notification']
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
          title: "Support",
          screen: 'Support',
          data: ["Tenant", "Landlord", "Staff"]
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
          title: "About Us",
          screen: 'About Us',
          data: ["Term of Service", "Contact Us", 'Privacy Policy']
        },
      ];

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
              onPress={() => (setSelectedId(item.id) , navigation.navigate(item.screen, item.data ))}
              backgroundColor={{ backgroundColor }}
              textColor={{ color }}
              />
            // {item.title === 'Notification' ? <Switch style={{ position: 'absolute', right: 20, top: 40 }} value={isSwitchOn} onValueChange={onToggleSwitch} /> : null}
          );
        }

        // useEffect(() => {
        //   const dbRef = db.collection('users').doc(auth.currentUser.uid)
        //   dbRef.get().then((doc)=> setUser(doc.data()))
        // }, []);
        
        async function getDoc() {
          const snapshot = await db.collection('users').doc(auth.currentUser.uid).get();
          setUser(snapshot.data())
        }

        useEffect(() => {
            getDoc()
          }, [navigation]);
      
      // get the second name from username fullname    
      let sec = auth.currentUser.displayName?.split(" ")    
return(
      <SafeAreaView style={styles.container}>
        <View>
        <ListItem>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Avatar
            size= 'xlarge'
            activeOpacity={0.7}
            rounded
            title= {auth.currentUser?.displayName?.charAt(0) + sec[1]?.charAt(0)}
            source={{ uri: latestProfilePic || 'NA' }}
            
            />
        </TouchableOpacity>
        {/* {console.log(auth.currentUser.displayName.split(''))} */}
        <ListItem.Content > 
            <ListItem.Title>{auth.currentUser.displayName}</ListItem.Title>
            <ListItem.Subtitle>{auth.currentUser.email}</ListItem.Subtitle>
            {user.ic? <ListItem.Subtitle >{user.ic} </ListItem.Subtitle>: null}
            {user.phoneNo? <ListItem.Subtitle >{user.phoneNo} </ListItem.Subtitle>: null}
            {user.gender? <ListItem.Subtitle >{user.gender} </ListItem.Subtitle>: <ListItem.Subtitle >Male/Female </ListItem.Subtitle>}
            <ListItem.Subtitle>
            <View style={{marginTop : 5}}>
                <Pressable style={styles.buttonLogOut} >
                    <Text onPress={Platform.OS === 'web' ? signOutUser : logOutAlert} style={{color: 'white'}}> LOG OUT </Text>
                </Pressable>
                {/* <Button onPress={Platform.OS === 'web' ? signOutUser : logOutAlert} title = 'LOG OUT'/> */}
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
        
        <ImagePicker isVisible={isVisible} onClose={handleOnClose} setLatestProfilePic={setLatestProfilePic}/>
    
        <Divider style={{marginTop: 10, marginBottom: 75}}/>  
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

export default ProfileScreen;