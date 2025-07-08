import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Content = () => {
  return (
    
  )
}

export default Content

const styles = StyleSheet.create({
    container: {
        paddingTop:120,
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        margin:20
      },
      nameText:{
        fontSize:20,
        fontWeight:'bold'
      },
      emaiText:{
        fontSize:15,
        fontWeight:'normal',
        paddingTop:10
      },
      profileImage:{
        width:200,
        height:200,
        marginBottom:20,
        borderRadius:100
      },
      aboutText:{
        fontSize:18,
        fontWeight:'semibold',
        paddingTop:20,
        paddingBottom:10
      },
      aboutContent:{
        fontSize:10,
        fontWeight:'normal',
      }
})