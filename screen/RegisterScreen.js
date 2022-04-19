import React from 'react'
import { StyleSheet, Image , View } from 'react-native'
import RegisterForm from '../component/registerForm/Register'

const RegisterScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}} >
            <View style ={styles.container}>
            <Image 
                source={{ uri: 'https://nr.uitm.edu.my/images/nr_uitm.jpg'}}
                style={{ width: 170, height:160, borderRadius: 10}}
            />
            </View>
            <RegisterForm navigation={navigation}/>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        marginTop: 40,
    },

})
