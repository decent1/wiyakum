import React, { useEffect, useState } from 'react'
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
import campaigns from '../../data///campaigns.json'
import CampaignItem from '../../components/ListItem/CampaignItem'
import {useSelector} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'
import Helper from '../../utils/Helper';


export default function Dashboard({navigation}){
    const [isLoading, setIsLoading] = useState(false)
    const [pageNo, setPageNo] = useState(1)
    const [limit, setLimit] = useState(10)
    const [events, setEvents] = useState([])
    const user = useSelector(state => state.user)

    useEffect(() => {
        function init(){
            GetAllEvents() 
        }
        init()
    },[])

    async function GetAllEvents(){
        setIsLoading(true)
        const response = await request.PostRequestWithAuthentication(
            api.AllEventAPI(pageNo, limit),
            payload.AllEventPayload('','')
        )
        setIsLoading(false)
        if(response.success){
            setEvents(response.data)
        }
    }

console.log('events',events)
     //SignOut
    const SignOut= ()=> {
        AsyncStorage.clear().then(() => {
          navigation.replace('AuthStack');
        });
      };
    return <View style={styles.container}>
        <ScrollView>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>
                    {`Hi, ${user.name}`}
                </Text>
                <TouchableOpacity 
                    onPress={() => { navigation.navigate('ProfileStack') }}
                    style={styles.profileIconContainer}>  
                    <Image
                        style={styles.profileIcon}
                        source={ImagePath.profileIcon}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.des}>{'Register now for volunteering campaigns, and get points and rewards'}</Text>
            <View style={styles.quoteContainer}>
                <Text style={styles.quote}>
                    {`“Remember that the happiest people are not those getting more, but those giving more.”`}
                </Text>
                <Text style={styles.author}>
                    {`H. Jackson Brown Jr`}
                </Text>
            </View>
            <View style={[styles.optionContainer,{
                marginTop:20
            }]}>
                <Text style={styles.optionTitle}>
                    {'VOLUTEER CAMPAIGNS'}
                </Text>
                <Text 
                onPress={() => {
                    navigation.navigate('VolunteerCampaign')
                }}
                style={styles.seeAll}>
                    {'See all'}
                </Text>
            </View>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginLeft:16,
                    paddingRight:16,
                    marginTop:12,
                }}
                horizontal
                data={events}
                renderItem={({item}) => {
                    return <CampaignItem 
                        onPress={() => {
                            navigation.navigate('CampaignDetails',{
                                item:item
                            })
                        }}
                        item={item}
                    />
                }}
            />
            <View style={[styles.optionContainer,{
                marginTop:16
            }]}>
                <Text style={styles.optionTitle}>
                    {'SUGGESTED CAMPAIGNS'}
                </Text>
                <Text 
                onPress={() => {
                    navigation.navigate('VolunteerCampaign')
                }}
                style={styles.seeAll}>
                    {'See all'}
                </Text>
            </View>
            <TouchableOpacity onPress={SignOut} >
                <Text>signOut</Text>
            </TouchableOpacity>
            {/* <FlatList 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginLeft:16,
                    paddingRight:16,
                    marginTop:16,
                    marginBottom:16
                }}
                horizontal
                data={campaigns}
                renderItem={({item}) => {
                    return <CampaignItem 
                        onPress={() => {
                            navigation.navigate('CampaignDetails')
                        }}
                        item={item}
                    />
                }}
            /> */}
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
        fontSize:24,
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
    des:{
        marginHorizontal:16,
        fontFamily:Fonts.regular,
        color:Colors.black,
        marginTop:8
    },
    quoteContainer:{
        marginHorizontal:24,
        borderRadius:15,
        backgroundColor:Colors.primary,
        padding:12,
        marginTop:16
    },
    quote:{
        fontFamily:Fonts.regular,
        color:Colors.white
    },
    author:{
        fontFamily:Fonts.regular,
        color:Colors.white,
        marginTop:16,
        alignSelf:'flex-end'
    },
    optionContainer:{
        flexDirection:'row',
        marginHorizontal:16,
        justifyContent:'space-between'
    },
    optionTitle:{
        fontFamily:Fonts.semiBold,
        fontSize:16,
        color:Colors.black
    },
    seeAll:{
        fontFamily:Fonts.regular,
        fontSize:16,
        color:Colors.black
    }
})