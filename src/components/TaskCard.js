import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const TaskCard = ({dailyTask, seal, cardColor, TkNumber, bigTextColor, smallTextColor}) => {
  return (
    <View style={[styles.tskCard,{backgroundColor:cardColor}]}>

        <Text style={[{fontSize:12},{color:smallTextColor}]}>{dailyTask}</Text>

        <View style={{flexDirection:'row'}}>
            <Text style={[styles.bigText,{color:bigTextColor}]}>{TkNumber}</Text>

            <Image 
                source={seal}
                style={{ width:18, height:18, marginTop:12}} 
            />
        </View>
    </View>
  )
}

export default TaskCard

const styles = StyleSheet.create({
    tskCard:{
        width:120,
        height:110,
        borderRadius:15,
        // backgroundColor:'#F6F5FB',
        marginTop:10,
        flexDirection:'column',
        paddingHorizontal:10,
        paddingVertical:18
    },
    bigText:{
        fontSize:40,
        fontWeight:600, 
        color:'#403572'
    }
})