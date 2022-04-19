import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreen = ( {navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) =>{
            // console.log(authUser)
            if(authUser){
                navigation.replace("Home");
            }
        });
        return () => {
            unsubscribe
        }
    }, []);

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error))
    }

    return (
        //guna keyboardavoidingview, ganti di "view tag" klau x cantik bila nk input sesuatu
        <View behavior="padding" style={styles.container}> 
            <StatusBar style="light"/>
            {/* <Image source={{
                uri: 'https://semakanonline.com/wp-content/uploads/2021/11/21092021uitm.jpg',
            }}
            style={{ width: 300, height:250, resizeMode: 'contain' }}
            /> */}
            <Image source={{
                uri: 'https://nr.uitm.edu.my/images/nr_uitm.jpg',
            }}
            style={{ width: 170, height:160, marginBottom: 25, borderRadius: 10}}
            />
            <Text></Text>
            <View style={styles.inputContainer}>
                <Input 
                style={{ paddingLeft: 10,}}
                placeholder="Email" 
                autoFocus type="Email" 
                value={email}
                autoCompleteType="email"
                onChangeText={(text) =>setEmail(text)}
                />
                <Input 
                style={{ paddingLeft: 10,}}
                placeholder="Password" 
                secureTextEntry={true}
                type="password"
                value={password}
                onChangeText={(text) =>setPassword(text)}
                onSubmitEditing={signIn}
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" type='outline'/>
            <Button onPress={() => navigation.navigate("Register")}  containerStyle={styles.button2} type='outline' title="Register"/>
          
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#16324F',
    },
    button2: {
        width: 200,
        // backgroundColor: '#16324F',
        marginTop: 10,
        // borderRadius: 0,
    },
});