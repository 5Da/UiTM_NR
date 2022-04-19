import React from 'react'
import { Image, Linking, Platform, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import { Divider, Button, Icon} from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import Swiper from '../component/Swiper';
import { auth, db } from '../firebase';
import firebase from 'firebase/app'
//firebase import perlu dibaiki

const savedProperty = (route) => {
    // console.log(route.params.id)
    // console.log(auth.currentUser.email)
    db.collection('Landlord').doc(route.params.userUid).collection('Accommodation').doc(route.params.id).update({ like : firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid) })
    if(Platform.OS === 'android')
      ToastAndroid.show('Saved', ToastAndroid.SHORT);
    else
      alert('Saved')
}



const ADetailsScreen = ({route, ...props}) => {
    // console.log(route)
    // console.log(props)


    const initiateWhatsApp = (route) => {

        // Using 60 for Malaysia
        // You can change 60 with your country code
        let url =
          'whatsapp://send?text=' + route.params.imageUrl[0] + "\n" + route.params.imageUrl[1] + 
          + route.params.imageUrl[2] + 
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
      const phoneCall = (route) => {
        Linking.openURL(`tel:${route.params.phoneNo}`)
      }
    // console.log(route.params.id)
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView key={route.params.id}>
            <Swiper data={route.params.imageUrl}/>    
            <View style={styles.buttonContainer}>
                {/* {route.params.status || verificationStatus != 'false' ? <Button title='Verified' style={styles.buttonVerification}/> : null } */}
                { route.params.status !== 'Unverified' ? <Button title='Verified' style={styles.buttonVerification}/> : null }
            </View>
            {/* <Text onPress={() => props.navigation.goBack()}>Go back</Text> */}
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold',  fontSize: 25}}>RM{route.params.price} </Text>
                {/* logik untuk image nk kena diperbetulkan */}
                {route.params.preference[0]=== 0 || route.params.preference[1]=== 0 || route.params.preference[2]=== 0 ?
                <Image
                style={styles.icon} 
                source={{uri: 'https://img.icons8.com/color/2x/male-female-user-group.png'}}
                /> : null
                }
                {route.params.preference[0]=== 1 || route.params.preference[1]=== 1 || route.params.preference[2]=== 1 ?
                <Image
                style={styles.icon} 
                source={{uri: 'https://img.icons8.com/color/344/person-male.png'}}
                /> : null
                }
                {route.params.preference[0]=== 2 || route.params.preference[1]=== 2 || route.params.preference[2]=== 2 ?
                <Image
                style={styles.icon} 
                source={{uri: 'https://img.icons8.com/color/344/person-female.png'}}
                /> : null
            }
                <Divider />
            </View>
            <Divider />

            {/* {route.params.imageUrl[0] + route.params.imageUrl[1] + route.params.imageUrl[2]} */}
            <View style={styles.contentContainer}>
                <Text>Property Title</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{route.params.propertyTitle}</Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Rental Type: </Text>
                <Text>{route.params.propertyRentTypeVal}</Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Property Type: </Text>
                <Text>{route.params.propertyTypeVal}</Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Furnishing: </Text>
                <Text>{route.params.furnishVal}</Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Address: </Text>
                <Text>{route.params.propertyAddress}</Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                {/* <Text>{route.params.featureAndFacilitiesV[0]}</Text> */}
                <Text>Listing Features & Faciilities :</Text>
                {route.params.featureAndFacilitiesV[route.params.featureAndFacilities[0]]?
                <Text>{route.params.featureAndFacilitiesV[route.params.featureAndFacilities[0]]}</Text> : null}
                {route.params.featureAndFacilitiesV[route.params.featureAndFacilities[1]]?
                <Text>{route.params.featureAndFacilitiesV[route.params.featureAndFacilities[1]]}</Text> : null}
                {route.params.featureAndFacilitiesV[route.params.featureAndFacilities[2]]?
                <Text>{route.params.featureAndFacilitiesV[route.params.featureAndFacilities[2]]}</Text> : null}
                {route.params.featureAndFacilitiesV[route.params.featureAndFacilities[3]]?
                <Text>{route.params.featureAndFacilitiesV[route.params.featureAndFacilities[3]]}</Text> : null}
                
                
            </View>
            <Divider />

            {/* <View style={styles.contentContainer}>
               
                <Text>-Swimming </Text>
                <Text>-Security </Text>
                <Text>-Gym </Text>
                <Text>-Playground </Text>
            </View>
            <Divider /> */}

            <View style={styles.contentContainer}>
                <Text>Descriptions: </Text>
                <Text>{route.params.propertyDesc}</Text>
                
            </View>
            <Divider />
            
            <Divider style={{marginBottom: route.params.userType !== 'Landlord'? 70 : 20}} />

        </ScrollView>
        {route.params.userType !== 'Landlord'? 
        <View style={styles.bottomWrapper}>
            <Divider width={1} orientation= 'vertical' style={{marginBottom: 10}}/>
            <View style={styles.methodChoosen}>    
                <Text />
                <Text />
                <View style={{borderRadius: 10, overflow: 'hidden'}}>
                <Button 
                    onPress={() => phoneCall(route)}
                    icon={
                        <Icon name="call" type="ionsicon" size={24} color="black"/>
                    }
                    title='Call' />
                </View>

                <View style={{borderRadius: 10, overflow: 'hidden'}}>
                <Button  
                    onPress={() => initiateWhatsApp(route)}
                    icon={
                        <FontAwesome name="whatsapp" size={24} color="black" />
                    }
                    title='WhatsApp' />
                </View>

                <View style={{borderRadius: 10, overflow: 'hidden'}}>
                <Button 
                    onPress={() => savedProperty(route)}
                    icon={
                        <Icon name="add-circle-outline" type="ionsicon" size={24} color="black"/>
                    }
                    title='Saved' 
                />
                </View>
                <Text />
                
            </View>
        </View>
        : null}
        </SafeAreaView>
    )
}

export default ADetailsScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft:10, 
        paddingTop: 10,
    },
    image: { 
        width: '100%',
        height: 250,

    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        position: 'absolute',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        // width: 25,
        // height: 18,
        // left: '5%',
        right: '2%',
        top: 230,
    },

    buttonVerification: {
        zIndex: 999,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 4,
    },
    contentContainer: {
        paddingLeft: 10,
        marginTop: 12,
    },
    bold: {
        fontWeight: 'bold',
    },
    bottomWrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
    },
    methodChoosen: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        minHeight: 50,
        backgroundColor: 'white'
    },
})
