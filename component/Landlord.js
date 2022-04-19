import React, { useEffect, useState } from 'react'
import { Alert ,Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, ListItem, Tooltip } from 'react-native-elements'
import { auth, db } from '../firebase'
import AddPropertyModal from './AddPropertyModal'

// const verificationStatus = true

const Landlord = ({navigation, userType}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleOnClose = () => setIsModalVisible(false);
    const [property, setProperty] = useState([])
    const [cnum, setCnum] = useState()
    const [phoneNo, setPhoneNo] = useState()
    const preferenceV = ['Family', 'Male', 'Female']
    const featureAndFacilitiesV = ['24 hours security', 'Car park', 'Low floor', 'Wifi', 'Air-conditioning']
  
    const dbRef = db.collection('users').doc(auth.currentUser.uid)
    dbRef.get().then((doc)=> setPhoneNo(doc.data().phoneNo))

    useEffect(() => {
        const unsubscribe = db.collection('Landlord').doc(auth.currentUser.uid).collection('Accommodation').onSnapshot( snapshot => (
            setCnum(snapshot.size),
            setProperty(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
        return unsubscribe;
    }, [])
    
    const deleteProperty = (id) => {
        if(Platform.OS === 'web'){
            db.collection('Landlord').doc(auth.currentUser.uid).collection('Accommodation').doc(id).delete().then(() => {
                console.log(`Removed item: ${id}`);
            });
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
                db.collection('Landlord').doc(auth.currentUser.uid).collection('Accommodation').doc(id).delete().then(() => {
                    console.log(`Removed item: ${id}`);
                })
                }
            ]
            );
        
    }
    // useEffect(() => {
    //     db.collection('users').doc(auth.currentUser.uid).get().then((doc) => (
    //         setUser({
    //             id: doc.id,
    //             data: doc.data(),}
    //         )))
    // }, [])
    // console.log(auth.currentUser.uid)
    // console.log(auth.currentUser.email)
    // console.log(property)
    // auth.settings.appVerificationDisabledForTesting = true;
    // const phoneNumber = '01126051588'
    // auth.currentUser.updatePhoneNumber( {phoneCredential : phoneNumber} )
    return (
        
            <View>
                <View style={{backgroundColor: '#465362'}}>
                    {cnum < 5 && phoneNo !== '' ?  
                        <TouchableOpacity 
                        style={styles.addProperties}
                        onPress={() => setIsModalVisible(true)}
                        >
                        <Text style={styles.addContent}>ADD NEW PROPERTY</Text>
                        <Image source= {{uri: 'https://img.icons8.com/ios-glyphs/2x/ffffff/add.png'}} style={styles.addIconContent}/>
                        {/* <Icon name='pluscircleo' type='antdesign' style={styles.addIconContent}/> */}
                        <Text></Text>
                        </TouchableOpacity>
                    :
                        <Tooltip
                        width={210}
                        popover={ phoneNo !== '' ? <Text>Only 5 property can be added </Text> : <Text>Update your user profile </Text>}
                        withPointer={false}
                        >
                        <TouchableOpacity 
                        disabled={true}
                        style={styles.addProperties}
                        onPress={() => setIsModalVisible(true)}
                        >
                        <Text style={styles.addContent}>ADD NEW PROPERTY</Text>
                        <Image source= {{uri: 'https://img.icons8.com/ios-glyphs/2x/ffffff/add.png'}} style={styles.addIconContent}/>
                        {/* <Icon name='pluscircleo' type='antdesign' style={styles.addIconContent}/> */}
                        <Text></Text>
                        </TouchableOpacity>
                        </Tooltip>
                     }
                </View>

                {/* Modal page */}
                <AddPropertyModal 
                    visible={isModalVisible}
                    onClose={handleOnClose}
                    phoneNo={phoneNo}
                />
                <ScrollView >
                    {/* <Icon name='pluscircleo' type='antdesign' /> */}
                <View style={styles.textContainer}>
                    <Text style={{fontSize: 30}}> List of Properties </Text>
                </View>

                {/* All list of add rental properties of landlord */}
                    {property.map(( {id, 
            data : {
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
                status,  
            }}) => (
                <View key={id} style={styles.propertyList} >

                    
                    <ListItem.Swipeable 
                        leftContent={ 
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: '25%', backgroundColor: '#CCE3DE'}}>
                            <Button 
                            title="Info"
                            icon={{ name: 'info', color: 'white' }}
                            buttonStyle={{ minHeight: '55%' }}
                            onPress={() => navigation.navigate("ADetails", 
                            {       id,
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
                                    userType, 
                                })}
                            />
                        </View>
                        }
                        rightContent={
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#CCE3DE', top: '25%'}}>
                            <Button 
                                icon={{ name: 'edit', color: 'white' }}
                                buttonStyle={{ minHeight: '55%', backgroundColor: 'blue', marginRight: 7}} />
                            <Button 
                                onPress={() => deleteProperty(id)}
                                icon={{ name: 'delete', color: 'white' }}
                                buttonStyle={{ minHeight: '55%', backgroundColor: 'red', marginLeft: 7}} />
                        
                        </View>
                        }
                        >
                        <ListItem.Content style={styles.listPropertyContainer}>
                        {/* ///////////////////////////////Change dynamic value here hereeeee///////////////////////// */}
                            <TouchableOpacity style={styles.listPropertyContainer} onPress={() => navigation.navigate('ADetails')}>
                                <View style={styles.listItems}>
                                    <Image 
                                        style={styles.image}
                                        source={{uri : imageUrl[0]}}
                                        />
                                    <View style={styles.buttonContainer} >
                                    {status !== 'Unverified' ? <Text style={styles.buttonVerification}>VERIFIED</Text> : null }
                                    </View>
                                    <View style={styles.itemDetails}>
                                        <Text>{propertyTitle}</Text>
                                        <Text>{propertyRentTypeVal}</Text>
                                        <Text>{propertyTypeVal}</Text>
                                        <Text>Preference: {preferenceV[preference[0]]} , {preferenceV[preference[1]]} {preferenceV[preference[2]]}</Text>
                                        <Text>{furnishVal}</Text>
                                        <Text>Price: RM {price} / month</Text>
                                        {/* <Text>Available Room: 3</Text> */}
                                        {/* <Text>{status}</Text> */}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem.Swipeable>
                </View>
                    ))}


            </ScrollView>
            {/* space hack maybe XD        */}
            <View style={{marginBottom: 75}}/> 
        </View>
    )
}

export default Landlord

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
    textContainer: {
        marginTop: 6,
        borderWidth: 0.5,
        alignItems: 'center',
        fontWeight: '800',
        minHeight: 20,
        backgroundColor: 'white'
    },
    propertyList: {
        flex: 1,
        backgroundColor: 'gray', 
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'space-between',
        // alignItems: 'center', kiv
        minHeight: '15%',
    },
    listPropertyContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        // backgroundColor: 'yellow',
    },

    listItems: {
        flexDirection: 'row',
        // backgroundColor: 'purple',
        width: '70%', 
        height: '100%',
    },
    image: {
        borderRadius: 5,
        width: 150, 
        height: 150,
        resizeMode: 'cover',
        // zIndex: 50,
    },
    buttonContainer: {
        position: 'absolute',
        left: -8,
        backgroundColor : '#0096F6',
        marginTop: 10,
        paddingLeft: 3,
    },
    buttonVerification: {
        margin: 3,
        width: 60,
        fontSize: 13,
        minHeight: 18,
        color: 'white',
    },
    itemDetails: {
        // flex: 1,
        paddingLeft: 10,
        width: '75%',
        height: '100%',
    },
})
