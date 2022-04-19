import { Image, Platform, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { Button } from 'react-native-elements';

 const updateProfile = (ic, name, phoneNo, props) => {
    if(phoneNo.length<10|| phoneNo.length === null)
        return alert('Please input a valid phone number')
        
        if(ic.length<12 || ic.length === null || ic.length === 'undefined')
          return alert('Please input a valid IC / Passpord No')

    let temp = ic
    // console.log(temp % 2)
    let gender = ''
    if (temp == '')
        gender = 'Male/Female'
    else if(temp % 2 == 1)
        gender = 'Male'
    else if(temp % 2 == 0)
        gender = 'Female'

    auth.currentUser.updateProfile({displayName: name})
    db.collection('users').doc(auth.currentUser.uid).update({
      ic : ic,
      name : name,
      phoneNo : phoneNo,
      gender : gender,
    })
    if(Platform.OS === 'android')
      ToastAndroid.show('User Profile Updated', ToastAndroid.SHORT);
    else
      alert('User Profile Updated')
    props.navigation.goBack()
 }


const EditProfileScreen = ({route, ...props}) => {
  // auth.currentUser.updateProfile({displayName: 'Muhammad Faidhi'})
  const [email, setEmail] = useState(route.params.email)
  const [name, setName] = useState(route.params.name)
  const [ic, setIc] = useState(route.params.ic)
  const [phoneNo, setPhoneNo] = useState(route.params.phoneNo)

  const [user, setUser] = useState(
    { email: route.params.email,
      name : route.params.name,
      ic: route.params.ic,
      phoneNo : route.params.phoneNo,
    }
    );
    // console.log(props)
  // console.log(route.params)
  // console.log(route.params.item.data.name)
  // auth.currentUser.updatePassword
  return (
    <View style={{flex: 1, justifyContent: 'center', }}>
      {/* <View style={{justifyContent:'center', flex: 1}}> */}

      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Text style={{fontWeight: '700', fontSize: 25}}>Edit Profile </Text>
        <Image style ={{width: 200, height: 200, borderRadius: 5, marginTop:10}} source={{uri : route.params.photoUrl}} />
      </View>

      {/* {user.email} */}
      <Text> Email: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        editable={false}
      />
      <Text> Name: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Input Full Name as per IC "
        value={name}
        autoFocus={true}
      />
      <Text> IC: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setIc}
        value={ic}
        placeholder="Input IC / Identity Card Number"
        keyboardType="numeric"
        maxLength={12}
      />

      <Text> Phone Number: </Text>
      <TextInput
      
        style={styles.input}
        onChangeText={setPhoneNo}
        value={phoneNo}
        placeholder="Input Phone Number"
        keyboardType="numeric"
        maxLength={11}
        
      />
      <Text> Change Password</Text>
      <Button 
          buttonStyle={{backgroundColor: '#16324F', height: 37, marginTop: 30}}
          onPress={() => updateProfile(ic,name,phoneNo, props)}
          title="Update" />  
      {/* </View> */}
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
});
