import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Header = ({headerImage, headerTitle, onPress}) => {
   
  return (
    <View>
     <View style={{
        width:"100%",
        height:60,
        flexDirection:"row",
        alignItems:"center",
        elevation:3,
        backgroundColor:"#b072db"
      }}>
         <TouchableOpacity style={{marginLeft:15}} onPress={onPress}>
         </TouchableOpacity>
         <Text style={{fontSize:16, fontWeight:'600', marginLeft:0, color:"white", fontSize:20}}>{headerTitle}</Text>
       
      </View>
    </View>
  )
}

export default Header