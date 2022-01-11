import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, Text, View, Button, Image, StatusBar, TouchableWithoutFeedback, Dimensions,  } from 'react-native'
import * as ImagePick from 'expo-image-picker'
import { BottomSheet } from 'react-native-elements'
import { auth, storage } from '../firebase'

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const ImagePicker = ({isVisible,onClose}) => {
    const [image, setImage] = useState(null)
    
    useEffect(async() => {
        if(Platform.OS !== 'web'){
            const { status } = await ImagePick.requestMediaLibraryPermissionsAsync()
            if( status !== 'granted')
                alert('Permission denied') 
        }
    }, [])

    const PickImage = async () => {
        let result = await ImagePick.launchImageLibraryAsync({
            mediaTypes: ImagePick.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })
        // console.log(result)
        if(!result.cancelled){
            setImage(result.uri)
            // console.log("result" + result.uri)
        }
    }

    const UpdateUserProfileImage = async () => {
        if(auth.currentUser.photoURL !== image){
            const url =  await uploadImage();
            console.log('Url: ' + url)
            // // // Upload Image
            
              auth.currentUser.updateProfile({photoURL : url})
            
        }
        setImage(null)
        return(onClose())
    }

    const uploadImage = async () => {
        let imageUrl = '';
           
                
                if (image != '') {
                        const uploadUri = image
                        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
                        
                        console.log("Image url:" + image)
                        const extension = filename.split('.').pop(); 
                        const name = filename.split('.').slice(0, -1).join('.');
                        filename = name + '.' + extension;
                        console.log('filename' + filename)

                        const storageRef = storage.ref()
                        // const storageRef = storage.child(`photos/${uploadUri}`)
                        const profilePicRef = storageRef.child(`photos/profilePic`)
                        const reference = profilePicRef.put(uploadUri, {contentType: 'image/png'}).then((snapshot) => {
                                console.log('Uploaded a blob or file!');
                              });;
                
                    
                    try {
                    await reference
                    imageUrl = await profilePicRef.getDownloadURL('profilePic');
                    
                    return imageUrl
          
                    } catch (e) {
                        console.log(e);
                        return null
                    }
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
                
                <View style={{position: Platform.OS === 'web' ? 'contain' : 'absolute' , width: width, bottom: 0}}>
   
                    
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

export default ImagePicker

const styles = StyleSheet.create({})
