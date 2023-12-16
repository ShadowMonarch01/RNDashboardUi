import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const LinearCard = ({gardientValue}) => {
  return (
    <LinearGradient
        // Button Linear Gradient
        colors={['rgba(37, 25, 107, 1)', gardientValue]}
        start={{x:0,y:1}}
        end={{x:1,y:0}}
        style={styles.newsCard}>
            <Text style={styles.cardTxt}>Short new title will be here</Text>
            
            <Image source={require('../../assets/stars.png')} style={{position:'absolute'}}/>
    </LinearGradient>
  )
}

export default LinearCard

const styles = StyleSheet.create({
    newsCard:{
        width:153,
        height:72,
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center'
    },
    cardTxt:{
        fontSize:14,
        color:'white',
        width:100
    },
})