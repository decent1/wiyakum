import React, {useState} from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    Modal,
    Keyboard,
    TouchableOpacity,
    Alert
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts'
import ButtonSmall from '../../components/Button/ButtonSmall';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Helper from '../../utils/Helper';
import {addUser} from '../..//redux'
import * as api from '../../networking/api'
import * as payload from '../../networking/payload'
import * as request from '../../networking/request'

export default function EnterCode({navigation, route}){
    
    const dispatch = useDispatch()
    const [code, setCode] = useState('')
    const [errors, setErrors] = useState([])
    const onVerifyCode = async (code) => {
      
      
      const response = await request.PostRequest(
        api.VerifyAPI(),
        payload.VerifyPayload(route.params.mobile,code),
      );
      if(response.success){
        dispatch(addUser({
          token:response.data.access_token,
          mobile:route.params.mobile
        }))
        Helper.saveToken(response.data.access_token)

        navigation.navigate('SignUp')
      }
      else{
        if(response.hasOwnProperty('errors') && response.errors.length > 0){
          setErrors(response.errors)
        }
        else{
          Alert.alert('Error', response.message)
        }
        
      }
      
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons size={20} color={Colors.primary} name="arrow-back" />
        </TouchableOpacity>
        <Text style={styles.title}>Verify!</Text>
        <Text style={styles.des}>{`Code is sent to ${route.params.mobile}`}</Text>

        <View style={{alignItems: 'center', marginTop: 32}}>
          <SmoothPinCodeInput
            codeLength={4}
            cellSize={44}
            cellSpacing={20}
            value={code}
            onTextChange={code => setCode(code)}
            onFulfill={code => {
              onVerifyCode(code);
              Keyboard.dismiss();
            }}
            // onBackspace={this._focusePrevInput}
            cellStyle={{
              backgroundColor: Colors.white,
              borderRadius: 3,
              borderWidth: 1,
              borderColor: Colors.primary,
            }}
            cellStyleFocused={{
              borderWidth: 1,
              borderColor: Colors.primary,
            }}
          />
        </View>
        {
            errors.filter(el => el.field == 'otp').length > 0
            ?
            <Text style={{
                fontFamily:Fonts.regular,
                color:'red',
                marginTop:5,
                marginHorizontal:16,
                alignSelf:'center',
                marginTop:16,
            }}>{errors.filter(el => el.field == 'otp')[0].message}</Text>
            :
            null
        }

        <Text style={styles.time}>{'01:44'}</Text>
        <Text style={styles.resend}>{'Resend?'}</Text>

        <ButtonSmall
          onPress={() => {
            onVerifyCode(code);
          }}
          style={{
            marginTop: 32,
          }}
          title={'Login'}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Colors.appBackgroundColor
    },
    title:{
        marginHorizontal:16,
        fontSize:30,
        fontFamily:Fonts.semiBold,
        color:Colors.black,
        marginTop:12,
    },
    des:{
        marginHorizontal:16,
        fontSize:16,
        fontFamily:Fonts.regular,
        color:Colors.black,
        marginTop:16,
    },
    time:{
        fontFamily:Fonts.regular,
        color:'#1A2E35',
        marginHorizontal:16,
        marginTop:32
    },
    resend:{
        marginHorizontal:16,
        marginTop:4,
        fontSize:16,
        fontFamily:Fonts.semiBold,
        color:Colors.primary
    }
});