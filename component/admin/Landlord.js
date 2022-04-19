import React, { useEffect, useState } from 'react'
import { Dimensions, Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import DocumentPick2 from '../DocumentPick2'
import { db, auth } from '../../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const Landlord = () => {
    const [user, setUser] = useState([])
    const [tenancyAgreement, setTenancyAgreement] = useState([])
    const [cnum, setCnum] = useState()
    const [tcnum, setTCnum] = useState()
    const [onSelected, setOnSelected] = useState(true)
    const [onSelected2, setOnSelected2] = useState(true)
    useEffect(() => {
        const unsubscribe = db.collection('users').where('role' ,'==' ,'Landlord').onSnapshot( snapshot => (
            setCnum(snapshot.size),
            setUser(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
                
        ))
        return unsubscribe;
    }, [])
    useEffect(() => {
        const unsubscribe = db.collectionGroup('TenancyAgreement').onSnapshot( snapshot => (
            setTCnum(snapshot.size),
            setTenancyAgreement(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
                
        ))
        return unsubscribe;
    }, [])
    return (
        <View style={{flex:1}}>
            <Text style={{fontWeight: '700'}}> Number of registered Landlord : {cnum}</Text>
            <View style={{flexDirection: 'row', marginLeft: 5, borderRadius: 5, backgroundColor: 'white', marginBottom: 2}}>
                <ScrollView horizontal={true}>
          
                    <View style={{
                        width: width*21/100,}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}> Email </Text> 
                    </View>
                    <View style={{width: width*32/100, backgroundColor: 'white', padding: 2}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}>Name </Text> 
                    </View>
                    <View style={{width: width*23/100, backgroundColor: 'white'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}>Phone No </Text> 
                    </View>
                    <View style={{width: width*20/100, backgroundColor: 'white'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}> Landlord IC </Text> 
                    </View>
                    <View style={{width: width*14/100, backgroundColor: 'white'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}> Image </Text> 
                    </View>
                </ScrollView>        
            </View>

            <ScrollView style={{flex: 0.8,}}>
                {user.map(({id, data : {email, name, phoneNo, photoUrl, ic} }) =>(
                    <TouchableOpacity 
                    onPress={() => setOnSelected(id)}
                    key={id}
                    style={{flexDirection: 'row', marginLeft:5, padding: 4, backgroundColor: onSelected !== id ? 'white' : '#6E5097', borderRadius: 5, borderBottomWidth: 0.5, marginBottom: 3}}
                    >
                        <ScrollView horizontal={true}>

                            <View style={{ justifyContent : 'center',
                                width: width*21/100}}>
                                <Text>{email} </Text> 
                            </View>
                            <View style={{ justifyContent : 'center',
                                width: width*32/100}}>
                                <Text>{name} </Text> 
                            </View>
                            <View style={{ justifyContent : 'center',
                                width: width*23/100}}>
                                <Text>{phoneNo} </Text> 
                            </View>
                            <View style={{ justifyContent : 'center',
                                width: width*25/100}}>
                                <Text>{ic} </Text> 
                            </View>
                            <View style={{
                                width: width*20/100}}>
                                <Image style={{width: 70, height: 70, marginLeft: 10, borderRadius: 10}} source={{uri : photoUrl}}/>
                                
                            </View>
                        </ScrollView>
             
                    </TouchableOpacity>
                
                ))}

            </ScrollView>

            <Text style={{fontWeight: '700', marginTop: 10}}> Number of Tenancy Agreement  : {tcnum}</Text>
            <View style={{flexDirection: 'row', marginLeft: 5, borderRadius: 5, backgroundColor: 'white', marginBottom: 2}}>
                <ScrollView horizontal={true}>
          
                    <View style={{
                        width: width*15/100,}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}> Email </Text> 
                    </View>
                    <View style={{width: width*20/100, backgroundColor: 'white', padding: 2}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}>Name </Text> 
                    </View>
                    <View style={{width: width*18/100, backgroundColor: 'white'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}> Landlord IC </Text> 
                    </View>
                    <View style={{width: width*18/100, backgroundColor: 'white'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}>Tenancy Agreement </Text> 
                    </View>
                    <View style={{width: width*20/100, backgroundColor: 'white'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}>Tenant IC Doc/Image </Text> 
                    </View>
                    {/* <View style={{width: width*14/100, backgroundColor: 'white'}}>
                        <Text style={{fontSize: 15, fontWeight: '700'}}> Image </Text> 
                    </View> */}
                </ScrollView>        
            </View>

            <ScrollView style={{flex: 1,}}>
                {tenancyAgreement.map(({id, data : {email, fileUrl, fileName, landlord, ic,photoUrl,} }) =>(
                    <TouchableOpacity 
                    onPress={() => setOnSelected2(id)}
                    key={id}
                    style={{flexDirection: 'row', marginLeft:5, padding: 4, backgroundColor: onSelected2 !== id ? 'white' : '#6E5097', borderRadius: 5, borderBottomWidth: 0.5, marginBottom: 3}}
                    >
                         <ScrollView horizontal={true}>
                            <View style={{ justifyContent : 'center',
                                width: width*15/100}}>
                                <Text>{email} </Text> 
                            </View>
                            <View style={{ justifyContent : 'center',
                                width: width*20/100}}>
                                <Text>{landlord} </Text> 
                            </View>
                            <View style={{ justifyContent : 'center',
                                width: width*18/100}}>
                                <Text>{ic} </Text> 
                            </View>
                            <View 
                                style={{ justifyContent : 'center',
                                width: width*18/100}}
                            >
                                    <Text onPress={() => Linking.openURL(fileUrl[0])}>{fileName[0]}</Text>
                            
                            </View>
                            
                            <View 
                                style={{ justifyContent : 'center', marginLeft: 8,
                                width: width*20/100}}
                            >

                                <TouchableOpacity onPress={() => Linking.openURL(fileUrl[1])}>
                                    {/* to make sure image is not display if landlord choose to save document instead of picture for tenant ic */}
                                    {fileName[1].substring(fileName[1].lastIndexOf('.')+ 1) === 'pdf' || fileName[1].substring(fileName[1].lastIndexOf('.')+ 1) === 'docs' || fileName[1].substring(fileName[1].lastIndexOf('.')+ 1) === 'docx' ? null :
                                    <Image 
                                    style={{width: 70, height: 70, marginLeft: 10, borderRadius: 10}} source={{uri : fileUrl[1]}}/>
                                    }
                                <Text>{fileName[1]}</Text>
                                </TouchableOpacity>

                            </View>
                            {/* <View style={{ justifyContent : 'center', 
                                width: width*14/100}}>
                                <Text Click here to download2</Text>
                                <TouchableOpacity >
              
                                <Image 
                                style={{width: 70, height: 70, marginLeft: 10, borderRadius: 10}} source={{uri : photoUrl}}/>
                            
                                </TouchableOpacity>
                            </View> */}
                            
                         </ScrollView>
             
                     </TouchableOpacity>
                
                ))}

            </ScrollView>
            {/* <DocumentPick2/> */}
        </View>
    )
}

export default Landlord

const styles = StyleSheet.create({})
