import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { db, auth } from '../../firebase'
import { Button } from 'react-native-elements'
import firebase from 'firebase/app';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const createAccount = (email ,password) => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
            console.log("Creating user...");

            db.collection("users").doc(user.uid).set({
                email: email,
                role: 'Admin',
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })

        })
        .catch(err => {
            const errorCode = err.code
            const errorMessage = err.message
            if(errorCode == 'auth/email-already-in-use')
                alert(errorMessage)
            console.log(err.code);
            console.log(err.message);
        });
};

const Admin = () => {
    const [user, setUser] = useState([])
    const [cnum, setCnum] = useState()
    const [createSwitch, setCreateSwitch] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        const unsubscribe = db.collection('users').where('role' ,'==' ,'Admin').onSnapshot( snapshot => (
            setCnum(snapshot.size),
            setUser(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
                
        ))
        return unsubscribe;
    }, [])
    return (
        <View style={{flex:1,}}>
            <TouchableOpacity 
                        style={styles.addProperties}
                        onPress={() =>  setCreateSwitch(!createSwitch)}
                    >
                    <Text style={styles.addContent}>ADD NEW ADMIN</Text>
                    <Image source= {{uri: 'https://img.icons8.com/ios-glyphs/2x/ffffff/add.png'}} style={styles.addIconContent}/>
                    {/* <Icon name='pluscircleo' type='antdesign' style={styles.addIconContent}/> */}
                    <Text></Text>
            </TouchableOpacity>
            {createSwitch? 
                <View style ={{flexDirection: 'row', marginLeft: 10, borderTopWidth: 1, borderBottomWidth: 1}}>

                <TextInput
                    style={{borderColor: 'black', opacity: 0.5, borderRadius: 6, marginRight: 120}}
                    placeholder="Email"
                    onChangeText={newText => setEmail(newText)}
                    /> 
                <TextInput
                    placeholder="Password"
                    onChangeText={newText => setPassword(newText)}
           
                    /> 
                <Button
                    buttonStyle={{backgroundColor: '#16324F', marginLeft:20 ,height: 35}}
                    onPress={() => createAccount(email, password ) }
                    title="Submit" />
                </View>
            : null }
            <Text style={{marginBottom: 5, fontWeight: '700'}}>Number of registered Admin : {cnum}</Text>
            <View style={{flexDirection: 'row', marginLeft: 5, borderRadius: 5, backgroundColor: 'white', marginBottom: 2}}>
                <View style={{
                    width: width*30/100,}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>Email </Text> 
                </View>
                <View style={{width: width*35/100, backgroundColor: 'white', padding: 2}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>Name </Text> 
                </View>
                <View style={{width: width*10/100, backgroundColor: 'white'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}> Level </Text> 
                </View>
                <View style={{width: width*10/100, backgroundColor: 'white'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}> Role </Text> 
                </View>

            </View>

            <ScrollView style={{flex: 1,}}>
                {user.map(({id, data : {email, name, role, level} }) =>(
                    <TouchableOpacity
                    onPress={() => setSelected(id)}
                    key={id}
                    style={{flexDirection: 'row', marginLeft:5, padding: 4, backgroundColor: selected !== id ? 'white' : '#6E5097' , borderRadius: 5, marginBottom: 2}}
                    >
                        <View style={{ justifyContent: 'center',
                            width: width*30/100}}>
                            <Text>{email} </Text> 
                         </View>
                         <View style={{ justifyContent: 'center',
                             width: width*35/100}}>
                             <Text>{name} </Text> 
                          </View>
                        <View style={{ justifyContent: 'center',
                            width: width*10/100}}>
                            <Text> {level} </Text> 
                         </View>
                        <View style={{ justifyContent: 'center',
                            width: width*15/100}}>
                            <Text> {role} </Text> 
                         </View>
             
                    </TouchableOpacity>
                
                ))}

            </ScrollView>
        </View>
    )
}

export default Admin

const styles = StyleSheet.create({
    addProperties: {
        flexDirection: 'row',
        margin: 8,
        backgroundColor : '#16324F',
        width: 200,
        borderRadius : 20,
    },
    addContent: {
        margin: 5,
        padding: 7,
        paddingLeft: 10,
        color: 'white'
    },
    addIconContent: {
        marginTop: 11,
        width: 20, 
        height:23
        
    },
})
