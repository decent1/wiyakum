import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import { ImagePath } from '../../utils/imagePath'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function CampaignItem({
    item,
    onPress=()=>{}
}){
    return(
        <TouchableOpacity 
        onPress={() => onPress(item)}
        style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: item?.picture}}
                    style={styles.image}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.name}>{item?.title}</Text>
                <View style={[styles.rowDataContainer,{
                    marginTop:16
                }]}>
                    <View style={styles.iconContianer}>
                        <Image 
                            style={styles.token}
                            source={ImagePath.token}
                        />
                    </View>
                   
                    <Text style={styles.rowDataDes}>{`${item?.points} Points`}</Text>
                </View>
                <View style={styles.rowDataContainer}>
                    <View style={styles.iconContianer}>
                        <Entypo 
                            name={'location-pin'} 
                            size={20}
                            color={'#1A2E35'}
                        />
                    </View>
                    <Text style={styles.rowDataDes}>{`${item?.location?.address}`}</Text>
                </View>
                <View style={styles.rowDataContainer}>
                    <View style={styles.iconContianer}>
                        <FontAwesome5 
                            name={'user-friends'} 
                            size={16}
                            color={'#1A2E35'}
                        />
                    </View>
                    <Text style={styles.rowDataDes}>{`${item?.totalMembers} members`}</Text>
                </View>
                <View style={styles.rowDataContainer}>
                    <View style={styles.iconContianer}>
                        
                         <FontAwesome5 
                            name={'user-alt'} 
                            size={16}
                            color={'#1A2E35'}
                        />
                    </View>
                    <Text style={{marginLeft:10}}>
                        <Text style={styles.rowDataDes}>{`Organized by`}</Text>
                        <Text style={[styles.rowDataDes,{
                            fontFamily:Fonts.semiBold,
                            color:Colors.primary
                            }]}>{` ${item?.company?.name}`}</Text>
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        backgroundColor:Colors.white,
        marginRight:16,
    },
    imageContainer:{
        height:120,
        width: 260,
    },
    image:{
        height:'100%',
        width: '100%',
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    contentContainer:{
        padding:16,
    },
    name:{
        fontFamily:Fonts.bold,
        color:Colors.black
    },
    rowDataContainer:{
        marginTop:4,
        flexDirection:'row',
        alignItems:'center'
    },
    token:{
        height:20,
        width: 20,
    },
    rowDataDes:{
        fontFamily:Fonts.regular,
        color:Colors.black,
        marginLeft:10,
    },
    iconContianer:{
        height:22,
        width: 22, 
        alignItems:'center',
        justifyContent:'center'
    }
})