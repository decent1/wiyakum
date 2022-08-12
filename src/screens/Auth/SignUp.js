
import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native'
import Input from '../../components/Input/Input'

import commonStyles from '../../utils/commonStyles'

import { Fonts } from '../../utils/Fonts'
import { Colors } from '../../utils/Colors'

import ButtonLarge from '../../components/Button/ButtonLarge';

import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

import * as api from '../../networking/api'
import * as payload from '../../networking/payload'
import * as request from '../../networking/request'
import Helper from '../../utils/Helper'
import { addUser } from '../../redux'

import {useDispatch} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

export default function SignUp({navigation}){
  const dipatch = useDispatch()
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function onSignUp(){
    setIsLoading(true)
    const response = await request.PostRequestWithAuthentication(
      api.RegisterAPI(),
      payload.RegisterPayload(name,email,password),
    )
    setIsLoading(false)
    if(response.success){
      Helper.saveUser(response.data)
      dipatch(addUser({
        id:response.data.id,
        name:response.data.name,
        email:response.data.email,
        type:response.data.type,
        isLogin:true,
      }))
      navigation.navigate('AuthStack')
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
  return(
    <View style={commonStyles}>
       <Text style={[styles.title,{
            marginTop:28,
        }]}>
            {'Sign Up'}
        </Text>
        <Text style={styles.des}>{'Enter your details to continue'}</Text>


        <Input 
          style={{ marginTop:32 }}
          value={name}
          onChangeText={(text)=>setName(text)}
          placeholder={'Full Name'}
          leftComponent={
              <Feather
                  size={20}
                  color={Colors.primary}
                  name="user"
              />
          }
        />
        {
            errors.filter(el => el.field == 'name').length > 0
            ?
            <Text style={{
                fontFamily:Fonts.regular,
                color:'red',
                marginTop:5,
                marginHorizontal:16
            }}>{errors.filter(el => el.field == 'name')[0].message}</Text>
            :
            null
        }
        <Input 
          style={{ marginTop:32 }}
          value={email}
          onChangeText={(text)=>setEmail(text)}
          placeholder={'Email Address'}
          leftComponent={
              <Fontisto
                  size={20}
                  color={Colors.primary}
                  name="email"
              />
          }
        />
        {
            errors.filter(el => el.field == 'email').length > 0
            ?
            <Text style={{
                fontFamily:Fonts.regular,
                color:'red',
                marginTop:5,
                marginHorizontal:16
            }}>{errors.filter(el => el.field == 'email')[0].message}</Text>
            :
            null
        }
        <Input 
            style={{ marginTop:32 }}
            value={password}
            onChangeText={(text)=>setPassword(text)}
            placeholder={'Password'}
            secureTextEntry={true}
            leftComponent={
                <Feather
                    size={20}
                    color={Colors.primary}
                    name="unlock"
                />
            }
        />
        {
            errors.filter(el => el.field == 'password').length > 0
            ?
            <Text style={{
                fontFamily:Fonts.regular,
                color:'red',
                marginTop:5,
                marginHorizontal:16
            }}>{errors.filter(el => el.field == 'password')[0].message}</Text>
            :
            null
        }
        
        <View style={styles.buttonContainer}>
            <ButtonLarge 
              isLoading={isLoading}
              onPress={() => {onSignUp()}}
              title="Register"
            />
        </View>
    </View>
  )
}

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
  buttonContainer:{
    marginHorizontal:16,
    marginTop:40
  }
});