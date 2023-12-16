import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import * as Progress from 'react-native-progress';
import starImg from '../../assets/stars.png'
import { Feather } from '@expo/vector-icons';
import LinearCard from '../components/LinearCard';
import { ActivityCardDet, taskData } from '../Data';
import TaskCard from '../components/TaskCard';
import ActivityCard from '../components/ActivityCard';

const HomeScreen = () => {
    const newsCards = ['rgba(217, 148, 167, 1)','rgba(148, 217, 205, 1)','rgba(217, 148, 167, 1)','rgba(148, 217, 205, 1)']
    // rgba(37, 25, 107, 1), rgba(217, 148, 167, 1)
    // rgba(37, 25, 107, 1), rgba(148, 217, 205, 1)
    
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
       <View style={{marginHorizontal:20}}>
            <View style={styles.section}>
                <Text style={styles.bgTxt}>News</Text>
                
                <ScrollView 
                    horizontal={true} style={{gap:20}}
                    showsHorizontalScrollIndicator={false}
                >
                        {
                            newsCards.map((item,index)=>{
                                return(
                                    <TouchableOpacity key={index} style={{marginHorizontal:2}}>
                                        <LinearCard
                                            gardientValue={item}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                </ScrollView>

                
            </View>

            <View style={styles.section}>
                <Text style={styles.bgTxt}>Daily Tasks:</Text>
                
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        taskData.map((task, index)=>{
                            return(
                                <View key={index} style={{marginHorizontal:4}}>
                                    <TaskCard
                                        dailyTask={task.info}
                                        seal={task.img}
                                        cardColor={task.cardColor}
                                        TkNumber={task.num}
                                        bigTextColor={task.bgTxt}
                                        smallTextColor={task.smTxt}
                                    />
                                </View>
                            )
                        })
                    }
                </ScrollView>
                
            </View>

            <View style={[styles.section,{marginBottom:40, marginTop:20}]}>
                <Text style={{fontSize:18,fontWeight:400, color:'#4D545C'}}>Your overall progress is 
                    <Text style={{color:'#C93F8D'}}> 60%</Text>
                </Text>

                <Progress.Bar 
                    progress={0.6} 
                    width={320}
                    color='#C93F8D'
                    borderWidth={0}
                    unfilledColor='#FDF9FB'
                />
            </View>

            <View>
                {
                    ActivityCardDet.map((cardDet, index)=>{
                        return(
                            <TouchableOpacity key={index} style={{marginVertical:8}}>
                                <ActivityCard
                                    iconName={cardDet.icon}
                                    iconColor={cardDet.icnColor}
                                    headText={cardDet.hdTxt}
                                    smallText={cardDet.cardDet}
                                    cardColor={cardDet.cardColor}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            
       </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:80
    },
    section:{
        flexDirection:'column',
        gap:10, 
        marginVertical:10
    },
    
    tileWrapper:{
        position:'relative',
    },
    bgTxt:{
        color:'#595085',
        fontSize:24,
        position:'relative'
    },
    
})