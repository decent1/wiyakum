import React, {useState} from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    TextInput,
    ScrollView,
    Alert,
    ActivityIndicator
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts'
import ButtonSmall from '../../components/Button/ButtonSmall';
import Input from '../../components/Input/Input';
import * as api from '../../networking/api'
import * as payload from '../../networking/payload'
import * as request from '../../networking/request'
import Helper from '../../utils/Helper';
import { useDispatch } from 'react-redux'


export default function ContactUs({navigation}){
    const dipatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])



    //Api call
    const Contact = async () => {
    if (!name) {
        alert('Please Enter Your Name');
        return;
      }
      if(!email){
          alert('Please Enter Your Email')
          return
      }
      if (!subject) {
          alert('Please Enter Your Subject Line')
          return
      }
      if (!message) {
          alert('Please Enter Your Message')
          return
      }
  try {
    setIsLoading(true);
        const response = await request.PostRequestWithAuthentication(
            api.ContactUsAPI(),
            payload.ContactUsPayload(name, email, subject, message),
          );
          setIsLoading(false) 
          if (response.success === true) {
              Alert.alert('uroosa',JSON.stringify(response.data));
             setName(''), setEmail(''), setSubject(''), setMessage('');
          }
          else{
            if(response.hasOwnProperty('errors') && response.errors.length > 0){
              setErrors(response.errors)
            }
            else{
              Alert.alert('Error', response.message)
            }
          }
    
   
  } catch (error) {
    console.log('err', error);
  }
};

    return <View style={styles.container}>
        <ScrollView>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.des}>We are pleased to communicate with us on the Wiyakum platform, and express your opinion and comments</Text>

        <Text style={[styles.inputTitle,{marginTop:32}]}>
            {'Full Name'}
        </Text>
        <Input 
            value={name}
            onChangeText={(text)=>setName(text)}
            placeholder={''}
            
            
        />  
        <Text style={[styles.inputTitle,{marginTop:12}]}>
            {'Email Address'}
        </Text>
        <Input 
            value={email}
            onChangeText={(text)=>setEmail(text)}
            placeholder={''}
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
        <Text style={[styles.inputTitle,{marginTop:12}]}>
            {'Subject'}
        </Text>
        <Input 
            value={subject}
            onChangeText={(text)=>setSubject(text)}
            placeholder={''}
            
            
        />
        <Text style={[styles.inputTitle,{marginTop:12}]}>
            {'Message'}
        </Text>
        <TextInput
            multiline
            value={message}
            onChangeText={(text)=>setMessage(text)}
            style={styles.messageBox}
        />


        <ButtonSmall 
        isLoading={isLoading}
        onPress={Contact}
            style={{
                marginTop:44,
            }}
            title={'Send Message'}
        />
        </ScrollView>
    </View>
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
        marginTop:36,
    },
    des:{
        marginHorizontal:16,
        fontSize:16,
        fontFamily:Fonts.regular,
        color:Colors.black,
        marginTop:16,
    },
    inputTitle:{
        fontFamily:Fonts.regular,
        color:Colors.black,
        marginHorizontal:16,
        fontSize:16,
    },
    messageBox:{
        height:100,
        marginHorizontal:16,
        borderWidth:1,
        borderColor:Colors.primary,
        backgroundColor: 'white',
        padding:8,
        fontFamily:Fonts.regular,
        marginTop:16
    }
});