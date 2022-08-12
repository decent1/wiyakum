import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    useWindowDimensions,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import { ImagePath } from '../../utils/imagePath'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function CampaignItemSmall({
    item,
    onPress=()=>{}
}){
    const windowWidth = useWindowDimensions().width;
    return(
        <TouchableOpacity 
        onPress={() => onPress(item)}
        style={[styles.container,{
            width:'100%',
        }]}>
            <View style={[styles.imageContainer,{
                width:'100%',
            }]}>
                <Image 
                    source={ImagePath[item.image]}
                    style={styles.image}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={[styles.rowDataContainer,{
                    marginTop:8
                }]}>
                    <View style={styles.iconContianer}>
                        <Image 
                            style={styles.token}
                            source={ImagePath.token}
                        />
                    </View>
                   
                    <Text style={styles.rowDataDes}>{`${item.points} Points`}</Text>
                </View>
                <View style={styles.rowDataContainer}>
                    <View style={styles.iconContianer}>
                        <Entypo 
                            name={'location-pin'} 
                            size={15}
                            color={'#1A2E35'}
                        />
                    </View>
                    <Text style={styles.rowDataDes}>{`${item.city}`}</Text>
                </View>
                <View style={styles.rowDataContainer}>
                    <View style={styles.iconContianer}>
                        <FontAwesome5 
                            name={'user-friends'} 
                            size={12}
                            color={'#1A2E35'}
                        />
                    </View>
                    <Text style={styles.rowDataDes}>{`${item.members} members`}</Text>
                </View>
                <View style={styles.rowDataContainer}>
                    <View style={styles.iconContianer}>
                        
                         <FontAwesome5 
                            name={'user-alt'} 
                            size={12}
                            color={'#1A2E35'}
                        />
                    </View>
                    {/* <Text style={{marginLeft:4,}}> */}
                        <View>
                            <Text style={styles.rowDataDes}>{`Organized by`}</Text>
                            <Text style={[styles.rowDataDes,{
                                fontFamily:Fonts.semiBold,
                                color:Colors.primary
                                }]}>{`${item.organized_by}`}</Text>
                        </View>
                    {/* </Text> */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        backgroundColor:Colors.white,
        marginBottom:16
    },
    imageContainer:{
        height:120,
        
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
        fontFamily:Fonts.semiBold,
        color:Colors.black,
        fontSize:12,
    },
    rowDataContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    token:{
        height:15,
        width: 15,
    },
    rowDataDes:{
        fontFamily:Fonts.regular,
        color:Colors.black,
        marginLeft:4,
        fontSize:12,
    },
    iconContianer:{
        height:22,
        width: 22, 
        alignItems:'center',
        justifyContent:'center'
    }
})