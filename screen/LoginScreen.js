import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreen = ( {navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) =>{
            
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
            style={{ width: 150, height:150, marginBottom: 25}}
            />
            <Text></Text>
            <View style={styles.inputContainer}>
                <Input 
                style={{ paddingLeft: 10,}}
                placeholder="Email" 
                autoFocus type="Email" 
                value={email}
                onChangeText={(text) =>setEmail(text)}
                />
                <Input 
                style={{ paddingLeft: 10,}}
                placeholder="Password" 
                secureTextEntry 
                type="password"
                value={password}
                onChangeText={(text) =>setPassword(text)}
                onSubmitEditing={signIn}
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
            <Button onPress={() => navigation.navigate("Register")}  containerStyle={styles.button} type="outline" title="Register"/>
          
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
    },
});