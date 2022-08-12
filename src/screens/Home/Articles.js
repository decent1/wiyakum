import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../../utils/Colors'

export default function Articles({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Articles</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    }
})