import React , { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import PieChartTest from './PieChartTest'
import GraphTest from './GraphTest'
import LineChartTest from './LineChartTest'
import ProgressChartTest from './ProgressChartTest'
import CardForUsers from './CardForUsers'
import { db } from '../../../firebase'
const Dashboard = () => {
    const [cnum, setCnum] = useState(0)
    const [cnum2, setCnum2] = useState(0)
    const [cnum3, setCnum3] = useState(0)

    const [verifiedNum, setVerifiedNum] = useState(0)
    const [registeredAccNum, setRegisteredAccNum] = useState(0)

    useEffect(() => {
        const unsubscribe = db.collection('users').where('role' ,'==' ,'Tenant').onSnapshot( snapshot => 
            setCnum(snapshot.size),
        )
        const unsubscribe2 = db.collection('users').where('role' ,'==' ,'Landlord').onSnapshot( snapshot => 
            setCnum2(snapshot.size),
        )
        return unsubscribe + unsubscribe2;
    }, [])
   
    useEffect(() => {
        const unsubscribe3 = db.collection('users').where('role' ,'==' ,'Admin').onSnapshot( snapshot => 
            setCnum3(snapshot.size),
        )
        return unsubscribe3;
    }, [])
    useEffect(() => {
        const unsubscribe3 = db.collectionGroup('Accommodation').where('status' ,'==' ,'Verified').onSnapshot( snapshot => 
            setVerifiedNum(snapshot.size),
        )
        return unsubscribe3;
    }, [])
    useEffect(() => {
        const unsubscribe3 = db.collectionGroup('Accommodation').onSnapshot( snapshot => 
            setRegisteredAccNum(snapshot.size),
        )
        return unsubscribe3;
    }, [])
    // console.log('Tenant' + cnum)
    // console.log('Landlord' + cnum2)
    // console.log('Admin' + cnum3)
    return (
            <ScrollView >
                <View style={{alignItems: 'center'}}>
                    <CardForUsers tenantC={cnum} landlordC={cnum2} adminC={cnum3} registeredAccNum={registeredAccNum} verifiedNum={verifiedNum}/>
                    
                    <Text style={{fontWeight: 'bold', marginTop: 15}}>Total Number Of Users:</Text>
                    <PieChartTest tenantC={cnum} landlordC={cnum2} adminC={cnum3}/>
                    
                    <Text style={{fontWeight: 'bold', marginTop: 20}}>Number of Newly Register Users:</Text>
                    <GraphTest />

                    <LineChartTest/>
                    <Text style={{fontWeight: 'bold'}}>Language Used In Developing the App:</Text>
                    
                    <ProgressChartTest/>
                
                </View>
            </ScrollView>
   
    )
}

export default Dashboard

const styles = StyleSheet.create({})
