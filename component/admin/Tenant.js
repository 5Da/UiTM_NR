import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { db } from '../../firebase'
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const Tenant = () => {
    const [user, setUser] = useState([])
    const [cnum, setCnum] = useState()
    const [onSelected, setOnSelected] = useState(true)
    useEffect(() => {
        const unsubscribe = db.collection('users').where('role' ,'==' ,'Tenant').onSnapshot( snapshot => (
            setCnum(snapshot.size),
            setUser(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
                
        ))
        return unsubscribe;
    }, [])
    return (
        <View style={{flex:1,}}>
            <Text style={{marginTop: 10, marginBottom: 5, fontWeight: '700'}}>Number of registered Tenant : {cnum}</Text>
            <View style={{flexDirection: 'row', marginLeft: 5, borderRadius: 5, backgroundColor: 'white', marginBottom: 2}}>
                <View style={{
                    width: width*21/100,}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}> Email </Text> 
                </View>
                <View style={{width: width*33/100, backgroundColor: 'white', padding: 2}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>Name </Text> 
                </View>
                <View style={{width: width*23/100, backgroundColor: 'white'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}> Phone No </Text> 
                </View>
                <View style={{width: width*12/100, backgroundColor: 'white'}}>
                    <Text style={{fontSize: 15, fontWeight: '700'}}> Image </Text> 
                </View>

            </View>

            <ScrollView style={{flex: 1,}}>
                {user.map(({id, data : {email, name, phoneNo, photoUrl} }) =>(
                    <TouchableOpacity 
                    onPress={() => setOnSelected(id)}
                    key={id}
                    style={{flexDirection: 'row', marginLeft:5, padding: 4, backgroundColor: onSelected !== id ? 'white' : '#6E5097', borderRadius: 5, borderBottomWidth: 0.5, marginBottom: 3}}
                    >
                        <ScrollView horizontal={true}>

                            <View style={{ justifyContent : 'center',
                                width: width*21/100}}>
                                <Text> {email} </Text> 
                            </View>
                            <View style={{ justifyContent : 'center',
                                width: width*33/100}}>
                                <Text>{name} </Text> 
                            </View>
                            <View style={{ justifyContent : 'center',
                                width: width*23/100}}>
                                <Text>{phoneNo} </Text> 
                            </View>
                            <View style={{
                                width: width*30/100}}>
                                <Image style={{width: 70, height: 70, marginLeft: 10, borderRadius: 10}} source={{uri : photoUrl}}/>
                                
                            </View>
                        </ScrollView>
             
                    </TouchableOpacity>
                
                ))}

            </ScrollView>
        </View>
    )
}

export default Tenant

const styles = StyleSheet.create({})
