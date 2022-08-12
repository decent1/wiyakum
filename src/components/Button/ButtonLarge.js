import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'

export default function ButtonLarge({
    style,
    title,
    textStyle,
    onPress=() => {},
    isLoading=false,
}){
    return <TouchableOpacity 
    activeOpacity={0.8}
    onPress={() => onPress()}
    style={[styles.container,{
        ...style
    }]}>
        {
            isLoading ? <ActivityIndicator 
                size={"small"}
                color={Colors.white}
            />
            : <Text style={[styles.title,{...textStyle}]}>{title ? title : 'DONE'}</Text>
        }
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        height:44,
        marginHorizontal:16,
        borderRadius:30,
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:'100%',
    },
    title:{
        fontSize:16,
        fontFamily:Fonts.bold,
        color:Colors.white,
    }
})