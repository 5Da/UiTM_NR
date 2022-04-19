import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, View, Button, Image, TouchableWithoutFeedback, Dimensions,  } from 'react-native'
import * as ImagePick from 'expo-image-picker'
import { BottomSheet } from 'react-native-elements'
import { auth, db, storage } from '../firebase'

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const ImagePicker = ({isVisible,onClose, setLatestProfilePic }) => {
    const [image, setImage] = useState(null)
    // const [changeImage, setChangeImage] = useState(latestProfilePic)

    useEffect(async() => {
        if(Platform.OS !== 'web'){
            const { status } = await ImagePick.requestMediaLibraryPermissionsAsync()
            if( status !== 'granted')
                alert('Permission denied') 
        }
    }, [])

    const PickImage = async () => {
        let result = await ImagePick.launchImageLibraryAsync({
            mediaTypes: ImagePick.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })
        
        // console.log(result)
        if(!result.cancelled){
            // check whther type is image or video on web platform 
            const imageType = result.uri.substring(5,10)

            if(imageType === 'image' || Platform.OS !== 'web'){
                setImage(result.uri)
                
                // console.log("result" + result.uri)
            }else{
                alert('Please choose an image only')
            }
        }
    }
    //check whether type in image or video in android or ios phone
    // console.log("type" + result.type)

    // let fileName = result.uri.substring(result.uri.lastIndexOf('/') + 1);    
    // const extension = result.uri.split('.').pop(); 
    // const name = result.uri.split('.').slice(0, -1).join('.');
    // fileName = name + '.' + extension;
    // console.log("File Name" + fileName)
    // console.log("uri" + result.uri)
    // console.log("name" + name)
    // console.log("extension" + extension)

    // console.log("imageType" + imageType)
    // console.log(type)

    const UpdateUserProfileImage = async () => {
        if(auth.currentUser.photoURL !== image){
            const url =  await uploadImage();
            // console.log('Url: ' + url)
            // // // Upload Image
            auth.currentUser.updateProfile({photoURL : url})
            db.collection('users').doc(auth.currentUser.uid).update({photoUrl: url})
            setLatestProfilePic(url)
        }
        setImage(null)
        return(onClose())
    }
    
    const uploadImage = async () => {
        let imageUrl = '';
           
                
                if (image != '') {
                        const uploadUri = await fetch(image)
                        const blob = await uploadUri.blob()
                        let filename = image.substring(image.lastIndexOf('/') + 1);
                        
                        // console.log(uploadUri.url)
                        // console.log("Image url:" + image)
                        const extension = filename.split('.').pop(); 
                        // const name = filename.split('.').slice(0, -1).join('.');
                        // filename = name + '.' + extension;
                        // console.log('filename' + filename)

                        // store image in firebase storage or create main/root storage reference
                        const storageRef = storage.ref()

                        // sample on how to store image in firebase storage
                        // const storageRef = storage.child(`photos/${uploadUri}`)

                        // change directory for different user profile image
                        const profilePicRef = storageRef.child(`photos/${auth.currentUser.uid}/profilePic`)
                        // const profilePicRef = storageRef.child(`photos/${auth.currentUser.uid}/profilePic.${extension}`)
                        
                        // get metadata for the image
                        // const metadataName = profilePicRef.getMetadata()
                        // console.log(metadataName);
                        // console.log("root "+profilePicRef.root);
                        // console.log(profilePicRef.fullPath);

                        const reference = profilePicRef.put(blob, )
                        // const reference = profilePicRef.put(blob).then((snapshot) => {
                        //         console.log('Uploaded a blob or file!');
                        //       });;
                
                    
                    try {
                    await reference
                    imageUrl = await profilePicRef.getDownloadURL(`${auth.currentUser.uid}/profilePic`);
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
                        <Button title='Save Image' onPress={() => (UpdateUserProfileImage())} style={{borderRadius: 10}}/>
                        </View>

                    </>
                    }
                    <Button title='Choose Image' onPress={PickImage}/>
                    <Button title='Cancel' onPress={() => (onClose(), setImage(null))}/>
                    
                </View>
                </View>
            </TouchableWithoutFeedback>
        </BottomSheet>
        </View>
    )
}

export default ImagePicker

const styles = StyleSheet.create({})
