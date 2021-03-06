import React, { useEffect, useState } from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { db } from '../../firebase'
import SwiperAlternative from '../SwiperAlternative'

const ListAccommodation = ({navigation, userType}) => {
    const [property, setProperty] = useState([])
    const preferenceV = ['Family', 'Male', 'Female']
    const featureAndFacilitiesV = ['24 hours security', 'Car park', 'Low floor', 'Wifi', 'Air-conditioning']
    useEffect(() => {
        const unsubscribe = db.collectionGroup('Accommodation').where('status', '==', 'Verified').onSnapshot( snapshot => (
            setProperty(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
        return unsubscribe;
    }, [])
    // console.log(property)
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
                            <Text>{
                                featureAndFacilitiesV[featureAndFacilities[0]]} {
                                featureAndFacilitiesV[featureAndFacilities[1]]} {
                                featureAndFacilitiesV[featureAndFacilities[2]]} {
                                featureAndFacilitiesV[featureAndFacilities[3]]}
                            </Text>
                            
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        
    
           
        ))}
            <Divider style={{marginTop: 10, marginBottom: 75}}/>
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