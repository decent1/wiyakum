import { StyleSheet, Text, View, TouchableOpacity,Image, ScrollView } from 'react-native'
import React ,{useState} from 'react'
import { Colors } from '../../utils/Colors'
import { ImagePath } from '../../utils/imagePath'
import AuthHeading from '../../components/AuthHeading'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Fonts } from '../../utils/Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
  const [list, setlist] = useState([
    {
      id: 1,
      image: ImagePath.avatar,
      name: 'Bader Al Maqbali',
      company:'Nama',
      points:2004334
    },
    {
      id: 2,
      image: ImagePath.avatar,
      name: 'Bader Al Maqbali',
      company:'Nama',
      points:200
    },
    {
      id: 3,
      image: ImagePath.avatar,
      name: 'Bader Al Maqbali',
      company:'Nama',
      points:200
    },
    {
      id: 4,
      image: ImagePath.avatar,
      name: 'Bader Al Maqbali',
      company:'Nama',
      points:200
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
         <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 16,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons size={20} color={Colors.black} name="arrow-back" />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: Fonts.semiBold,
              fontSize: 20,
              marginLeft: 16,
            }}>
            {'Top, Volunteer'}
          </Text>
        </View>
        <View style={styles.curve}>
          {list.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.row} activeOpacity={0.8}>
                <Text
                  style={{
                    fontFamily: Fonts.bold,
                    color: Colors.black,
                    fontSize: 18,
                    marginRight: 12,
                  }}>
                  {index + 1}
                </Text>
                <Image source={item.image} style={styles.pic} />
                <View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{item.name}</Text>
                    <Image source={ImagePath.token} style={styles.mblTxt} />
                  </View>
                  <View style={styles.msgContainer}>
                    <Text style={styles.company}>{item.company}</Text>
                    <Text
                      style={[
                        styles.company,
                        {fontSize: 18, fontFamily: Fonts.bold},
                      ]}>
                      {'Points:'} {item.points}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    AuthHeading: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 12,
      marginHorizontal: 16,
      marginBottom:30
    },
    curve:{
      width:'100%',
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      backgroundColor:Colors.white,
      height:'100%',
     
    },
    ///
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#DCDCDC',
      padding: 10,
       marginTop:20,
       marginHorizontal:20
    },
    pic: {
      width: 75,
      height: 75,
    },
    nameContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    nameTxt: {
      marginLeft: 15,
      fontWeight: '600',
      color: '#222',
      fontSize: 18,
      width:170,
    },
    mblTxt: {
      width:30,
      height:30
    },
   
    company: {
      fontSize: 15,
      marginLeft: 15,
    },
})