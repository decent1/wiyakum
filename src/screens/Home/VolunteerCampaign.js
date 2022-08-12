import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import { ImagePath } from '../../utils/imagePath'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ButtonSmall from '../../components/Button/ButtonSmall'
import campaigns from '../../data/campaigns.json'
import CampaignItemSmall from '../../components/ListItem/CampaignItemSmall'

export default function VolunteerCampaign({navigation}){
   

    return <View style={styles.container}>
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
            <Text style={styles.title}>{'Volunteer campaign'}</Text>
           
            <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                marginLeft:16,
                paddingRight:16,
                alignSelf:'center'
            }}>
                {
                    campaigns.map((item,index) => <View key={index} style={{
                        width:'46%',
                        alignItems:'center',
                        justifyContent:'center',
                        marginRight: index % 2 == 0 ? 8 : 0,
                        marginLeft: index % 2 == 1 ? 8 : 0,
                    }}>
                        <CampaignItemSmall 
                            onPress={()=>{
                                navigation.navigate('CampaignDetails')
                            }}
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
    title:{
        marginHorizontal:16,
        fontSize:24,
        fontFamily:Fonts.semiBold,
        color:Colors.black,
        marginVertical:16,
    }
    
})