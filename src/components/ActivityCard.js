import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const ActivityCard = ({iconName, iconColor, headText, smallText, cardColor}) => {
  return (
    <View style={[styles.acContainer,{backgroundColor:cardColor, }]}>
        <Feather name={iconName} size={24} color={iconColor} style={{flex:1}} />
        
        <View style={{flexDirection:'column', flex:8, gap:4}}>
            <Text style={{fontSize:18, color:iconColor}}>{headText}</Text>
            <Text numberOfLines={2} style={{color:"gray"}}>{smallText}</Text>
        </View>

        <View style={{flex:1,paddingTop:20}}>
            <Feather name="chevron-right" size={24} color="black" />
        </View>
    </View>
  )
}

export default ActivityCard

const styles = StyleSheet.create({
    acContainer:{
        borderRadius:10,
        height:105,
        paddingHorizontal:18,
        paddingVertical:20, 
        flexDirection:'row', 
        gap:2
    }
})