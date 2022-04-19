import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import * as DocumentPicker from 'expo-document-picker';
import { auth, db, storage } from '../firebase'
import firebase from 'firebase/app'
import { Button, Tooltip} from 'react-native-elements';
import { ToastAndroid } from 'react-native';

const createTwoButtonAlert = (filePick,singleFile,filePick2,singleFile2, ic, setModalVisible ) =>
    Alert.alert(
      'Confirm Selection ',
       ` ${filePick} \n ${filePick2}` ,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {   
            text: "OK", 
            onPress: () => uploadTenancyAgreementInStorage(filePick,singleFile,filePick2,singleFile2, ic, setModalVisible ) && alert('File Uploaded')
        }
      ]
    );

    const createTenancyAgreementInFirestore = async (fileUrl,fileUrl2, filePick, filePick2, ic, setModalVisible) => {
        
        await db.collection('Landlord').doc(auth.currentUser.uid).collection('TenancyAgreement').add({
            landlord: auth.currentUser.displayName,
            phoneNo: auth.currentUser.phoneNumber,
            photoUrl: auth.currentUser.photoURL,
            ic: ic,
            email: auth.currentUser.email,
            fileUrl: [fileUrl, fileUrl2],
            fileName: [filePick, filePick2],
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(() => {
            if(Platform.OS === 'android')
              ToastAndroid.show('Saved', ToastAndroid.SHORT);
            console.log('Completed')
            setModalVisible(false)
        })
        
    } 

    const uploadTenancyAgreementInStorage = async(filePick, singleFile, filePick2, singleFile2, ic, setModalVisible ) => {
        const reference = storage.ref().child(
            `/rentalAgreement/${auth.currentUser.uid}/${filePick}`,
          );
          const fileUpload = await fetch(singleFile)
          console.log(fileUpload);
          const blob = await fileUpload.blob()
          await reference.put(blob).then(() => {
            console.log('File Uploaded');
          });
          const fileUrl = await reference.getDownloadURL();
        const reference2 = storage.ref().child(
            `/rentalAgreement/${auth.currentUser.uid}/${filePick2}`,
          );
          const fileUpload2 = await fetch(singleFile2)
        //   console.log(fileUpload2);
          const blob2 = await fileUpload2.blob()
          await reference2.put(blob2).then(() => {
            console.log('File Uploaded');
          });
          const fileUrl2 = await reference2.getDownloadURL();
          createTenancyAgreementInFirestore(fileUrl,fileUrl2, filePick, filePick2, ic, setModalVisible)
        //   console.log(fileUrl2)
    }
    // const uploadTenancyAgreementInStorage = async(name,uri) => {
    //     const reference = storage.ref().child(
    //         `/rentalAgreement/${auth.currentUser.uid}/${name}`,
    //       );
    //       const fileUpload = await fetch(uri)
    //       console.log(fileUpload);
    //       const blob = await fileUpload.blob()
    //       await reference.put(blob).then(() => {
    //         console.log('File Uploaded');
    //       });
    //       const fileUrl = await reference.getDownloadURL();
    //       createTenancyAgreementInFirestore(fileUrl)
    //       console.log(fileUrl)
    // }
const DocumentPick2 = ({setModalVisible}) => {
    const [singleFile, setSingleFile] = useState(null);
    const [singleFile2, setSingleFile2] = useState(null);
    const [filePick, setFilePick] = useState('');
    const [filePick2, setFilePick2] = useState('');
    const [checkSuccess1, setCheckSuccess1] = useState('');
    const [checkSuccess2, setCheckSuccess2] = useState('');
    const [ic, setIc] = useState('');
    db.collection('users').doc(auth.currentUser.uid).get().then((doc)=> setIc(doc.data().ic))
    const pickDocument = async (setSingleFile3, setFilePick3, setCheckSuccess3) => {
        // only lets the right doc format to be slected
	    let result = await DocumentPicker.getDocumentAsync({
           type: [
                'image/*', 
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/pdf',
                'application/msword',
            ]
      });
        console.log(auth.currentUser.displayName);
        console.log(result);
        console.log(result.type);
        // console.log(result.mimeType);
        console.log(result.name.toString());
        setCheckSuccess3(result.type)
        setSingleFile3(result.uri)
        setFilePick3(result.name)
	}
    const confirmSaveDoc = (filePick,singleFile,filePick2,singleFile2, ic,setModalVisible ) => {
        if(Platform.OS === 'web'){

            let text = `Confirm File Selected \n ${filePick} \n ${filePick2}`;
            if (confirm(text) == true) {
                text = "You pressed OK!";
                uploadTenancyAgreementInStorage(filePick,singleFile,filePick2,singleFile2, ic, setModalVisible )
                alert('File uploaded')
              } else {
                  text = "You canceled!";
                  console.log(text)
              }
          }else{
              createTwoButtonAlert(filePick,singleFile,filePick2,singleFile2, ic, setModalVisible )
          }
    }
    return (
        <View>
            <Text>Select Tenancy Aggreement</Text>
            <Text>{filePick}</Text>
            <TouchableOpacity onPress={() => (pickDocument(setSingleFile,setFilePick, setCheckSuccess1), setFilePick(true))}>
                <Text style={{fontSize: 22}}>Pick File</Text>
            </TouchableOpacity>
            <Text>Select Tenant IC Pic / Student ID Pic</Text>
            <Text>{filePick2}</Text>
            <TouchableOpacity onPress={() => (pickDocument(setSingleFile2,setFilePick2, setCheckSuccess2), setFilePick2(true))}>
                <Text style={{fontSize: 22}}>Pick File / Pic</Text>
            </TouchableOpacity>
            <Tooltip
              popover={<Text>Select both file to complete submission</Text>}
              withPointer={false}
            >
                <View>

            <Button 
                  disabled={ filePick !== '' && filePick2 !== '' && checkSuccess1 === 'success' && checkSuccess2 === 'success' ? false : true}
                  buttonStyle={{backgroundColor: '#16324F', height: 35}}
                  onPress={() => confirmSaveDoc(filePick, singleFile, filePick2, singleFile2, ic, setModalVisible) }
                  title="Submit" />
                  </View>
            </Tooltip>
            <Button 
                  buttonStyle={{backgroundColor: '#538896', height: 35, marginTop: 6}}
                  onPress={() => setModalVisible(false) }
                  title="Cancel" />
        </View>
    )
}

export default DocumentPick2

const styles = StyleSheet.create({})
