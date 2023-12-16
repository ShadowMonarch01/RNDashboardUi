import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeScreen from './Tabs/HomeScreen';
import ProfileScreen from './Tabs/ProfileScreen';
import DummyScreen from './Tabs/DummyScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons,Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

{/* <Feather name="home" size={24} color="black" /> */}
{/* <MaterialIcons name="chat-bubble-outline" size={24} color="black" /> */}
{/* <Feather name="book" size={24} color="black" /> */}
{/* <Feather name="moon" size={24} color="black" /> */}
{/* <MaterialIcons name="person-outline" size={24} color="black" /> */}
const HomeTab = () => {

    const IconComponent = ({iconName})=>{
        return(
            <TouchableOpacity>
                {
                    iconName === 'bars'?
                    <FontAwesome name={iconName} size={24} color="gray" style={{marginLeft:20}}/>
                    :
                    <Ionicons name={iconName} size={24} color="gray" style={{marginRight:20}}/>
                }
            </TouchableOpacity>

        )
    }

    const IconColor=(focauseValue)=>{
        const val = focauseValue ? "#3D3270" : "#8B97A8"
        return val;
    }

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarLabel:()=>null,
            headerStyle:{
                elevation:0,
            },
            headerTitleAlign:'center',
            headerTitleStyle:{
                color:'#595085'
            },
            headerTransparent:true,
            headerRight:()=><IconComponent iconName={"settings-outline"} />,
            headerLeft:()=><IconComponent iconName={'bars'}/>
        }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
                                                                    tabBarIcon:({focused})=>(
                                                                        <Feather 
                                                                            name="home" 
                                                                            size={24} 
                                                                            color={IconColor(focused)} 
                                                                        />
                                                                    ),
                                                                    }}/>

      <Tab.Screen name="Profile" component={ProfileScreen} options={{
                                                                    tabBarIcon:({focused})=>(
                                                                        <MaterialIcons 
                                                                            name="person-outline" 
                                                                            size={28} color={IconColor(focused)} 
                                                                        />
                                                                    )
                                                                    }}/>

      <Tab.Screen name="Chat" component={DummyScreen} options={{
                                                                    tabBarIcon:({focused})=>(
                                                                        <MaterialIcons 
                                                                            name="chat-bubble-outline" 
                                                                            size={24} color={IconColor(focused)} />
                                                                    )
                                                                    }}/>

      <Tab.Screen name="Tasks" component={DummyScreen} options={{
                                                                    tabBarIcon:({focused})=>(
                                                                        <Feather 
                                                                            name="book" 
                                                                            size={24} color={IconColor(focused)} />
                                                                    )
                                                                    }}/>

      <Tab.Screen name="Sleep" component={DummyScreen} options={{
                                                                    tabBarIcon:({focused})=>(
                                                                        <Feather 
                                                                            name="moon" 
                                                                            size={24} color={IconColor(focused)} />
                                                                    )
                                                                    }}/>
    </Tab.Navigator>
  )
}

export default HomeTab

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})