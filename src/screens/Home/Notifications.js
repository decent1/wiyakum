import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import ButtonSmall from '../../components/Button/ButtonSmall'

export default function Notifications({navigation}) {
    const [selectedOption, setSelectedOption] = useState('current')
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                height:40,
                margin:16
            }}>
                <TouchableOpacity 
                onPress={() => {
                    setSelectedOption('current')
                }}
                style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    borderBottomWidth:1,
                    borderBottomColor: selectedOption == 'current' ? Colors.primary : Colors.gray,
                }}>
                    <Text style={{
                        fontFamily:Fonts.semiBold,
                        fontSize:16,
                        color:selectedOption == 'current' ? Colors.primary : Colors.gray
                    }}>{'Current'}</Text>

                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    setSelectedOption('past')
                }}
                style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    borderBottomWidth:1,
                    borderBottomColor: selectedOption == 'past' ? Colors.primary : Colors.gray,
                }}>
                    <Text style={{
                        fontFamily:Fonts.semiBold,
                        fontSize:16,
                        color:selectedOption == 'past' ? Colors.primary : Colors.gray
                    }}>{'Past'}</Text>

                </TouchableOpacity>

            </View>

            <View
                style={{
                    marginHorizontal:16,
                    backgroundColor:'white',
                    padding:16,
                    borderRadius:10
                }}
            >
                <Text style={{
                    fontFamily:Fonts.semiBold,
                    color:Colors.black,
                    fontSize:16
                }}>{'Plant 1000 tree'}</Text>
                <Text style={{
                    fontFamily:Fonts.semiBold,
                    color:Colors.primary,
                    fontSize:16,
                    marginTop:4,
                }}>{'You have received 20 points'}</Text>
                
                <ButtonSmall 
                    style={{
                        height:35,
                        width: 120,
                        marginTop:8,
                        alignSelf:'flex-end'
                    }}
                    textStyle={{
                        fontFamily:Fonts.semiBold,
                    }}
                    title={'View Details'}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    }
})