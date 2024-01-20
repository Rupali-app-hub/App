// AutoCallApp.js

import React, { useState } from 'react';
import { View, TextInput, Text,TouchableOpacity, SafeAreaView, Image, ActivityIndicator, StyleSheet } from 'react-native';
import Header from './components/Header';
import HorizontalBar from './components/HorizontalBar';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call'
import CustomButton from './components/CustomButton';

const Home = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleInputChange = (text) => {
        setPhoneNumber(text);
        if (text.length === 10) {
            setError('');
        } else {
            setError('Enter a valid 10-digit number');

        }
    };

    function makeCall() {

        if (phoneNumber != null && phoneNumber.length === 10) {
            setLoading(true);
            let timer = setTimeout(() => {
                RNImmediatePhoneCall.immediatePhoneCall(phoneNumber);
                setLoading(false)
            }, 3000)
            return () => clearTimeout(timer)
        }

    };
    const handleCancel = () => {
        setPhoneNumber('');
        setError('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={"Auto Redial"} />
            <View style={styles.box}>
                <View>
                    <Text style={styles.textStyle}>Normal call</Text>
                </View>
                <View style={styles.centeredRow}>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Enter 10-digit number..."
                        onChangeText={handleInputChange}
                        value={phoneNumber}
                        keyboardType="numeric"
                    />
                    {phoneNumber !== '' && (
                        <TouchableOpacity onPress={handleCancel} style={{ padding: 10 }}>
                            <Image source={require('../images/close.png')} style={{ width: 15, height: 15, tintColor: "white" }} />
                        </TouchableOpacity>
                    )}
                </View>
                <HorizontalBar />
                {error !== '' && <Text style={{ color: '#b83d3d', fontSize: 15, }}>{error}</Text>}
                <Text style={styles.textStyle}>Extension number</Text>
                <CustomButton onPress={makeCall} title={' START'} bgColor={'#b83d3d'} />
            </View>
            {loading &&
                <View style={styles.loaderContainer}>
                    <ActivityIndicator  size="large" color="#0000ff" />
                </View>
            }
            <View style={styles.box}>

                <View style={[styles.centeredRow, {justifyContent: "space-between", margin: 10}]}>
                    <View><Text style={styles.textStyle}>Call duration</Text></View>
                    <View><Text style={styles.textStyle}>00:00</Text></View>
                </View>
                <HorizontalBar />
                <View style={{padding: 10}}><Text style={styles.textStyle}>Number of calls</Text></View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    box: {
        flex: 1,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: "gray"
    },
    textStyle: {
        color: "white", fontSize: 16, fontWeight: "600"
    },
    textInputStyle: {
        flex: 1,
        height: 40,
        marginBottom: 0,
        padding: 5,
        fontSize: 20,
        color: "white",
    },
    loaderContainer:{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignSelf: "center" 
    },
    centeredRow:{
        flexDirection: 'row',
        alignContent: "center",
    }
})

export default Home;
