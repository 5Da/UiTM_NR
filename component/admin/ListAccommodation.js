import { Dimensions, Image, StyleSheet, Text, View, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { db, auth } from '../../firebase';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import firebase from 'firebase/app'

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const ListAccommodation = () => {
  const [property, setProperty] = useState([]);
  const [cnum, setCnum] = useState()
  const [onSelected, setOnSelected] = useState(true)
  const [onSelectedData, setOnSelectedData] = useState([])
//   const [adminData, setAdminData] = useState([])
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = db.collectionGroup('Accommodation').orderBy('status', 'asc').onSnapshot( snapshot => (
        setCnum(snapshot.size),
        setProperty(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        })))
    ))
    return unsubscribe;
    }, [])

    const decisionApproval = (onSelected, userUid) => {
        // console.log(onSelected)
        db.collection('Landlord').doc(userUid).collection('Accommodation').doc(onSelected).update({ 
        status: 'Verified',
        approval : firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid) })
        setModalVisible(!modalVisible)
    }
    const decisionDisapprove = (onSelected, userUid) => {
        // console.log(onSelected)
        db.collection('Landlord').doc(userUid).collection('Accommodation').doc(onSelected).update({ 
        status: 'Unverified',
        approval : firebase.firestore.FieldValue.arrayRemove(auth.currentUser.uid) })
        setModalVisible(!modalVisible)
    }
//     const getAdmin = (approval) => {
//         console.log(approval)
//         const docRef = db.collection('users').doc(approval)
//         docRef.get().then( (doc) => {
//                 // console.log("Document data:", doc.data());
//                 setAdminData(doc.data())
//         })
// } 
  return (
    <View style={{flex:1,}}>
            <Text style={{marginTop: 10, marginBottom: 5, fontWeight: '700'}}>Number of added Accommodation : {cnum}</Text>
            <View style={{flexDirection: 'row', marginLeft: 5, borderRadius: 5, backgroundColor: 'white', marginBottom: 2}}>
                {/* <View style={{
                    width: width*21/100,}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}> Email </Text> 
                </View> */}
                <View style={{width: width*50/100, backgroundColor: 'white', padding: 2}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}> Property Address </Text> 
                </View>
                <View style={{width: width*22/100, backgroundColor: 'white'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}> Owner Phone No </Text> 
                </View>
                <View style={{width: width*26/100, backgroundColor: 'white'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}> Verification </Text> 
                </View>

            </View>

            <ScrollView style={{flex: 1,}}>
                {property.map(({id, data : {email, userUid, propertyAddress, status ,phoneNo, imageUrl, approval} }) =>(
                    <TouchableOpacity 
                    onPress={() => (setOnSelected(id),setModalVisible(!modalVisible),setOnSelectedData({
                        userUid : userUid,
                        email: email,
                        phoneNo: phoneNo,
                        status: status,
                        approval: approval,
                        imageUrl: imageUrl[0],
                        imageUrl2: imageUrl[1],
                        imageUrl3: imageUrl[2],
                        propertyAddress : propertyAddress}))}
                    key={id}
                    style={{flexDirection: 'row', marginLeft:5, padding: 4, backgroundColor: onSelected !== id ? 'white' : '#6E5097', borderRadius: 5, borderBottomWidth: 0.5, marginBottom: 3}}
                    >
                        <ScrollView horizontal={true}>

                            {/* <View style={{ justifyContent : 'center',
                                width: width*21/100}}>
                                <Text> {email} </Text> 
                            </View> */}
                            <View style={{ justifyContent : 'center',
                                width: width*50/100}}>
                                <Text>{propertyAddress} </Text> 
                            </View>
                            <View style={{ justifyContent : 'center',
                                width: width*22/100}}>
                                <Text>{phoneNo} </Text> 
                            </View>
                            {status !== 'Verified' ? 
                            <TouchableOpacity
                            
                            style={{
                              width: width*26/100}}>
                                  <Text style={{color: 'red'}}>{status}</Text>
                                  {/* <Text style={{color: 'red'}}>Disapprove</Text> */}
                                {/* <Image style={{width: 70, height: 70, marginLeft: 10, borderRadius: 10}} source={{uri : photoUrl}}/> */}
                                
                            </TouchableOpacity>
                            : <Text>Verified</Text>}
                        </ScrollView>
             
                    </TouchableOpacity>
                
                ))}

            </ScrollView>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Accommodation</Text>
                            <Text style={styles.modalText}>{onSelectedData.propertyAddress}</Text>
                            <Text style={styles.modalText}>{onSelectedData.email}</Text>
                            <Text style={styles.modalText}>{onSelectedData.phoneNo}</Text>
                            <View style= {{flexDirection: 'row'}}>
                            <Image style={{width: 100, height: 100, borderRadius: 5}} source={{uri :  onSelectedData.imageUrl}}/>
                            <Image style={{width: 100, height: 100, marginLeft: 2, borderRadius: 5}} source={{uri :  onSelectedData.imageUrl2}}/>
                            <Image style={{width: 100, height: 100, marginLeft: 2, borderRadius: 5}} source={{uri :  onSelectedData.imageUrl3}}/>
                            </View>
                            <Text style={styles.modalText}>{onSelectedData.status}</Text>
                            {/* <Text style={styles.modalText}>{onSelectedData.approval}</Text> */}
                            {/* <Text style={styles.modalText}>{adminData.email}</Text> */}
                       
                        
                        {onSelectedData.status === 'Unverified'? 
                        <Button 
                        buttonStyle={{backgroundColor: '#538896', height: 38, marginTop: 6}}
                        onPress={() => decisionApproval(onSelected, onSelectedData.userUid) }
                        title="Approve" />
                        : 
                        <Button 
                        buttonStyle={{backgroundColor: '#538896', height: 38, marginTop: 6}}
                        onPress={() => decisionDisapprove(onSelected, onSelectedData.userUid) }
                        title="Disapprove" />
                    
                        }
                        <Button 
                        buttonStyle={{backgroundColor: '#538896', height: 35, marginTop: 6}}
                        onPress={() => setModalVisible(false) }
                        title="Cancel" />
                        </View>
                    </View>
                </Modal>
        </View>
  );
};

export default ListAccommodation;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        // backgroundColor: 'blue'
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
});
