import React,{useEffect} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ImagePath } from '../utils/imagePath';
import { StackActions } from '@react-navigation/native';
import { addUser } from '../redux'
import Helper from '../utils/Helper';
import { useDispatch } from 'react-redux'

export default function Splash({navigation}){
    const dipatch = useDispatch()
    useEffect(() => {
        async function init(){
            let isAuthenticated = await Helper.isAuthenticated()
            if(isAuthenticated){
                let user = await Helper.getUser()
                let token = await Helper.getToken()
                dipatch(addUser({
                    id:user.id,
                    email:user.email,
                    name:user.name,
                    token:token,
                    mobile:user.mobile,
                    isLogin:true,
                    image:'',
                    device_token:'',
                    type:user.type
                }))
            }
            navigation.dispatch(StackActions.replace('AppStack'))
        }
        init()
    },[])
    useEffect(() => {
        function init(){
            setTimeout(() => {
                navigation.dispatch(
                    StackActions.replace('AppStack')
                );
            },3000)
        }
        init()
    })
    return <View style={styles.container}>
        <Image 
            style={styles.image}
            source={ImagePath.splash}
        />
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image:{
        height:'100%',
        width: '100%',
    }
})