import { Formik } from 'formik'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import * as Yup from 'yup'
import validator from 'validator';
import { db, auth } from '../../firebase';
import firebase from 'firebase/app';
import { ButtonGroup  } from 'react-native-elements';

const RegisterFormSchema = () => Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    name: Yup.string().required().min(2, 'Your name needs to be at least 2 characters'),
    password: Yup.string().required().min(5, 'Your password needs to be at least 5 characters'),
})

const createAccount = ({email, name ,password}, selectedIndex) => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
            console.log("Creating user...");
            console.log(selectedIndex);
            auth.currentUser.updateProfile({displayName : name})
            db.collection("users").doc(user.uid).set({
                email: email,
                name: name,
                role: selectedIndex === 0 ? 'Tenant' : 'Landlord',
                photoUrl: '',
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        })
        .catch(err => {
            const errorCode = err.code
            const errorMessage = err.message
            if(errorCode == 'auth/email-already-in-use')
                alert(errorMessage)
            console.log(err.code);
            console.log(err.message);
        });
};


const RegisterForm = ({navigation}) => {
    const [showPassword, setShowPassword] = useState(false) 
    const [selectedIndex, setSelectedIndex] = useState(0);
   
    return (
        
        <Formik
            initialValues= {{email: '', name : '' , password: ''}}
            onSubmit={(values) => {
                console.log(values)
                createAccount(values, selectedIndex)
            }}
            validationSchema={RegisterFormSchema}
            validateOnMount={true}
        >
          
            

            {({ handleChange, handleBlur, handleSubmit, values, isValid}) => (<>  
            <View style={styles.wrapper}>
                <View style={[
                    styles.inputField,
                    {borderColor: values.name.length >2  
                        ? '#ccc' 
                        : 'red'}    
                    ]}>
                <TextInput 
                    placeholder='Full Name' 
                    placeholderTextColor='gray'
                    autoFocus
                    autoCapitalize='none'
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                />
                </View>
                <View style={[
                    styles.inputField,
                    {borderColor: values.email.length <1 || validator.isEmail(values.email) 
                        ? '#ccc' 
                        : 'red'}    
                    ]}>
                <TextInput 
                    placeholder='Email' 
                    placeholderTextColor='gray'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                />
                </View>
                <View style={[
                    styles.inputField,
                    {
                        borderColor:
                        1> values.password.length || values.password.length > 5
                        ? '#ccc'
                        : 'red'
                    }
                    ]
                }>
                <TextInput 
                    placeholder='Password' 
                    placeholderTextColor='gray' 
                    autoCapitalize='none'
                    secureTextEntry={showPassword? false : true}
                    textContentType='password'
                    autoCorrect={false}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password} 
                />
                <TouchableOpacity 
                    style={{position: 'absolute', right: '1%', bottom: 8, zIndex: 99}}
                    onPress= {() => setShowPassword(!showPassword)}
                >
                
                <Image 
                    style={{width: 22, height: 22}}
                    source={{uri : 'https://img.icons8.com/ios/344/show-password.png'}}/>
                {/* <Text style={{textAlign: 'right', marginBottom: 30, color:'blue'}}>Forgot password?</Text> */}
                </TouchableOpacity>
                </View>
                <Text> Register As: </Text>
                <ButtonGroup
                selectedButtonStyle={{backgroundColor: '#16324F'}}
                buttons={['Tenant', 'Landlord']}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                setSelectedIndex(value)
                }}
                containerStyle={{ marginBottom: 20 }}
                />

                <Pressable 
                    titleSize={20} 
                    style={[styles.button, {backgroundColor: isValid ? '#0096F6' : '#8B0000'}]} 
                    onPress={handleSubmit}
                    disabled={!isValid}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>
                
                <View style={styles.signUpContainer}>
                        <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.goBack('Login')}>
                        <Text style={{ color: '#0096F6'}} >Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>)}
        </Formik>
    )
}

export default RegisterForm

const styles = StyleSheet.create({
    wrapper:{
        marginTop: 50,
    },
    inputField:{
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        borderRadius: 4,
        justifyContent: 'center',
        minHeight: 42,
    },

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    signUpContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },
})
