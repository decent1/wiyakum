import { StyleSheet, Text, View , TextInput , Image, TouchableOpacity} from 'react-native'
import React , {useState , useEffect} from 'react'
import { Colors } from '../../utils/Colors'
import AuthHeading from '../../components/AuthHeading'
import { Fonts } from '../../utils/Fonts'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ImagePath } from '../../utils/imagePath'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import {commonStyles} from '../../utils/commonStyles'
const MyCampaign = ({navigation}) => {
    const [search, setSearch] = useState('');
     const [visible, setVisible] = useState(false);
     const hideMenu = () => setVisible(false);
     const showMenu = () => setVisible(true);
  return (
    <View style={styles.container}>
      {/* <View style={styles.AuthHeading}>
        <AuthHeading
          title={'My campaign'}
          style={{
            fontFamily: Fonts.semiBold,
            fontSize: 28,
          }}
        />
        <MaterialIcons
          name="keyboard-arrow-right"
          size={30}
          color={Colors.black}
        />
      </View> */}
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:16,
      }}>
         <TouchableOpacity 
          onPress={() => { navigation.goBack() }}
          style={{
             height:50,
             alignItems:'center',
             justifyContent:'center'
          }}>
            <Ionicons 
                size={20}
                color={Colors.black}
                name="arrow-back"
            />
        </TouchableOpacity>
        <Text style={{
          fontFamily:Fonts.semiBold,
          fontSize:20,
          marginLeft:16,
        }}>{'My Campaign'}</Text>
      </View>
      <View style={{
          flexDirection:'row',
          height:40,
          marginHorizontal:16,
          marginTop:8,
          marginBottom:16,
          backgroundColor:'#FAF9FF',
          borderRadius:5,
      }}>
          <TextInput
          onChangeText={search => setSearch({search})}
          style={styles.searchBar}
          placeholder="Search"
        />
          <View style={{
            height:40,
            width: 40,
            borderLeftWidth:1,
            borderColor:'#e6e6e6',
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Ionicons
              name="ios-search"
              size={20}
              color={'#77838F'}
            />
          </View>
      </View>
        

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.txt}>“Plant 1000 Trees”</Text>
            <Text style={styles.CardTime}>09:30 - 11:00</Text>
          </View>
          <Menu
            visible={visible}
            anchor={ <Entypo name="dots-three-vertical" size={16} onPress={showMenu} />}
            onRequestClose={hideMenu}>
            <MenuItem onPress={hideMenu} textStyle={{color:Colors.black}}>
              <AntDesign name="edit" size={20} color={Colors.black} />
              <Text style={{
                fontFamily:Fonts.regular,
                color:Colors.black,
                marginLeft:8,
              }}>{' Edit'}</Text>
            </MenuItem>
            <MenuItem onPress={hideMenu} textStyle={{color:Colors.black}}>
              <Entypo name="cross" size={20} color={'red'}  />
              <Text style={{
                fontFamily:Fonts.regular,
                color:Colors.black,
                marginLeft:8,
              }}>{' Delete'}</Text>
            </MenuItem>
          </Menu>
        </View>
        <View style={styles.middle}>
          <Ionicons name="people" size={16} color={Colors.black} />
          <Text
            style={{
              marginRight: 12,
              fontSize:12,
              fontFamily:Fonts.regular,
              color:Colors.black,
              marginLeft:4,
            }}>
            12 Of 14
          </Text>
          <Entypo name="location-pin" size={16} color={Colors.black} />
          <Text style={{
            fontFamily:Fonts.regular,
            fontSize:12,
          }}>Sohar, Swaihra </Text>
        </View>
        <View style={[styles.userImage,{
          alignItems:'center',
          marginTop:8,
        }]}>
          <View style={{flexDirection: 'row'}}>
            <Image style={[styles.avatar]} source={ImagePath.avatar} />
            <Image style={[styles.avatar]} source={ImagePath.avatar} />
            <Image style={styles.avatar} source={ImagePath.avatar} />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#00B7B7',
              height:40,
              width: 120,
              alignItems:'center',
              justifyContent:'center',
              borderRadius:10,
            }}>
            <Text
              style={{
                color: Colors.white,
                textAlign: 'center',
                fontFamily:Fonts.semiBold,
                fontSize:16,
              }}>
              More Detail
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('NewCampaign')
      }}
      style={{
        height:120,
        marginHorizontal:16,
        borderWidth:1,
        borderStyle:'dashed',
        marginTop:16,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <View style={{
          height:50,
          width: 50,
          borderRadius:5,
          backgroundColor:'#2A525B',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Ionicons
            name="ios-add"
            size={24}
            color={Colors.white}
          />
          
        </View>
        <Text style={{
          fontFamily:Fonts.regular,
          fontSize:16,
          marginTop:8,
          color:'#77838F'
        }}>{'Add New Campaign'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MyCampaign

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  AuthHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    marginHorizontal: 16,
  },
  searchBar: {
    fontSize: 18,
    flex:1,
    height: 40,
    alignSelf:'center',
    paddingHorizontal:16,
    fontFamily:Fonts.regular,
  },
  card:{
      marginHorizontal:16,
      padding:12,
      backgroundColor:'#EEF5DF',
      borderRadius:10,
      ...commonStyles.shadow,
  },
  cardHeader:{
      flexDirection:'row',
      justifyContent:'space-between',
  },
  txt:{
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.black,
  },
  CardTime:{
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    marginTop:4,
  },
  middle:{
      flexDirection:'row',
      justifyContent:'flex-end',
      marginTop:16,
      alignItems:'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: Colors.white,
    // marginBottom: 10,
    borderWidth:2,
    marginRight:-10
  },
  userImage:{
      flexDirection:'row',
      justifyContent:'space-between'
  }
});