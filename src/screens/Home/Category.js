import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React ,{useState , useEffect} from 'react';
import {Colors} from '../../utils/Colors';
import AuthHeading from '../../components/AuthHeading';
import { ImagePath } from '../../utils/imagePath';
import { Fonts } from '../../utils/Fonts';
import {useDispatch} from 'react-redux'
import * as api from '../../networking/api'
import * as payload from '../../networking/payload'
import * as request from '../../networking/request'
import Helper from '../../utils/Helper';

const Category = ({navigation}) => {
    const [category, setCategory] = useState([
      {
        id: 1,
        image: ImagePath.medicalHistory,
        title: 'Medical',
        color:'#15464E',
        txtColor:Colors.white
      },
      {
        id: 2,
        image: ImagePath.environmentalism,
        title: 'Environmental',
        color:'#C9E193',
        txtColor:Colors.black
      },
      {
        id: 3,
        image: ImagePath.presentation,
        title: 'Education',
        color:'#00B7B7',
        txtColor:Colors.white
      },
      {
        id: 4,
        image: ImagePath.support,
        title: 'Support',
        color:'#B6DDDF',
        txtColor:Colors.black
      },
    ]);

    const [user, setUser] = useState([
      {
        id:1,
        image: ImagePath.user,
        name: 'Ali Ammar',
        points: 2130,
      },
      {
        id:2,
        image: ImagePath.user,
        name: 'Ali Ammar',
        points: 2130,
      },
      {
        id:3,
        image: ImagePath.user,
        name: 'Ali Ammar',
        points: 2130,
      },
      {
        id:4,
        image: ImagePath.user,
        name: 'Ali Ammar',
        points: 2130,
      },
      {
        id:5,
        image: ImagePath.user,
        name: 'Ali Ammar',
        points: 2130,
      },
    ]);

    const [company, setcompany] = useState([
      {
        id: 1,
        image: ImagePath.company1,
        go:'SelectCompany'
      },
      {
        id: 2,
        image: ImagePath.company2,
        go:'SelectCompany'
      },
      {
        id: 3,
        image: ImagePath.company3,
        go:'SelectCompany'
      },
      {
        id: 4,
        image: ImagePath.company4,
        go:'SelectCompany'
      },
      {
        id: 5,
        image: ImagePath.company5,
        go:'SelectCompany'
      },
      {
        id: 6,
        image: ImagePath.company6,
        go:'SelectCompany'
      },
    ]);
    const [isLoading, setIsLoading] = useState(false)

//     const topVolunteer = async() =>{
// setIsLoading(true)
// try {
//   const response = await request.GetRequest()
// } catch (error) {
  
// }

//     }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Heading}>
          <AuthHeading
            title={'Search By Category, And Nama Companys'}
            style={{
              flex: 1,
              fontFamily:Fonts.semiBold
            }}
          />
          <Image style={styles.avatar} source={ImagePath.avatar} />
        </View>
        <View style={styles.category_container}>
          {category.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: '50%',
                }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    height: 147,
                    // borderWidth: 1,
                    alignItems: 'center',
                    marginRight: index % 2 == 0 ? 8 : 0,
                    marginLeft: index % 2 == 1 ? 8 : 0,
                    marginBottom: 16,
                    borderRadius: 10,
                    backgroundColor: item.color,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 75,
                      height: 82,
                      marginTop: 13,
                    }}
                  />
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 15,
                      marginTop: 15,
                      color: item.txtColor,
                      fontFamily: Fonts.bold,
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <View style={styles.TopVolunteers}>
          <Text
            style={{
              fontFamily: Fonts.bold,
              textAlign: 'center',
              fontSize: 24,
              marginTop: 29,
              color: Colors.black,
            }}>
            Top Volunteers
          </Text>
          <Text
            style={{
              color: '#707070',
              textAlign: 'center',
              fontFamily:Fonts.regular,
              marginHorizontal:30,
              marginTop:8,
            }}>
            The list of outstanding volunteers, who provided an excellent number
            of hours in volunteer work.
          </Text>
          <Image style={styles.avatarsecond} source={ImagePath.user} />
          <Text style={styles.username}> Bader Salim</Text>
          <Text style={styles.txt}>1200 Points</Text>
        </View>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'center',
          }}>
          {user.map((value, index) => {
            return (
              <View key={index} style={{
                width:'30%', 
                alignItems:'center',
                justifyContent:'center'
              }}>
                <Image style={styles.avatarsecond} source={value.image} />
                <Text style={styles.username}> {value.name}</Text>
                <Text style={styles.txt}>{value.points}Points</Text>
              </View>
            );
          })}
        </View>

        <AuthHeading
          title={'Nama Companys'}
          style={{
            marginLeft: 16,
            marginTop: 35,
          }}
        />
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginHorizontal:30,
            marginTop:20
          }}>
          {company.map((v, i) => {
            return (
              <View
                key={i}
                style={{
                  width: '50%',
                }}>
                <TouchableOpacity
                 onPress={()=>navigation.navigate(v.go,{
                   fullData:v
                 })}
                  activeOpacity={0.7}
                  style={{
                    height: 85,
                    backgroundColor: '#D1E9EA',
                    borderRadius: 5,
                    marginRight: i % 2 == 0 ? 20 : 0,
                    marginLeft: i % 2 == 1 ? 20 : 0,
                    marginBottom: 17,
                  }}>
                  <Image
                    source={v.image}
                    resizeMode="contain"
                    style={{
                      width: 108,
                      height: 63,
                      alignSelf: 'center',
                      marginVertical: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  Heading: {
    flexDirection: 'row',
    marginTop: 12,
    marginHorizontal:16,
    alignItems:'center',
    justifyContent:'space-between'
    
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 63,
    marginBottom: 10,
  },
  avatarsecond:{
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: Colors.white,
    marginBottom: 10,
    marginTop:16,
    borderWidth:2
  },
  category_container:{
    flexWrap:'wrap',
    flexDirection:'row',
    marginHorizontal:33,
    marginTop:30
  
  },
  TopVolunteers:{
    alignItems:'center'
  },
  username:{
  color:Colors.black,
  fontFamily:Fonts.semiBold,
  fontSize:16
  },
  txt:{
    color:'#0097A7',
    fontFamily:Fonts.regular,
    fontSize:12,
    marginTop:4
  }
});
