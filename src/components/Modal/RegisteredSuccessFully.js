import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import ButtonSmall from '../Button/ButtonSmall'
import { ImagePath } from '../../utils/imagePath'

export default function RegisteredSuccessFully({
    navigation,
    modalVisible_Success
}){
    return (
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            {/* <Text style={styles.modalHeaderText}>
                    
                </Text> */}
            <AntDesign
              onPress={() => modalVisible_Success()}
              name="closecircleo"
              size={20}
              color={Colors.primary}
            />
          </View>
          <Image
            source={ImagePath.doubleCheck}
            style={{
              width: 36,
              height: 36,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <Text style={styles.title}>{'REGISTERED SUCCESSFULLY'}</Text>
          <ButtonSmall
            onPress={() => {
              modalVisible_Success();
            }}
            style={{
              borderRadius: 10,
              marginTop: 16,
            }}
            title={'Watch your campaigns'}
          />
        </View>
      </View>
    );
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
        justifyContent:'flex-end',
        alignItems:'center',
    },
    modalHeaderText:{
        fontSize:18,
        fontFamily:Fonts.bold,
        color:'#1A2E35'
    },
    title:{
        fontSize:15,
        fontFamily:Fonts.bold,
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