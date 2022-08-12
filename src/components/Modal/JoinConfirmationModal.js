import React,{useState} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import ButtonSmall from '../Button/ButtonSmall'

import * as api from '../../networking/api'
import * as request from '../../networking/request'
import Helper from '../../utils/Helper'

export default function JoinConfirmationModal({
    navigation,
    modalVisible,
    item
}){
    const [isLoading, setIsLoading] = useState(false)
    const attendEvent = async () => {
        setIsLoading(true)
        const response = await request.PostRequestWithAuthentication(api.AttendEventAPI(item._id),JSON.stringify({}))
        setIsLoading(false)
        if(response.success){
            Helper.showToast('You have successfully joined the event')
        }
        else{
            Helper.showToast(response.data)
        }
    }
    return <View style={styles.container}>
        <View style={styles.modalView}>
            <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>
                    REGISTER
                </Text>
                <AntDesign
                    onPress={() => modalVisible()}
                    name="closecircleo"
                    size={20}
                    color={Colors.primary}
                />
            </View>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.row}>
                <Text style={styles.rowText}>{'Volunteer hours'}</Text>
                <Text style={styles.rowText}>{`${item?.eventDuration} Hours`}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowText}>{'Total Volunteers'}</Text>
                <Text style={styles.rowText}>{item?.totalMembers}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowText}>{'Date'}</Text>
                {/* <Text style={styles.rowText}>{Date(item?.startTimestamp).getDate()}</Text> */}
            </View>
            <View style={styles.row}>
                {/* <Text style={styles.rowText}>{'Date'}</Text> */}
                <Text style={styles.rowText}>{Date(item?.startTimestamp)}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowText}>{'Location'}</Text>
                <Text style={styles.rowText}>{item?.location?.address}</Text>
            </View>

            <ButtonSmall 
                isLoading={isLoading}
                onPress={attendEvent}
                style={{ borderRadius:10, marginTop:16 }}
                title={'Confirm'}
            />
            
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems:'center',
        justifyContent:'center'
    },
    modalView:{
        backgroundColor:'#fff',
        borderRadius:10,
        width: '80%',
        padding:16
    },
    modalHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    modalHeaderText:{
        fontSize:18,
        fontFamily:Fonts.bold,
        color:'#1A2E35'
    },
    title:{
        fontSize:18,
        fontFamily:Fonts.semiBold,
        color:'#1A2E35',
        marginTop:16,
        marginBottom:16,
        alignSelf:'center'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:4 
    },
    rowText:{
        fontFamily:Fonts.regular,
        color:'#1A2E35',
    }
})