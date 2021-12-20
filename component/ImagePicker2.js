import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, Text, View, Button, Image, StatusBar, TouchableWithoutFeedback, Dimensions,  } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { BottomSheet } from 'react-native-elements'
import { auth } from '../firebase'

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const ImagePicker2 = ({isVisible,onClose}) => {
    const [image, setImage] = useState(null)
    
    const UpdateUserProfileImage = () => {
        if(auth.currentUser.photoURL !== image){
            auth.currentUser.updateProfile({photoURL : image})
        }
        setImage(null)
        return(onClose())
    }

    useEffect(async() => {
        if(Platform.OS !== 'web'){
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if( status !== 'granted')
                alert('Permission denied') 
        }
    }, [])

    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })
        // console.log(result)
        if(!result.cancelled){
            setImage(result.uri)
            
        }
    }
    return (
        <View >
        

        <BottomSheet
            modalProps={{ onRequestClose: () => { onClose() ; setImage(null) }}}
            isVisible={isVisible}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
        >
            <TouchableWithoutFeedback
                onPress={() => (onClose(), setImage(null))}
            >
                <View style={{flex:1, height: height,}}>
                <View style={{position: 'absolute', width: width, bottom: 0}}>
   
                    
                    {image && 
                    <><Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 150, marginBottom:5, marginLeft: '5%' }} />
                        <View style ={{position: 'absolute', right: '15%', top: '40%'}}>
                        <Button title='Save Image' onPress={UpdateUserProfileImage} style={{borderRadius: 10}}/>
                        </View>

                    </>
                    }
                    
                    <Button title='Choose Image' onPress={PickImage}/>
                    <Button title='Cancel' onPress={() => (onClose(), setImage(null))}/>
                    
            
                </View>
                </View>
            </TouchableWithoutFeedback>

        </BottomSheet>
        
            {/* {image && 
            <><Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 150, marginBottom:5, marginLeft: 5 }} /><Button title='Save Image' onPress={UpdateUserProfileImage} /></>
            }
            <Button title='Choose Image' onPress={PickImage}/>
            <Button title='Cancel' onPress={() => (onClose(), setImage(null))}/> */}
        </View>
    )
}

export default ImagePicker2

const styles = StyleSheet.create({})
