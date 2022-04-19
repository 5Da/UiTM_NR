import React, { useEffect, useState } from 'react'
import { Alert, Image, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'
import { auth, db } from '../../firebase';
import SwiperAlternative from '../SwiperAlternative'
import firebase from 'firebase/app'
const decisionRemoveProperty = (id,userUid) => {

    if(Platform.OS === 'web'){
        db.collection('Landlord').doc(userUid).collection('Accommodation').doc(id).update({ like : firebase.firestore.FieldValue.arrayRemove(auth.currentUser.uid) })   
    }
    Alert.alert(
        "Remove Item",
        "Are you sure you want to removed?",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => 
            db
            .collection('Landlord')
            .doc(userUid)
            .collection('Accommodation').doc(id)
            .update({ like : firebase.firestore.FieldValue.arrayRemove(auth.currentUser.uid) }) }
        ]
        );
}
        
const ListAccommodation = ({navigation, userType}) => {
    const [property, setProperty] = useState([])
    const preferenceV = ['Family', 'Male', 'Female']
    const featureAndFacilitiesV = ['24 hours security', 'Car park', 'Low floor', 'Wifi', 'Air-conditioning']
    useEffect(() => {
        const unsubscribe = db.collectionGroup('Accommodation').where('like', 'array-contains-any', [auth.currentUser.uid]).onSnapshot( snapshot => (
            setProperty(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
        return unsubscribe;
    }, [])
    // console.log(property)

    const initiateWhatsApp = (phoneNo, imageUrl) => {

        // Using 60 for Malaysia
        // You can change 60 with your country code
        let url =
          'whatsapp://send?text=' + imageUrl[0] + "\n" + imageUrl[1] + 
          + imageUrl[2] + 
          "\nHii is this rental still available?" +
          '&phone=60' + '01126051588';
        Linking.openURL(url)
          .then((data) => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            alert('Make sure Whatsapp installed on your device');
          });
      };
      const phoneCall = (phoneNo) => {
        Linking.openURL(`tel:${phoneNo}`)
      }
    return (
        <View style={styles.container}>
            {property.map(( {id, 
            data : {
                userUid,
                phoneNo,
                imageUrl,
                propertyTitle,
                price,
                propertyAddress,
                preference,
                propertyRentTypeVal,
                propertyTypeVal,
                furnishVal,
                featureAndFacilities,
                propertyDesc,
                email,
                status,  }}) => (

            <View key={id}>
                <Divider style={{marginTop: 10}}/>

                <View style={styles.listItems}>
                    <View style={styles.image}>
                        <SwiperAlternative data={imageUrl} style={styles.image}/>
                    </View>

                    <View style={styles.buttonContainer} >
                        {status != 'Unverified' ? <Text style={styles.buttonVerification}>VERIFIED</Text> : null }
                    </View>
                    <TouchableOpacity style={{ width: '95%', flex: 1}}
                    // style={StyleSheet.absoluteFillObject}
                    onPress= {() => navigation.navigate("ADetails", {id,                            
                        userUid,
                        phoneNo,
                        imageUrl,
                        propertyTitle,
                        price,
                        propertyAddress,
                        preference,
                        propertyRentTypeVal,
                        propertyTypeVal,
                        furnishVal,
                        featureAndFacilities,
                        featureAndFacilitiesV,
                        propertyDesc,
                        email,
                        status,
                        userType})}>
                        <View style={styles.itemDetails}>
                            <Text>{propertyTitle}</Text>
                            <Text>{propertyRentTypeVal}</Text>
                            <Text>{propertyAddress}</Text>
                            <Text>{propertyTypeVal}</Text>
                            <Text>{furnishVal}</Text>
                            <Text>Price: RM {price} / month</Text>
                            <Text style={{width: '63%'}}>{
                                featureAndFacilitiesV[featureAndFacilities[0]]} {
                                featureAndFacilitiesV[featureAndFacilities[1]]} {
                                featureAndFacilitiesV[featureAndFacilities[2]]} {
                                featureAndFacilitiesV[featureAndFacilities[3]]}
                            </Text>
                            
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', right: "2%", bottom: "2%"}}>
                        <TouchableOpacity>
                            <Icon name="call" type="ionicons" style={{marginRight:10}} onPress={() => phoneCall(phoneNo)} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="whatsapp" type="font-awesome" color= 'green' style={{marginRight:10}} onPress={() => initiateWhatsApp(phoneNo,imageUrl) }/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="minussquareo" type="antdesign" size={22} style={{marginRight:5}} onPress={() => decisionRemoveProperty(id,userUid)}/>
                        </TouchableOpacity>
                    </View>
            </View>
        
    
           
        ))}
            <Divider style={{marginTop: 10, marginBottom: 25}}/>
          
        </View>

        
    )
}

export default ListAccommodation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
    },
    listItems: {
        marginTop: 12,
        flexDirection: 'row',
        paddingHorizontal: 12,
        // flex: 1,
    },
    image: {
        width: 150, 
        height: 150,
        // backgroundColor: 'red',
        // flexDirection: 'row-reverse',
    },
    buttonContainer: {
        position: 'absolute',
        left: 6,
        backgroundColor : '#0096F6',
        marginTop: 10,
    },

    buttonVerification: {
        margin: 5,
        width: 60,
        fontSize: 13,
        minHeight: 18,
        color: 'white'
    },
    itemDetails: {
        // flex: 1,
        // flexDirection: 'row',
        paddingLeft: 10,
        width: '85%',
    },
})
