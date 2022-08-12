import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Modal
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import { ImagePath } from '../../utils/imagePath'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ButtonSmall from '../../components/Button/ButtonSmall'
import campaigns from '../../data/campaigns.json'
import CampaignItemSmall from '../../components/ListItem/CampaignItemSmall'
import JoinConfirmationModal from '../../components/Modal/JoinConfirmationModal'
import moment from 'moment'

export default function CampaignDetails({navigation,route}){
    // const [item, setItem] = React.useState({
    //     "id":"1",
    //     "name":"“Plant 1000 Trees”",
    //     "points":"23",
    //     "city":"Sohar, Oman",
    //     "members":8,
    //     "organized_by":"Bader Moqbali",
    //     "date":"12-02-2022",
    //     "time":"12:00 PM",
    //     "image":"plant",
    //     "des":"Participation in the cultivation of a thousand seedlings in the desert areas, the duration of the volunteer is 5 hours, transportation and feeding service will be available."
    // })
    const [item, setItem] = useState(route.params.item)
    const [modalVisible_Join, setModalVisible_Join] = React.useState(false)

    return <View style={styles.container}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible_Join}
            onRequestClose={() => {
                setModalVisible_Join(!modalVisible_Join)
            }}
        >
            <JoinConfirmationModal
                item={item}
                modalVisible={() => setModalVisible_Join(!modalVisible_Join)}
            />
        </Modal>
        <ScrollView>
            <View style={styles.nameContainer}>
                <Text>
                    {''}
                </Text>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Profile')
                }}
                style={styles.profileIconContainer}>  
                    <Image
                        style={styles.profileIcon}
                        source={ImagePath.profileIcon}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{item?.title}</Text>
            <View style={styles.itemcontainer}>
            <View style={styles.itemimageContainer}>
                <Image 
                    source={{uri:item?.image}}
                    style={styles.itemimage}
                />
            </View>
            <View style={styles.itemcontentContainer}>
                <Text style={styles.itemname}>{item?.note}</Text>
                <View style={[styles.itemrowDataContainer,{
                    marginTop:16
                }]}>
                    <View style={styles.itemiconContianer}>
                        <Image 
                            style={styles.itemtoken}
                            source={ImagePath.token}
                        />
                    </View>
                   
                    <Text style={styles.itemrowDataDes}>{`${item?.points} Points`}</Text>
                </View>
                <View style={styles.itemrowDataContainer}>
                    <View style={styles.itemiconContianer}>
                        <Entypo 
                            name={'location-pin'} 
                            size={20}
                            color={'#1A2E35'}
                        />
                    </View>
                    <Text style={styles.itemrowDataDes}>{`${item?.location.address}`}</Text>
                </View>
                <View style={styles.itemrowDataContainer}>
                    <View style={styles.itemiconContianer}>
                        <FontAwesome5 
                            name={'user-friends'} 
                            size={16}
                            color={'#1A2E35'}
                        />
                    </View>
                    <Text style={styles.itemrowDataDes}>{`${item?.totalMembers} members`}</Text>
                </View>
                <View style={styles.itemrowDataContainer}>
                    <View style={styles.itemiconContianer}>   
                         <FontAwesome5 
                            name={'user-alt'} 
                            size={16}
                            color={'#1A2E35'}
                        />
                    </View>
                    <Text style={{marginLeft:10}}>
                        <Text style={styles.itemrowDataDes}>{`Organized by`}</Text>
                        <Text style={[styles.itemrowDataDes,{
                            fontFamily:Fonts.semiBold,
                            color:Colors.primary
                            }]}>{` ${item?.company?.name}`}</Text>
                    </Text>
                </View>
                <View style={styles.itemrowDataContainer}>
                    <View style={styles.itemiconContianer}>
                        
                         <Entypo 
                            name={'calendar'} 
                            size={18}
                            color={'#1A2E35'}
                        />
                    </View>
                    <Text style={styles.itemrowDataDes}>{`${Date(item.startTimestamp)}`}</Text>
                </View>
                <ButtonSmall 
                onPress={() => {
                    // console.log(item2)
                    setModalVisible_Join(!modalVisible_Join)
                }}
                style={{
                    borderRadius:10,
                    marginTop:20
                }}
                title={'Join Now'}
            />
            </View>

            
            </View>
            <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                marginLeft:16,
                paddingRight:16,
                marginTop:16,
                alignSelf:'center'
            }}>
                {
                    campaigns.map((item,index) => <View
                    key={index}
                     style={{
                        width:'46%',
                        alignItems:'center',
                        justifyContent:'center',
                        marginRight: index % 2 == 0 ? 8 : 0,
                        marginLeft: index % 2 == 1 ? 8 : 0,
                    }}>
                        <CampaignItemSmall 
                            item={item}
                        />
                        </View>)
                }
            </View>
           
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    nameContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:16,
        marginTop:12,
    },
    name:{
        fontSize:30,
        fontFamily:Fonts.semiBold,
        color:Colors.black
    },
    profileIconContainer:{
        height:48,
        width: 48,
        borderRadius:24,
    },
    profileIcon:{
        height:'100%',
        width:'100%',
    },

    itemcontainer:{
        borderRadius:20,
        backgroundColor:Colors.white,
        marginHorizontal:16,
        
    },
    itemimageContainer:{
        height:160,
        width: '100%',
    },
    itemimage:{
        height:'100%',
        width: '100%',
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    itemcontentContainer:{
        padding:16,
    },
    itemname:{
        fontFamily:Fonts.regular,
        color:Colors.black
    },
    itemrowDataContainer:{
        marginTop:4,
        flexDirection:'row',
        alignItems:'center'
    },
    itemtoken:{
        height:20,
        width: 20,
    },
    itemrowDataDes:{
        fontFamily:Fonts.regular,
        color:Colors.black,
        marginLeft:10,
    },
    itemiconContianer:{
        height:22,
        width: 22, 
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        marginHorizontal:16,
        fontSize:24,
        fontFamily:Fonts.semiBold,
        color:Colors.black,
        marginVertical:16,
    }
    
})