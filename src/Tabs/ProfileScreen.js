import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { strongSide,weakSide } from '../Data'
import ProfileCard from '../components/ProfileCard'
import { ReporstCard } from '../Data'
import { windowHeight } from '../components/Dimensions'
const ProfileScreen = () => {

    const Tile =({attribute, txtColor, tileColor})=>{
        return(
            <View style={{paddingVertical:4,paddingHorizontal:8, borderRadius:6, backgroundColor: tileColor}}>
                <Text style={{fontSize:14, color: txtColor}}>{attribute}</Text>
            </View>
        )
    }

    const renderItem =({item})=>{
        return(
            <ProfileCard
                iconName={item.icon}
                cardText={item.bgTxt}
                iconColor={item.txtColor}
                cardColor={item.cardColor}
                saved={item.saved}
            />
        )
    }

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/graybg.png')} 
                style={{height:200}}>
        {/* <Text>ProfileScreen</Text> */}
        </ImageBackground>

        <View style={{paddingHorizontal:20, height:166, flexDirection:'row', gap:10}}>
            <View style={{flexDirection:'row',alignItems:'center', marginTop:-120}}>
                <View style={{width:150,height:150,borderRadius:200, backgroundColor:'gray'}}></View>
                <Image source={require('../../assets/changeimg.png')} style={{width:50,height:50, marginLeft:-25}}/>
            </View>

            <View style={{marginTop:-10, gap:6}}>
                <Text style={styles.txt1}>Angelica Jackson</Text>

                <Text style={styles.txt2}>Analyzer</Text>

                <TouchableOpacity>
                    <Text style={styles.txt3}>Change profile</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{paddingHorizontal:20}}>

            <View style={{alignItems:'center'}}>
            <FlatList
                ListHeaderComponent={()=>{
                return(<>
                    <View style={{flexDirection:'column'}}>
                            <Text style={styles.profileHeader}>Strong side:</Text>

                            <View style={styles.rowIt}>
                                {
                                    strongSide.map((item,index)=>{
                                        return(
                                            <View key={index}>
                                                <Tile 
                                                    attribute={item.attribute}
                                                    txtColor={item.txtColor}
                                                    tileColor={item.cardColor}
                                                />
                                            </View>
                                        )
                                    })
                                }
                            </View>

                        </View>

                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.profileHeader}>Weak side:</Text>
                        <View style={styles.rowIt}>
                            {
                                weakSide.map((item,index)=>{
                                    return(
                                        <View key={index}>
                                            <Tile 
                                                attribute={item.attribute}
                                                txtColor={item.txtColor}
                                                tileColor={item.cardColor}
                                            />
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>

                    <View style={{marginVertical:10}}>
                        <Text style={{color:'#595085', fontSize:24}}>My Reports:</Text>
                    </View>
                </>)
            }} 
                data={ReporstCard}
                renderItem={renderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                style={styles.listHeight}
                keyExtractor={item => item.icon}
            />
            </View>

            {/* <ProfileCard/> */}
        </View>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingBottom:10
        // alignItems:'center',
        // justifyContent:'center'
    },
    txt1:{
        color:'#595085',
        fontSize:16,
        fontWeight:"500"
    },
    txt2:{
        fontSize:14,
        color:'gray'
    },
    txt3:{
        color:'#595085',
        textDecorationLine:'underline' 
    },
    profileHeader:{
        color:'#595085',
        fontSize:18,
        fontWeight:"400"
    },
    rowIt:{
        flexDirection:'row',
        gap:4,
        marginVertical:8
    },
    listHeight:{
        height:(windowHeight-386),
    }
})