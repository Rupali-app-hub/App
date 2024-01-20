import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({bgColor, title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} 
    style={[styles.buttonStyle, {backgroundColor:bgColor?bgColor:"#000"}]} >
        <Text style={styles.textStyle}>
           {title?title:null}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyle:{
        color: 'white',
        padding: 16,
        marginVertical: 20,
        position:"relative",
        borderRadius: 5,
    },
    textStyle:{
        color: "#fff",
        justifyContent: "center",
        alignSelf: "center"
    }
})