import React, {useState} from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    Modal,
    TouchableOpacity,
    Alert
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts'
import InputPhone from '../../components/Input//InputPhone'
import CountryCodeModal from '../../components/Modal/CountryCodeModal'
import ButtonSmall from '../../components/Button/ButtonSmall';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as api from '../../networking/api'
import * as payload from '../../networking/payload'
import * as request from '../../networking/request'


export default function EnterPhone({navigation}){
    const [phone, setPhone] = useState('')
    const [selectedCountry, setSelectedCountry] = useState({"name":"Pakistan","topLevelDomain":[".pk"],"alpha2Code":"PK","alpha3Code":"PAK","callingCodes":["92"],"capital":"Islamabad","altSpellings":["PK","PÄkistÄn","Islamic Republic of Pakistan","IslÄmÄ« JumhÅ«riya'eh PÄkistÄn"],"subregion":"Southern Asia","region":"Asia","population":220892331,"latlng":[30.0,70.0],"demonym":"Pakistani","area":881912.0,"gini":31.6,"timezones":["UTC+05:00"],"borders":["AFG","CHN","IND","IRN"],"nativeName":"Pakistan","numericCode":"586","flags":{"svg":"https://flagcdn.com/pk.svg","png":"https://flagcdn.com/w320/pk.png"},"currencies":[{"code":"PKR","name":"Pakistani rupee","symbol":"â‚¨"}],"languages":[{"iso639_1":"ur","iso639_2":"urd","name":"Urdu","nativeName":"Ø§Ø±Ø¯Ùˆ"},{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"}],"translations":{"br":"PaquistÃ£o","pt":"PaquistÃ£o","nl":"Pakistan","hr":"Pakistan","fa":"Ù¾Ø§Ú©Ø³ØªØ§Ù†","de":"Pakistan","es":"PakistÃ¡n","fr":"Pakistan","ja":"ãƒ‘ã‚­ã‚¹ã‚¿ãƒ³","it":"Pakistan","hu":"PakisztÃ¡n"},"flag":"https://flagcdn.com/pk.svg","regionalBlocs":[{"acronym":"SAARC","name":"South Asian Association for Regional Cooperation"}],"cioc":"PAK","independent":true})
    const [modalVisible_CountryCode, setModalVisible_CountryCode] = useState(false);
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const OTP = async () =>{
        try{
            setIsLoading(true)
            const mobile =`+${selectedCountry.callingCodes[0]}${phone}`
            var response = await request.PostRequest(
                api.LoginAPI(),
                payload.LoginPayload(mobile),
            );
            setIsLoading(false)
              if (response.success == true) {
             navigation.navigate('EnterCode',{
                mobile:mobile  
             })
            }else{
                console.log(response.errors)
                setErrors(response.errors)
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
        <TouchableOpacity 
        onPress={() => {
            navigation.goBack()
        }}
        style={{
             height:50,
             width: 50,
             alignItems:'center',
             justifyContent:'center'
        }}>
            <Ionicons 
                size={20}
                color={Colors.primary}
                name="arrow-back"
            />
        </TouchableOpacity>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.des}>Enter your phone number</Text>
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

        <ButtonSmall 
            isLoading={isLoading}
            onPress={OTP}
            style={{
                marginTop:44,
            }}
            title={'Continue'}
        />
        
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
        marginTop:12,
    },
    des:{
        marginHorizontal:16,
        fontSize:16,
        fontFamily:Fonts.regular,
        color:Colors.black,
        marginTop:16,
    }
});