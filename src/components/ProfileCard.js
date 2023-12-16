import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons'

const ProfileCard = ({iconName,iconColor,cardColor,cardText, saved}) => {
    
  return (
    <View style={[styles.container,{backgroundColor:cardColor}]}>
      <View style={{alignItems:"flex-end", height:24}}>
        {
            saved ?
            <Ionicons name="bookmark-sharp" size={24} color={iconColor} style={{marginTop:-2}}/>:null
        }
      </View>
      <View>
        <Feather name={iconName} size={24} color={iconColor}/>
      </View>

      <View>
        <Text style={{fontSize:14, color:iconColor}}>{cardText}</Text>
      </View>

      <View>
        <Text style={{fontSize:12, color:"gray"}}>Some short description of this type of report.</Text>
      </View>
    </View>
  )
}

export default ProfileCard;

const styles = StyleSheet.create({
    container:{
        width:153,
        height:128,
        paddingHorizontal:6,
        paddingTop:0,
        borderRadius:10,
        margin:4
    }
})