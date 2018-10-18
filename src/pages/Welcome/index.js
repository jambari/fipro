import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { FormLabel, FormInput, FormValidationMessage, Divider } from 'react-native-elements'
import styles from './style';
export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            emailname: '',
            password: '',
        };
    }


    render () {
        return (
            <View style={{backgroundColor: '#007D8C', 
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: 20,    
            }}>

                <View style={{ flexDirection: 'row', justifyContent:'space-between', marginBottom: 15}}>
                    <Icon
                    name='close'
                    size={35}
                    color='#fffd' />
                    <Text style={{color:'#fff', fontSize:20}} >Log In</Text>
                </View>

                <View style={{flexDirection: 'row' , justifyContent: 'flex-start', marginBottom: 30}}>
                <Icon
                    name='github'
                    type='font-awesome'
                    size={80}
                    color='#fffd' />
                </View>
                <View style={{marginBottom: 50}} >
                    <Text style={{fontSize: 30, color: '#fff'}} > Welcome to Airbnb.</Text>
                </View>   
                <View style={{marginBottom: 40, flexDirection: 'column'}}>
                    <Button rounded leftIcon={{name: 'google', color: '#007D8C', size: 35, type:'font-awesome'}} title="Continue with Google" 
                    backgroundColor="#fff" color="#007D8C" buttonStyle={{marginBottom: 15}} fontWeight='bold' />
                    <Button rounded title='Create Account' outline='true' fontWeight='bold' />
                </View>
                <View style={{marginBottom: 40}}>
                    <Text style={{color: '#fff', fontSize: 20}} > More Options</Text>
                </View>
                <View>
                    <Text style={{color: '#fff'}}>By tapping continue, Create account or more options,I agree to Airbnb's Terms of Services, 
                        Payments Terms of Services, Privacy Policy, and Non-Discrimination Policy.
                    </Text>
                </View>
            </View>
        )
    }
}