import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { Colors } from '../../utils/Colors'
import Input from '../../components/Input/Input'

export default function Search({navigation}) {
    return (
        <View style={styles.container}>
            <Input 
                style={{
                    borderWidth:1,
                    borderRadius:5,
                    marginTop:16
                }}
                placeholder={'Search any campaign'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    }
})