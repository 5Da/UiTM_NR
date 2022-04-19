import React, { useState } from 'react'
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { ButtonGroup, Button } from 'react-native-elements'

const device_width = Dimensions.get('window').width
const device_height = Dimensions.get('window').height

const AddPropertyModal = ({visible, onClose, phoneNo}) => {
    const [selectedImage, setSelectedImage] = useState(['https://picsum.photos/500/500', 'https://picsum.photos/500/400', 'https://picsum.photos/500/300']);
    const [propertyTitle, setPropertyTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [propertyAddress, setPropertyAddress] = useState('');
    const [selectedPreferIndexes, setSelectedPreferIndexes] = useState([0]);
    const [selectedRentTypeIndex, setSelectedRentTypeIndex] = useState(0);
    const [selectedPropertyTypeIndex, setSelectedPropertyTypeIndex] = useState(0);
    const [selectedFurnishTypeIndex, setSelectedFurnishTypeIndex] = useState(0);
    const [selectedFeatureFacilitiesIndexes, setSelectedFeatureFacilitiesIndexes] = useState([]);
    const [propertyDesc, setPropertyDesc] = useState('');
    const rentType = ['Whole Unit', 'Room rental']
    const propertyType = ['Apartment/ Condo ', 'Semi-Detached House', 'Bungalow/ Villa', 'Terrace/ Link House', 'Residential Land']
    const furnish = ['Unfurnished', 'Partial Furnished', 'Fully Furnished']
    // console.log("image[0] :" + selectedImage[0])
    const addItem = () => {
        console.log("Title :" + propertyTitle)
        console.log(" Price" + price)
        console.log(" Address:" + propertyAddress)
        console.log(" Preference:" + selectedPreferIndexes)
        console.log(" Rent type:" +selectedRentTypeIndex)
        console.log(" Property Type" +selectedPropertyTypeIndex)
        console.log(" Furnish: " +selectedFurnishTypeIndex)
        console.log(" Feature, facilities" +selectedFeatureFacilitiesIndexes)
        console.log("Description:  " +propertyDesc)
        db.collection('Landlord').doc(auth.currentUser.uid).collection('Accommodation').add({
            userUid: auth.currentUser.uid,
            email: auth.currentUser.email,
            phoneNo: phoneNo,
            imageUrl: selectedImage,
            propertyTitle: propertyTitle,
            price : price,
            propertyAddress: propertyAddress,
            preference : selectedPreferIndexes,
            propertyRentType : selectedRentTypeIndex,
            propertyType: selectedPropertyTypeIndex,
            furnish : selectedFurnishTypeIndex,
            featureAndFacilities : selectedFeatureFacilitiesIndexes,
            propertyRentTypeVal : rentType[selectedRentTypeIndex],
            propertyTypeVal: propertyType[selectedPropertyTypeIndex],
            furnishVal : furnish[selectedFurnishTypeIndex],
            propertyDesc : propertyDesc,
            status : 'Unverified',
            like : [''],
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => {
            console.log("Add new property");
        });
        resetFilter()
        onClose()
    }
    const resetFilter = () => {
        setPrice(0)
        setPropertyAddress('')
        setSelectedPreferIndexes([])
        setSelectedRentTypeIndex(0)
        setSelectedPropertyTypeIndex(0)
        setSelectedFurnishTypeIndex(0)
        setSelectedFeatureFacilitiesIndexes([])
        setPropertyDesc('')
      }
    return (
        <KeyboardAvoidingView>
                
        
            <Modal
                    // visible={true}
                    //to close modal when user tap the phone back button
                    onRequestClose={() => {
                        onClose()
                      }}
                    visible={visible}
                    animationType= 'fade'
                    presentationStyle= 'formSheet'
                    transparent = {false}
                >
            <ScrollView>
                    {/* modal header */}
                    <View style={{margin: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: '#16324F'}} >
                    <Text style={{fontSize: 20, paddingTop: 6, paddingBottom: 6,  fontWeight: 'bold', color: 'white'}}> ADD NEW PROPERTY </Text>
                    </View>
                    
                    {/* modal content */}
                        <Text> Image 1 || Image 2 || Image 3</Text>
                        <Text> Listing Title:</Text>
                        <View style={{padding: 10}}>
                            <TextInput
                                style={{height: 40, borderWidth: 0.5, borderRadius: 5, paddingLeft: 5}}
                                placeholder="Property Title"
                                onChangeText={newText => setPropertyTitle(newText)}
                            />
                        </View>
                        <Text> Price : RM</Text>
                        <View style={{padding: 10}}>
                            <TextInput
                                style={{height: 40, borderWidth: 0.5, borderRadius: 5, paddingLeft: 5}}
                                placeholder="RM"
                                onChangeText={newText => setPrice(newText)}
                                keyboardType='numeric'
                                maxLength={5}
                            />
                        </View>
                        <Text> Listing Address:</Text>
                        <View style={{padding: 10}}>
                            <TextInput
                                style={{height: 50, borderWidth: 0.5, borderRadius: 5, paddingLeft: 5}}
                                placeholder="Property Address"
                                multiline
                                numberOfLines={2}
                                onChangeText={newText => setPropertyAddress(newText)}
                            />
                        </View>
                        <Text> Choose Preferred tenant:</Text>
                        <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#16324F'}}
                        buttons={['Family', 'Male', 'Female']}
                        selectMultiple
                        selectedIndexes={selectedPreferIndexes}
                        onPress={(value) => {
                        setSelectedPreferIndexes(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                        />
                        <Text> Rent Type: </Text>
                        <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#16324F'}}
                        buttons={rentType}
                        selectedIndex={selectedRentTypeIndex}
                        onPress={(value) => {
                        setSelectedRentTypeIndex(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                        />
                        <Text> Property Type</Text>
                        <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#16324F'}}
                        buttonContainerStyle={{maxHeight: 100, }}
                        textStyle={{fontSize: 10, marginLeft: 2}}
                        buttons={propertyType}
                        selectedIndex={selectedPropertyTypeIndex}
                        onPress={(value) => {
                        setSelectedPropertyTypeIndex(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                        />
                        <Text> Listing Furnishing</Text>
                        <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#16324F'}}
                        buttons={furnish}
                        selectedIndex={selectedFurnishTypeIndex}
                        onPress={(value) => {
                        setSelectedFurnishTypeIndex(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                        />
                        <Text> Listing Features and facilities</Text>
                        <ButtonGroup
                        selectedButtonStyle={{backgroundColor: '#16324F'}}
                        textStyle={{fontSize: 10, marginLeft: 2}}
                        buttons={['24 hours security', 'Car park', 'Low floor', 'Wifi', 'Air-conditioning']}
                        selectMultiple
                        selectedIndexes={selectedFeatureFacilitiesIndexes}
                        onPress={(value) => {
                        setSelectedFeatureFacilitiesIndexes(value);
                        }}
                        containerStyle={{ marginBottom: 20 }}
                        />
                        <Text> Listing Description</Text>
                        <View style={{padding: 8}}>
                            <TextInput
                                style={{height: 80, borderWidth: 0.5, borderRadius: 5, paddingLeft: 5}}
                                placeholder="Add Descriptions"
                                multiline
                                numberOfLines={5}
                                onChangeText={newText => setPropertyDesc(newText)}
                            />
                        </View>
                        <Text> Location</Text>



                    {/* confirmation modal     */}
                    <View style={{flexDirection: 'row-reverse', marginHorizontal: 12, marginBottom: 10}}>

                        <Button 
                            buttonStyle={{backgroundColor: '#16324F', height: 35}}
                            onPress={addItem}
                            title="Save" />
                        <Button 
                            buttonStyle={{backgroundColor: '#16324F', height: 35, marginRight: 6}}
                            onPress={() => onClose()}
                            title="Cancel" />
                        
                    </View>
                </ScrollView>                
            </Modal>

        </KeyboardAvoidingView>
    )
}

export default AddPropertyModal

const styles = StyleSheet.create({})
