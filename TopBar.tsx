import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopBar = () => {
  return (
    <View style = {styles.topbar}>
      <Text style = {styles.topBarText}>Portfolio App</Text>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    topbar:{
        height:90,
        backgroundColor:'#3498db',
        justifyContent:'center',
        alignItems:'center'
    },
    topBarText:{
        fontSize:20,
        fontWeight:'bold',
        paddingTop:30,
        color:'white'
    }
})