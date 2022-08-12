
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keys} from './Keys' 

const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
};

const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {}
};

export default class Helper{
    
    static async showToast(msg) {
        Toast.show(msg);
    }

    static tConvert (time) {
        var timeArr = time.split(':')
        if(timeArr[0] >= 0 && timeArr[0] <= 11){
            if(timeArr[0] == 0){
                var hours = 12
                return hours + ":" + timeArr[1] + " AM"
            }
            else{
                return time + " AM"
            }
        }
        else{
            if(timeArr[0] == 12){
                var hours = 12
                return hours + ":" + timeArr[1] + " PM"   
            }
            else{
                var hours = timeArr[0] - 12
                return hours + ":" + timeArr[1] + " PM"
            }
            
        }
    }

    static saveUser(user) {
        storeData(Keys.USER_DATA, user);
    }
    static async getUser() {
        let user = await getData(Keys.USER_DATA);
        return user;
    }
    
    static saveToken(token) {
        storeData(Keys.ACCESS_TOKEN, token);
    }
    static async getToken() {
        let token = await getData(Keys.ACCESS_TOKEN);
        return token;
    }

    static parseDate(date){
        var newDate = ''
        var months = [
            'Jab',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]

        dateArr = date.toString().split('-')

        newDate = dateArr[2] + ", " + months[(parseInt(dateArr[1]) - 1)] + " " + dateArr[0]

        return newDate
    }

    static async isAuthenticated(){
       let token = await getData(Keys.ACCESS_TOKEN);
      
       token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIrOTIzMzMyODMyMjgzIiwidHlwZSI6IlZPTFVOVEVFUiIsInN1YiI6ImViYTI4YjQ4LTYxM2MtNDEwNy1iZWJhLTllNjE0OWEzYWM0ZiIsImlhdCI6MTY0NzI2MTg3NSwiZXhwIjoxNjQ5ODUzODc1fQ.2mx3eFp9TdT0h2_DJtSCDwXrP5Rx61IPx4V3ZehGwpw';
      if(token){
            return true
        }
        return false
    }

   
      
}