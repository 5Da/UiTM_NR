import React from 'react'
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { db, auth } from '../firebase'
import firebase from 'firebase'

const device_width = Dimensions.get('window').width
const device_height = Dimensions.get('window').height

const AddPropertyModal = ({visible, onClose}) => {

    const addItem = () => {
        // db.collection('test').add({
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        //     email: auth.currentUser.email,
        // })
        onClose()
    }
    return (
        <View>
         <Modal
                    visible={visible}
                    animationType= 'fade'
                    presentationStyle= 'formSheet'
                    transparent = {false}
                >
                    <View style={{margin: 4, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}} >
                    <Text style={{fontSize: 20, paddingTop: 6, paddingBottom: 6,  fontWeight: 'bold'}}> ADD NEW PROPERTY </Text>
                    </View>
                    
                    <View style={{flexDirection: 'row', marginHorizontal: 12}}>

                        <TouchableOpacity 
                            style={{marginHorizontal: 12}}
                            onPress={() => onClose()}
                            >
                        <Text>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                           
                            onPress={addItem}
                            >
                        <Text>Save</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>


        </View>
    )
}

export default AddPropertyModal

const styles = StyleSheet.create({})
