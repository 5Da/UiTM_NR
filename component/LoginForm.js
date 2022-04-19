import { Formik } from 'formik'
import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native'
import * as Yup from 'yup'
import validator from 'validator';


const LoginFromSchema = () => Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(5, 'Your password needs to be at least 8 characters'),
})


const LoginForm = () => {
    return (
        <Formik
            initialValues= {{email: '', password: ''}}
            onSubmit={(values) => {
                console.log(values)
                console.log('Your Registeration was submitted successfully')
            }}
            validationSchema={LoginFromSchema}
            validateOnMount={true}
        >
          
            

            {({ handleChange, handleBlur, handleSubmit, values, isValid}) => (<>  
            <View style={styles.wrapper}>
                <View style={[
                    styles.inputField,
                    {borderColor: values.email.length <1 || validator.isEmail(values.email) 
                        ? '#ccc' 
                        : 'red'}    
                    ]}>
                <TextInput 
                    placeholder='Phone Number, Username or Email' 
                    placeholderTextColor='gray'
                    keyboardType='email-address'
                    autoFocus
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
                    secureTextEntry
                    // secureTextEntry={Platform.OS === 'web' ? false : true}
                    textContentType='password'
                    autoCorrect={false}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password} 
                />
                </View>
                <Text style={{textAlign: 'right', marginBottom: 30, color:'blue'}}>Forgot password?</Text>

                <Pressable 
                    titleSize={20} 
                    style={[styles.button, {backgroundColor: isValid ? '#0096F6' : '#8B0000'}]} 
                    onPress={handleSubmit}
                    disabled={!isValid}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
                
                <View style={styles.signUpContainer}>
                        <Text>Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#0096F6'}} >Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </>)}
        </Formik>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    wrapper:{
        marginTop: 60,
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
