import React,{useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Switch,
    Modal,
    Alert
} from 'react-native'
import { Colors } from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Fonts } from '../../utils/Fonts';

import InputPhone from '../../components/Input/InputPhone';
import Feather from 'react-native-vector-icons/Feather'
import ButtonLarge from '../../components/Button/ButtonLarge';
import CountryCodeModal from '../../components/Modal/CountryCodeModal'
import Input from '../../components/Input/Input';
import { addUser } from '../../redux'

import {useDispatch} from 'react-redux'
import * as api from '../../networking/api'
import * as payload from '../../networking/payload'
import * as request from '../../networking/request'
import Helper from '../../utils/Helper';

export default function SignIn({navigation}){
    const dipatch = useDispatch()
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const [selectedCountry, setSelectedCountry] = useState({"name":"Pakistan","topLevelDomain":[".pk"],"alpha2Code":"PK","alpha3Code":"PAK","callingCodes":["92"],"capital":"Islamabad","altSpellings":["PK","PÄkistÄn","Islamic Republic of Pakistan","IslÄmÄ« JumhÅ«riya'eh PÄkistÄn"],"subregion":"Southern Asia","region":"Asia","population":220892331,"latlng":[30.0,70.0],"demonym":"Pakistani","area":881912.0,"gini":31.6,"timezones":["UTC+05:00"],"borders":["AFG","CHN","IND","IRN"],"nativeName":"Pakistan","numericCode":"586","flags":{"svg":"https://flagcdn.com/pk.svg","png":"https://flagcdn.com/w320/pk.png"},"currencies":[{"code":"PKR","name":"Pakistani rupee","symbol":"â‚¨"}],"languages":[{"iso639_1":"ur","iso639_2":"urd","name":"Urdu","nativeName":"Ø§Ø±Ø¯Ùˆ"},{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"}],"translations":{"br":"PaquistÃ£o","pt":"PaquistÃ£o","nl":"Pakistan","hr":"Pakistan","fa":"Ù¾Ø§Ú©Ø³ØªØ§Ù†","de":"Pakistan","es":"PakistÃ¡n","fr":"Pakistan","ja":"ãƒ‘ã‚­ã‚¹ã‚¿ãƒ³","it":"Pakistan","hu":"PakisztÃ¡n"},"flag":"https://flagcdn.com/pk.svg","regionalBlocs":[{"acronym":"SAARC","name":"South Asian Association for Regional Cooperation"}],"cioc":"PAK","independent":true})
    const [modalVisible_CountryCode, setModalVisible_CountryCode] = useState(false);
    
    const [isEnabled, setIsEnabled] = useState(false);

    const [isLoading, setIsLoading] = useState(false)

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const SignIn = async () =>{
        try{
            setIsLoading(true)
            const mobile =`+${selectedCountry.callingCodes[0]}${phone}`
            const response = await request.PostRequest(
                api.SignInAPI(),
                payload.SignInPayload(mobile,password)
            )
            setIsLoading(false)
            if(response.success){
                Helper.saveUser(response.data)
                Helper.saveToken(response.access_token)
                dipatch(addUser({
                  id:response.data.id,
                  name:response.data.name,
                  email:response.data.email,
                  type:response.data.type,
                  isLogin:true,
                  token:response.access_token,
                }))
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
        catch(e){
            console.log(e)
        }
    }


    return <View style={styles.container}>
        <Modal
          visible={modalVisible_CountryCode}
          transparent={true}
          animationType={'slide'}
          onRequestClose={() => setModalVisible_CountryCode(!modalVisible_CountryCode)}
        >
          <CountryCodeModal 
            onSelect={(country)=>{
                setSelectedCountry(country)
                setModalVisible_CountryCode(!modalVisible_CountryCode)
            }}
            modalVisible={() => setModalVisible_CountryCode(!modalVisible_CountryCode)}
          />
        </Modal>
       

        <Text style={[styles.title,{ marginTop:28, }]}>
            {'Hello!'}
        </Text>
        <Text style={styles.title}>
            {'Welcome Back'}
        </Text>
        <Text style={styles.des}>{'Enter your credentials to continue'}</Text>

        <InputPhone 
            countryIcon={selectedCountry.flags.png}
            countryCode={selectedCountry.callingCodes[0]}
            value={phone}
            onChangeText={(value) => setPhone(value)}
            style={{
                marginTop: 16,
            }}
            onCountryCodePress={() => {
                setModalVisible_CountryCode(!modalVisible_CountryCode);
            }}
        /> 
         {
            errors.filter(el => el.field == 'mobile').length > 0
            ?
            <Text style={{
                fontFamily:Fonts.regular,
                color:'red',
                marginTop:5,
                marginHorizontal:16
            }}>{errors.filter(el => el.field == 'mobile')[0].message}</Text>
            :
            null
        }
        <Input 
            style={{
                marginTop:32
            }}
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

        <View style={styles.rememberMeContainer}>
            <Text style={styles.rememberMe}>{'Remember me'}</Text>
            <View style={styles.switchContainer}>
                <Switch
                    trackColor={{ false: "#EFF5F4", true: "#EFF5F4" }}
                    thumbColor={isEnabled ? "#EFF5F4" : Colors.primary}
                    ios_backgroundColor="#EFF5F4"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>

        <View style={styles.buttonContainer}>
            <ButtonLarge 
               onPress={SignIn}
                title="Login"
            />
            <ButtonLarge   
                onPress={()=>{
                    navigation.navigate('EnterPhone')
                }} 
                style={{
                    borderWidth:1,
                    borderColor:Colors.primary,
                    backgroundColor:'transparent',
                    marginTop:24
                }}
                textStyle={{
                    color:Colors.primary
                }}
                title="Sign Up"
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor,
        marginHorizontal:16
    },
    backButton:{
        height:50,
        width: 50,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        // marginHorizontal:16,
        fontSize:30,
        fontFamily:Fonts.semiBold,
        color:Colors.black,
    },
    des:{
        // marginHorizontal:16,
        fontSize:16,
        fontFamily:Fonts.regular,
        color:Colors.black,
        marginTop:16,
    },
    rememberMeContainer:{
        flexDirection:'row',
        marginHorizontal:16,
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:32
    },
    rememberMe:{
        fontSize:12,
        fontFamily:Fonts.regular,
        color:Colors.primary
    },
    switchContainer:{
        borderWidth:1,
        borderRadius:10,
        borderColor:Colors.primary
    },
    buttonContainer:{
        // marginHorizontal:16,
        marginTop:40
    }
})