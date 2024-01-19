// AutoCallApp.js

import React, { useState } from 'react';
import { View, TextInput, Text, Button, Alert, TouchableOpacity, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import call from 'react-native-phone-call';
import Header from './components/Header';
import HorizontalBar from './components/HorizontalBar';

const Home = () => {


    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [showTimer, setShowTimer] = useState(false);
    const [loading, setLoading] = useState(false);
    

    const handleInputChange = (text) => {
        setPhoneNumber(text);
        if (text.length === 10) {
            setError('');
            // setLoading(true);
            // setShowTimer(true);
        } else {
            setError('Enter a valid 10-digit number');
            // setLoading(false);
            // setShowTimer(false);
        }
    };

    const makeCall = () => {
        setTimeout(() => {
            const args = {
                number: phoneNumber,
                prompt: false,
                skipCanOpen: true
            };
             call(args).catch(console.error)
        //     call(args)
        //   .then(() => {
        //     
        //   })
        //   .catch(error => {
        //    
        //   })
        //   .finally(() => {
        //     setLoading(false);
        //     setShowTimer(false); 
        //   });
        }, 3000)

    };
    const handleCancel = () => {
        setPhoneNumber('');
        setError('');
      };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <Header headerTitle={"Auto Redial"} />
            <View style={{ flex: 1, padding: 10, marginVertical: 5, borderRadius: 10, backgroundColor: "gray" }}>
                <View><Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>Normal call</Text></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={{
                            flex: 1,
                            height: 40,
                            marginBottom: 0,
                            padding: 5,
                            fontSize: 20,
                            color: "white",
                        }}
                        placeholder="Enter 10-digit number..."
                        onChangeText={handleInputChange}
                        value={phoneNumber}
                        keyboardType="numeric"
                    />
                    {phoneNumber !== '' && (
                        <TouchableOpacity onPress={handleCancel} style={{ padding: 10 }}>
                            <Image source={require('../images/close.png')} style={{width:15, height:15, tintColor:"white"}}/>
                        </TouchableOpacity>
                    )}
                </View>
                <HorizontalBar />
                {error !== '' && <Text style={{ color: '#b83d3d', fontSize: 15, }}>{error}</Text>}
                <View style={{ justifyContent: "flex-start", marginVertical: 8 }}><Text style={{ color: "white" }}>Extension number</Text></View>
                <View>    

                </View>
                <TouchableOpacity onPress={makeCall} style={{
                    backgroundColor: '#b83d3d',
                    color: 'white',
                    padding: 16,
                    marginHorizontal: 15,
                    position:"relative",
                    borderRadius: 5,
                }} >
                    <Text style={{ color: "#fff", justifyContent: "center", alignSelf: "center" }}>
                        START
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginVertical: 5, borderRadius: 10, backgroundColor: "gray" }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignContent: "center", padding: 10 }}>
                    <View><Text style={{ color: "white", fontSize: 20, }}>Call duration</Text></View>
                    <View><Text style={{ color: "white", fontSize: 16, }}>00:00</Text></View>
                </View>
                <HorizontalBar />
                <View style={{padding: 10 }}><Text style={{ color: "white", fontSize: 20, }}>Number of calls</Text></View>
            </View>
            

        </SafeAreaView>
    );
};

export default Home;
